#!/usr/bin/env python3
"""Conservatively optimize public SVG files in place.

This removes editor metadata and redundant whitespace while preserving paths,
styles, and filenames. Files are replaced only when the candidate remains valid
XML and is smaller than the original.
"""

from __future__ import annotations

import argparse
import os
import re
import tempfile
import xml.etree.ElementTree as ET
from pathlib import Path


REMOVABLE_BLOCKS = [
    re.compile(r"<metadata\b[^>]*>.*?</metadata>", re.DOTALL | re.IGNORECASE),
    re.compile(r"<sodipodi:namedview\b[^>]*/>", re.DOTALL | re.IGNORECASE),
    re.compile(r"<sodipodi:namedview\b[^>]*>.*?</sodipodi:namedview>", re.DOTALL | re.IGNORECASE),
    re.compile(r"<defs\b[^>]*/>", re.DOTALL | re.IGNORECASE),
]

REMOVABLE_ATTRS = [
    re.compile(r"\s+xmlns:(?:dc|cc|rdf|sodipodi|inkscape)=\"[^\"]*\""),
    re.compile(r"\s+(?:sodipodi|inkscape):[A-Za-z_:.-]+=\"[^\"]*\""),
]


def optimize_svg_text(text: str) -> str:
    optimized = text
    optimized = re.sub(r"<\?xml[^>]*>\s*", "", optimized, count=1)
    optimized = re.sub(r"<!--.*?-->", "", optimized, flags=re.DOTALL)

    for pattern in REMOVABLE_BLOCKS:
        optimized = pattern.sub("", optimized)
    for pattern in REMOVABLE_ATTRS:
        optimized = pattern.sub("", optimized)

    optimized = re.sub(r">\s+<", "><", optimized)
    optimized = re.sub(r"\s{2,}", " ", optimized)
    return optimized.strip() + "\n"


def is_valid_svg(text: str) -> bool:
    try:
        root = ET.fromstring(text)
    except ET.ParseError:
        return False
    return root.tag.endswith("svg")


def optimize_file(path: Path, dry_run: bool = False) -> tuple[int, int, bool]:
    original = path.read_text(encoding="utf-8")
    optimized = optimize_svg_text(original)
    if not is_valid_svg(optimized):
        raise ValueError(f"optimized SVG is not valid XML: {path}")

    original_size = len(original.encode("utf-8"))
    optimized_size = len(optimized.encode("utf-8"))
    should_replace = optimized_size < original_size
    if should_replace and not dry_run:
        with tempfile.NamedTemporaryFile(
            mode="w",
            encoding="utf-8",
            suffix=".svg",
            dir=path.parent,
            delete=False,
        ) as temp:
            temp.write(optimized)
            temp_path = Path(temp.name)
        os.replace(temp_path, path)
    return original_size, optimized_size, should_replace


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("root", nargs="?", default="docs/.vuepress/public")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    root = Path(args.root)
    total_before = 0
    total_after = 0
    replaced = 0

    for path in sorted(root.rglob("*.svg")):
        before, candidate, changed = optimize_file(path, dry_run=args.dry_run)
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
        f"{mode} {replaced} SVGs; "
        f"{total_before} -> {total_after} bytes ({ratio:.1%} saved)"
    )


if __name__ == "__main__":
    main()
