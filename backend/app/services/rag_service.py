import os
import faiss
from langchain_community.vectorstores import FAISS
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings

# Path where FAISS index will be saved
VECTOR_DB_PATH = "vectorstore/"

# Embeddings model
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")


def build_faiss_index(pdf_files: list[str]):
    documents = []
    for pdf in pdf_files:
        loader = PyPDFLoader(pdf)
        documents.extend(loader.load())

    # Split into chunks
    splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    docs = splitter.split_documents(documents)

    # Create FAISS index
    db = FAISS.from_documents(docs, embeddings)
    db.save_local(VECTOR_DB_PATH)
    print("✅ FAISS index built & saved!")


def load_faiss_index():
    return FAISS.load_local(VECTOR_DB_PATH, embeddings, allow_dangerous_deserialization=True)


def query_faiss(query: str, k: int = 10) -> list[str]:
    db = load_faiss_index()
    results = db.similarity_search_with_score(query, k=k)
    return [doc.page_content for doc, _ in results]