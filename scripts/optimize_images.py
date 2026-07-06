#!/usr/bin/env python3
"""Optimize public website images in place.

The script keeps filenames and formats stable so existing Markdown/VuePress
references do not need to change. Images are replaced only when the optimized
candidate is smaller and Pillow can read it back successfully.
"""

from __future__ import annotations

import argparse
import os
import tempfile
from pathlib import Path

from PIL import Image, ImageOps


IMAGE_SUFFIXES = {".jpg", ".jpeg", ".png"}


def max_dimension_for(path: Path) -> int:
    parts = set(path.parts)
    if "icons" in parts:
        return 512
    if "blog_content" in parts:
        return 1920
    return 1600


def resize_if_needed(image: Image.Image, max_dimension: int) -> Image.Image:
    width, height = image.size
    largest = max(width, height)
    if largest <= max_dimension:
        return image.copy()

    ratio = max_dimension / largest
    size = (round(width * ratio), round(height * ratio))
    return image.resize(size, Image.Resampling.LANCZOS)


def save_candidate(source: Path, target: Path) -> None:
    suffix = source.suffix.lower()
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original)
        image = resize_if_needed(image, max_dimension_for(source))

        if suffix in {".jpg", ".jpeg"}:
            if image.mode not in {"RGB", "L"}:
                image = image.convert("RGB")
            image.save(
                target,
                format="JPEG",
                quality=82,
                optimize=True,
                progressive=True,
            )
            return

        if suffix == ".png":
            image.save(target, format="PNG", optimize=True)
            return

        raise ValueError(f"unsupported image type: {source}")


def is_valid_image(path: Path) -> bool:
    try:
        with Image.open(path) as image:
            image.verify()
        return True
    except Exception:
        return False


def optimize_image(path: Path, dry_run: bool = False) -> tuple[int, int, bool]:
    original_size = path.stat().st_size
    with tempfile.NamedTemporaryFile(
        suffix=path.suffix.lower(), dir=path.parent, delete=False
    ) as temp:
        temp_path = Path(temp.name)

    try:
        save_candidate(path, temp_path)
        if not is_valid_image(temp_path):
            raise ValueError(f"optimized image could not be verified: {path}")

        optimized_size = temp_path.stat().st_size
        should_replace = optimized_size < original_size
        if should_replace and not dry_run:
            os.replace(temp_path, path)
        return original_size, optimized_size, should_replace
    finally:
        if temp_path.exists():
            temp_path.unlink()


def iter_images(root: Path) -> list[Path]:
    return sorted(
        path
        for path in root.rglob("*")
        if path.is_file() and path.suffix.lower() in IMAGE_SUFFIXES
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "root",
        nargs="?",
        default="docs/.vuepress/public",
        help="Root directory containing images to optimize",
    )
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    root = Path(args.root)
    total_before = 0
    total_after = 0
    replaced = 0

    for path in iter_images(root):
        before, candidate, changed = optimize_image(path, dry_run=args.dry_run)
        after = candidate if changed else before
        total_before += before
        total_after += after
        if changed:
            replaced += 1
            print(f"{path}: {before} -> {candidate}")

    saved = total_before - total_after
    ratio = saved / total_before if total_before else 0
    mode = "would optimize" if args.dry_run else "optimized"
    print(
        f"{mode} {replaced} images; "
        f"{total_before} -> {total_after} bytes ({ratio:.1%} saved)"
    )


if __name__ == "__main__":
    main()
