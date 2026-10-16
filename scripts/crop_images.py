"""Crop product photos from rasterised catalogue pages using image-coordinates.json.

Writes public/images/products/<product_id>/01.jpg, 02.jpg ... (image_index 0 -> 01.jpg).
Safe to re-run: existing JPEGs are overwritten. Problems go to crop-errors.log.
"""
import argparse
import json
from pathlib import Path

from PIL import Image

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_PAGES = REPO_ROOT / "ria-image-staging" / "pages"
MAX_SIDE = 1200
JPEG_QUALITY = 85


def crop_one(entry: dict, pages_dir: Path, out_dir: Path) -> str | None:
    """Return an error message, or None on success."""
    try:
        pid, idx = entry["product_id"], int(entry["image_index"])
        pdf, page = entry["pdf"], int(entry["page"])
        x1, y1, x2, y2 = (int(v) for v in entry["bbox"])
    except (KeyError, TypeError, ValueError) as e:
        return f"bad entry {entry!r}: {e}"

    page_png = pages_dir / f"{pdf}-p{page:02d}.png"
    if not page_png.is_file():
        return f"{pid}[{idx}]: missing page {page_png.name}"

    with Image.open(page_png) as img:
        w, h = img.size
        if not (0 <= x1 < x2 <= w and 0 <= y1 < y2 <= h):
            return f"{pid}[{idx}]: bbox {[x1, y1, x2, y2]} outside page {w}x{h}"
        crop = img.crop((x1, y1, x2, y2)).convert("RGB")

    crop.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)  # only shrinks, never enlarges
    target = out_dir / pid / f"{idx + 1:02d}.jpg"
    target.parent.mkdir(parents=True, exist_ok=True)
    crop.save(target, "JPEG", quality=JPEG_QUALITY, optimize=True)
    return None


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--coords", type=Path, default=REPO_ROOT / "image-coordinates.json")
    ap.add_argument("--pages", type=Path, default=DEFAULT_PAGES)
    ap.add_argument("--out", type=Path, default=REPO_ROOT / "public" / "images" / "products")
    ap.add_argument("--log", type=Path, default=REPO_ROOT / "crop-errors.log")
    ap.add_argument("--only", nargs="+", metavar="ID", help="Crop just these product ids")
    args = ap.parse_args()

    entries = json.loads(args.coords.read_text(encoding="utf-8"))
    if args.only:
        entries = [e for e in entries if e.get("product_id") in set(args.only)]

    errors, ok = [], 0
    for entry in entries:
        err = crop_one(entry, args.pages, args.out)
        if err:
            errors.append(err)
        else:
            ok += 1

    args.log.write_text("\n".join(errors) + ("\n" if errors else ""), encoding="utf-8")
    print(f"{ok} cropped, {len(errors)} failed" + (f" (see {args.log})" if errors else ""))


if __name__ == "__main__":
    main()
