#!/usr/bin/env python3
"""Optimize a large image-heavy PDF while preserving text/vector content."""

from __future__ import annotations

import argparse
import io
import os
from pathlib import Path

import fitz
from PIL import Image


def has_transparency(image: Image.Image) -> bool:
    if image.mode in {"RGBA", "LA"}:
        alpha = image.getchannel("A")
        return alpha.getextrema()[0] < 255
    return image.mode == "P" and "transparency" in image.info


def resized(image: Image.Image, max_dimension: int) -> Image.Image:
    width, height = image.size
    largest = max(width, height)
    if largest <= max_dimension:
        return image.copy()
    ratio = max_dimension / largest
    return image.resize(
        (round(width * ratio), round(height * ratio)),
        Image.Resampling.LANCZOS,
    )


def image_candidate(image: Image.Image, max_dimension: int, quality: int) -> bytes:
    image = resized(image, max_dimension)
    out = io.BytesIO()
    if has_transparency(image):
        image.save(out, format="PNG", optimize=True)
    else:
        if image.mode not in {"RGB", "L"}:
            image = image.convert("RGB")
        image.save(
            out,
            format="JPEG",
            quality=quality,
            optimize=True,
            progressive=True,
        )
    return out.getvalue()


def optimize_pdf(source: Path, output: Path, max_dimension: int, quality: int) -> None:
    doc = fitz.open(source)
    original_pages = doc.page_count
    seen: set[int] = set()
    replaced = 0
    saved = 0

    for page in doc:
        for info in page.get_images(full=True):
            xref = info[0]
            if xref in seen:
                continue
            seen.add(xref)

            extracted = doc.extract_image(xref)
            original = extracted.get("image")
            if not original:
                continue

            try:
                image = Image.open(io.BytesIO(original))
                image.load()
            except Exception:
                continue

            width, height = image.size
            if max(width, height) < 900:
                continue

            candidate = image_candidate(image, max_dimension, quality)
            if len(candidate) >= len(original) * 0.95:
                continue

            page.replace_image(xref, stream=candidate)
            replaced += 1
            saved += len(original) - len(candidate)

    doc.save(output, garbage=4, deflate=True, deflate_images=True, clean=True)
    doc.close()

    optimized = fitz.open(output)
    if optimized.page_count != original_pages:
        optimized.close()
        raise RuntimeError(
            f"page count changed from {original_pages} to {optimized.page_count}"
        )
    optimized.close()
    print(f"replaced {replaced} images; saved {saved} extracted-image bytes")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source")
    parser.add_argument("output")
    parser.add_argument("--max-dimension", type=int, default=1800)
    parser.add_argument("--quality", type=int, default=82)
    args = parser.parse_args()

    source = Path(args.source)
    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    temp = output.with_suffix(output.suffix + ".tmp")
    optimize_pdf(source, temp, args.max_dimension, args.quality)
    os.replace(temp, output)


if __name__ == "__main__":
    main()
