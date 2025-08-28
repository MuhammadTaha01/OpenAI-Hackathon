from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import chatbot
import uvicorn

app = FastAPI(title="Medical Chatbot API", version="1.0")

# ✅ Enable CORS so frontend can call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # in production, replace with frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include chatbot routes
app.include_router(chatbot.router, prefix="/api", tags=["Chatbot"])

@app.get("/")
async def root():
    return {"message": "Medical Chatbot Backend is running"}

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
