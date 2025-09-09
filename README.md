# 🩺 CureAI – An AI Doctor for Humanity  

[![Hackathon](https://img.shields.io/badge/OpenAI%20Hackathon-For%20Humanity-blue)](https://devpost.com)  
[![Model](https://img.shields.io/badge/Model-gpt--oss--120b-orange)](https://huggingface.co/openai/gpt-oss-120b)  

CureAI is an **AI-powered health assistant** that helps people describe their symptoms in natural language and get instant, reliable health guidance.  

It was built for the **OpenAI Open Model Hackathon** (*For Humanity* category) with the mission of making healthcare more **accessible, empathetic, and empowering** for everyone.  

⚠️ **Disclaimer**: CureAI is **not a substitute for professional medical advice**. Always consult a qualified healthcare provider for serious or persistent conditions.  

---

## ✨ Features  

- 🧠 **AI Symptom Analysis** – powered by **OpenAI’s gpt-oss-120B**  
- 💬 **Natural Language Input** – describe symptoms just like talking to a doctor  
- 🏥 **Clear Guidance** – possible causes, safe home remedies, and advice on when to seek care  
- 🌍 **Human-Centered Design** – simple, accessible, and empathetic responses  
- 🔒 **Safety First** – emphasizes urgent care when needed  

---

## 🛠️ Tech Stack  

- **AI Models**: [gpt-oss-120B](https://huggingface.co/openai/gpt-oss-120b)  
- **Backend**: Python (Flask / FastAPI)  
- **Frontend**: React + Tailwind  
- **Inference**: Hugging Face  

---

## 📦 Working Of Project  

1. **Clone the repository**  
```bash
git clone https://github.com/your-username/cureai.git
cd cureai
```
2. **Do add your hugging Face API Keys**  
```bash
HUGGING_FACE = ???????????????
OpenAI-Model = ????????
```

3. **Start the backend and Frontend**  
```bash
npm run dev
```
```bash
*(http://localhost:8000/docs)
uvicorn command for FastAPI
```

4. **The project will be started**  
```Example Input
I have a sore throat and mild fever for 2 days.
```
