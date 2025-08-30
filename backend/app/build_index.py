import os
from services.rag_service import build_faiss_index   # ✅ no "app." prefix needed because same folder level

DATA_DIR = os.path.join(os.path.dirname(__file__), "data")

if __name__ == "__main__":
    # Collect all PDFs in the data folder
    pdfs = [
        os.path.join(DATA_DIR, f)
        for f in os.listdir(DATA_DIR)
        if f.lower().endswith(".pdf")
    ]

    if not pdfs:
        print("⚠️ No PDF files found in 'data/' folder.")
    else:
        print(f"📄 Found {len(pdfs)} PDFs. Building FAISS index...")
        build_faiss_index(pdfs)