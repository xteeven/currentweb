#!/usr/bin/env python3
"""Compress PDFs by downsampling oversized embedded images.

This preserves PDF text/vector content and only replaces image streams when the
replacement is smaller than the original extracted image.
"""

from __future__ import annotations

import argparse
import io
import os
import shutil
import sys
import tempfile
from pathlib import Path

import fitz
from PIL import Image


def image_bytes(image: Image.Image, quality: int) -> bytes:
    output = io.BytesIO()
    if image.mode in {"RGBA", "LA"} or (
        image.mode == "P" and "transparency" in image.info
    ):
        image.save(output, format="PNG", optimize=True)
    else:
        if image.mode not in {"RGB", "L"}:
            image = image.convert("RGB")
        image.save(
            output,
            format="JPEG",
            quality=quality,
            optimize=True,
            progressive=True,
        )
    return output.getvalue()


def optimize_pdf(
    source: Path,
    output: Path,
    *,
    max_dimension: int,
    quality: int,
) -> tuple[int, int]:
    doc = fitz.open(source)
    original_pages = doc.page_count
    seen_xrefs: set[int] = set()
    replaced = 0

    for page in doc:
        for image_info in page.get_images(full=True):
            xref = image_info[0]
            if xref in seen_xrefs:
                continue
            seen_xrefs.add(xref)

            extracted = doc.extract_image(xref)
            original = extracted.get("image")
            if not original:
                continue
            if image_info[8] != "DCTDecode":
                continue

            try:
                image = Image.open(io.BytesIO(original))
                image.load()
            except Exception:
                continue

            width, height = image.size
            largest_side = max(width, height)
            if largest_side <= max_dimension:
                continue

            scale = max_dimension / largest_side
            new_size = (max(1, round(width * scale)), max(1, round(height * scale)))
            resized = image.resize(new_size, Image.Resampling.LANCZOS)
            candidate = image_bytes(resized, quality)

            if len(candidate) >= len(original):
                continue

            page.replace_image(xref, stream=candidate)
            replaced += 1

    output.parent.mkdir(parents=True, exist_ok=True)
    doc.save(output, garbage=4, deflate=True, deflate_images=True, clean=True)
    doc.close()

    optimized = fitz.open(output)
    optimized_pages = optimized.page_count
    optimized.close()
    if optimized_pages != original_pages:
        raise RuntimeError(
            f"{source}: page count changed from {original_pages} to {optimized_pages}"
        )

    return original_pages, replaced


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("pdfs", nargs="+", type=Path)
    parser.add_argument("--max-dimension", type=int, default=2000)
    parser.add_argument("--quality", type=int, default=85)
    parser.add_argument("--min-savings", type=float, default=0.05)
    parser.add_argument("--in-place", action="store_true")
    args = parser.parse_args()

    for source in args.pdfs:
        original_size = source.stat().st_size
        with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as temp:
            temp_path = Path(temp.name)

        try:
            pages, replaced = optimize_pdf(
                source,
                temp_path,
                max_dimension=args.max_dimension,
                quality=args.quality,
            )
            optimized_size = temp_path.stat().st_size
            saved = original_size - optimized_size
            ratio = saved / original_size if original_size else 0

            print(
                f"{source}: pages={pages} images={replaced} "
                f"{original_size} -> {optimized_size} ({ratio:.1%})"
            )

            if args.in_place and saved > 0 and ratio >= args.min_savings:
                shutil.copystat(source, temp_path)
                os.replace(temp_path, source)
                temp_path = None
        finally:
            if temp_path is not None:
                temp_path.unlink(missing_ok=True)

    return 0


if __name__ == "__main__":
    sys.exit(main())
