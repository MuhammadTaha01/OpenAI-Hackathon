from app.services.rag_service import query_faiss
from openai import OpenAI
from app.config import settings
import random

client = OpenAI(
    base_url="https://router.huggingface.co/v1",
    api_key=settings.HUGGINGFACE_API_KEY,
)

# 🔹 Different fallback styles (rotated so bot feels more human)
FALLBACK_RESPONSES = [
    "🤔 Hmm, I don’t seem to have detailed info about that in my knowledge base. But generally, it’s best to consult a doctor for proper guidance.",
    "📚 I couldn’t find that in my medical references. But you might want to check reliable sources like [Google Scholar](https://scholar.google.com/scholar?q={query}).",
    "⚠️ I don’t have enough info on this right now. Still, I’d recommend speaking to a healthcare professional.",
    "💡 Currently my knowledge base doesn’t cover this topic, but you could try searching [here](https://www.google.com/search?q={query}).",
    "😕 I wish I could answer that better. For now, I suggest getting medical advice from a trusted professional."
]

def get_fallback(query: str) -> str:
    """Pick a random fallback response and insert the query."""
    choice = random.choice(FALLBACK_RESPONSES)
    return choice.format(query=query.replace(" ", "+"))

def clean_query(q: str) -> str:
    """Normalize queries before retrieval (remove 'what is ' etc.)."""
    q = q.lower().strip()
    if q.startswith("what is "):
        q = q.replace("what is ", "").strip()
    return q

# 🔹 Main LLM query function
async def query_llm(prompt: str) -> str:
    try:
        # Handle greetings gracefully
        if prompt.lower().strip() in ["hi", "hello", "hey"]:
            return "👋 Hi, I’m Dr. TahAI, your personal medical assistant. If you’re having any issue, feel free to ask me!"

        # 🔹 Retrieve context from FAISS
        retrieved_chunks = query_faiss(clean_query(prompt), k=3)
        context = "\n\n".join(retrieved_chunks)

        if not context:  # No info found
            return get_fallback(prompt)

        # 🔹 Augment user prompt with retrieved knowledge
        augmented_prompt = f"""
        You are a personal medicine assistant.
        Use the following medical references when answering:

        {context}

        User query: {prompt}
        """

        completion = client.chat.completions.create(
        model="openai/gpt-oss-120b:fireworks-ai",
        messages=[
            {
                "role": "system",
                "content": f"""
                You are Dr. AI, a virtual medical assistant.

                Use ONLY the following reference text to answer:

                {context}

                Rules:
                - Always respond in this structured format:
                1️⃣ Explanation
                💊 Suggested management (if available in docs)
                ⚠️ When to seek medical help
                - If the reference doesn’t contain an answer, say so.
                """
            },
            {"role": "user", "content": prompt},
            ],
            max_tokens=800,
            temperature=0.6,
        )

        reply = completion.choices[0].message.content
        return reply or get_fallback(prompt)

    except Exception as e:
        return f"⚠️ Error querying model: {str(e)}"