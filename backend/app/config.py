import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    HUGGINGFACE_API_KEY: str = os.getenv("HUGGINGFACE_API_KEY", "")
    MODEL_NAME: str = os.getenv("MODEL_NAME", "openai-community/gpt-oss-120b")

settings = Settings()