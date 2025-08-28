import os
from openai import OpenAI
from app.config import settings

# Hugging Face router = OpenAI-compatible endpoint
client = OpenAI(
    base_url="https://router.huggingface.co/v1",
    api_key=settings.HUGGINGFACE_API_KEY,
)

async def query_llm(prompt: str) -> str:
    try:
        completion = client.chat.completions.create(
            model="openai/gpt-oss-120b:fireworks-ai",
            messages=[
                {"role": "system", "content": "You are a helpful medical assistant."},
                {"role": "user", "content": prompt},
            ],
            max_tokens=300,
            temperature=0.7,
        )
        return completion.choices[0].message.content

    except Exception as e_120b:
        print("⚠️ 120B failed, falling back to 20B:", e_120b)
        try:
            completion = client.chat.completions.create(
                model="openai/gpt-oss-20b:fireworks-ai",
                messages=[
                    {"role": "system", "content": "You are a helpful medical assistant."},
                    {"role": "user", "content": prompt},
                ],
                max_tokens=300,
                temperature=0.7,
            )
            return completion.choices[0].message.content
        except Exception as e_20b:
            print("⚠️ 20B also failed:", e_20b)
            return f"Error: {str(e_20b)}"