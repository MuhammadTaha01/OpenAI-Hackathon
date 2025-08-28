from fastapi import APIRouter
from app.models.request_model import ChatRequest, ChatResponse
from app.services.llm_services import query_llm

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    reply = await query_llm(request.message)
    return ChatResponse(reply=reply)