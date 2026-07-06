# Asset Optimization Scripts

Use `optimize_assets.py` as the main entrypoint:

```bash
python3 scripts/optimize_assets.py images
python3 scripts/optimize_assets.py svgs
python3 scripts/optimize_assets.py pdfs
python3 scripts/optimize_assets.py large-pdf
```

The individual scripts remain available for focused maintenance:

- `optimize_images.py`: compresses and resizes public JPG/PNG assets in place.
- `optimize_svgs.py`: removes SVG editor metadata and redundant whitespace.
- `optimize_pdfs.py`: safely optimizes normal publication PDFs.
- `optimize_large_pdf_images.py`: recompresses oversized image streams in image-heavy PDFs.

After optimization, run:

```bash
npm run docs:build
npm audit
```
