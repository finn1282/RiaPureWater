"""Turn each catalogue PDF page into a PNG for coordinate picking and cropping.

Output: <out>/1-40-p01.png ... 1-40-p40.png, 41-79-p01.png ... 41-79-p39.png
"""
import argparse
import sys
from pathlib import Path

import pymupdf

STAGING = Path(__file__).resolve().parent.parent / "ria-image-staging"
DEFAULT_OUT = STAGING / "pages"


def rasterise(pdf_path: Path, label: str, out_dir: Path, dpi: int, force: bool) -> int:
    doc = pymupdf.open(pdf_path)
    written = 0
    for i, page in enumerate(doc, start=1):
        target = out_dir / f"{label}-p{i:02d}.png"
        if target.exists() and not force:
            continue
        page.get_pixmap(dpi=dpi).save(target)
        written += 1
    print(f"{label}: {doc.page_count} pages, {written} written")
    return written


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--pdf-1-40", type=Path, default=STAGING / "pdfs" / "Product_Catalogue-1-40.pdf")
    ap.add_argument("--pdf-41-79", type=Path, default=STAGING / "pdfs" / "Product_Catalogue-41-79.pdf")
    ap.add_argument("--out", type=Path, default=DEFAULT_OUT)
    ap.add_argument("--dpi", type=int, default=300)
    ap.add_argument("--force", action="store_true", help="Overwrite PNGs that already exist")
    args = ap.parse_args()

    for p in (args.pdf_1_40, args.pdf_41_79):
        if not p.is_file():
            sys.exit(f"PDF not found: {p}")

    args.out.mkdir(parents=True, exist_ok=True)
    rasterise(args.pdf_1_40, "1-40", args.out, args.dpi, args.force)
    rasterise(args.pdf_41_79, "41-79", args.out, args.dpi, args.force)
    print(f"Done. Pages are in {args.out}")


if __name__ == "__main__":
    main()
