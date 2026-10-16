# Product image scripts

Two scripts that turn the catalogue PDFs into product photos for the site.

## One-time setup

```
python3 -m pip install pymupdf pillow
```

Needs Python 3.10 or newer.

## Step 1: Turn PDF pages into PNGs

Run from the repo root:

```
python3 scripts/rasterise_pdfs.py
```

- Reads the two PDFs from `ria-image-staging/pdfs/`. Use `--pdf-1-40` and `--pdf-41-79` to point somewhere else.
- Writes 79 PNGs to `ria-image-staging/pages/`, named `1-40-p01.png` to `41-79-p39.png`.
- Each page is 2481 × 3367 px. That matches the scans inside the PDFs, so no detail is lost.
- Takes about 30 seconds and uses about 225 MB. `ria-image-staging/` is in `.gitignore`, so none of this is committed. You can always make the pages again.
- Already-made pages are skipped. Add `--force` to redo them.

## Step 2: Crop the product photos

```
python3 scripts/crop_images.py
```

- Reads `image-coordinates.json` in the repo root.
- Writes `public/images/products/<id>/01.jpg`, `02.jpg` and so on.
- Photos are JPEG quality 85, at most 1200 px on the longest side.
- Safe to run again after fixing a box. Old images are overwritten.
- Anything that fails (missing page, box outside the page) is listed in `crop-errors.log`.

To redo just a few products:

```
python3 scripts/crop_images.py --only jx-1s k-2200
```

## image-coordinates.json format

```json
[
  {
    "product_id": "jx-1s",
    "image_index": 0,
    "pdf": "1-40",
    "page": 5,
    "bbox": [1240, 500, 2400, 2600],
    "notes": "hero (right half)"
  }
]
```

- `bbox` is `[left, top, right, bottom]` in pixels on the page PNG.
- `image_index` 0 becomes `01.jpg`, 1 becomes `02.jpg`.
- `pdf` and `page` match the `image_refs` entry in `products.json`.
