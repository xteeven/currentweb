#!/usr/bin/env python3
"""Run the website asset optimizers from one entrypoint."""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def run(command: list[str]) -> None:
    print("+", " ".join(command))
    subprocess.run(command, cwd=ROOT, check=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "target",
        choices=["images", "svgs", "pdfs", "large-pdf", "all"],
        help="Asset group to optimize",
    )
    parser.add_argument(
        "--large-pdf",
        default="docs/.vuepress/public/papers/villa-2019-touching-is-believing-thesis.pdf",
        help="PDF path used by the large-pdf target",
    )
    args = parser.parse_args()

    tasks: list[list[str]] = []
    if args.target in {"images", "all"}:
        tasks.append([sys.executable, "scripts/optimize_images.py"])
    if args.target in {"svgs", "all"}:
        tasks.append([sys.executable, "scripts/optimize_svgs.py"])
    if args.target in {"pdfs", "all"}:
        tasks.append([sys.executable, "scripts/optimize_pdfs.py"])
    if args.target in {"large-pdf", "all"}:
        pdf = Path(args.large_pdf)
        tasks.append(
            [
                sys.executable,
                "scripts/optimize_large_pdf_images.py",
                str(pdf),
                str(pdf),
            ]
        )

    for task in tasks:
        run(task)


if __name__ == "__main__":
    main()
