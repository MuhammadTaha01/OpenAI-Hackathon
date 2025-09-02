import { useState, useRef, useEffect } from "react";
import React from "react";
import Navbar from "../CommonCompo/Navbar";
import ReactMarkdown from "react-markdown";

function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "👋 Hi, I’m Dr. AI, your personal medicine assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [thinkingEmoji, setThinkingEmoji] = useState("🤔");

  const chatEndRef = useRef(null);
  const startTimeRef = useRef(null); // ✅ useRef for timing (instant updates)

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Cycle through emojis while bot is "thinking"
  useEffect(() => {
    if (!loading) return;
    const emojis = ["🤔", "🧐", "🌀", "💭"];
    let i = 0;
    const interval = setInterval(() => {
      setThinkingEmoji(emojis[i % emojis.length]);
      i++;
    }, 700);
    return () => clearInterval(interval);
  }, [loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    startTimeRef.current = Date.now(); // ✅ mark start time instantly
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: newMessage.text }),
      });

      const data = await res.json();
      const duration = Math.max(
        1,
        Math.round((Date.now() - startTimeRef.current) / 1000) // ✅ real seconds
      );

      const botMessage = {
        role: "bot",
        text: data.reply,
        meta: `⏱️ Thought for ${duration} sec`,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Error contacting server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center bg-gray-900 min-h-screen pt-20 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          🧠 RAG Psychiatrist Bot
        </h1>

        {/* Chat Container */}
        <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col h-[500px] overflow-hidden">
          <div className="flex-1 overflow-y-auto pr-2 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx}>
                <div
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[70%] break-words
                      ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                          : "bg-gray-700 text-gray-100"
                      }`}
                  >
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                </div>
                {/* Show meta (thought duration) */}
                {msg.meta && (
                  <div
                    className={`text-xs text-gray-400 mt-1 ${
                      msg.role === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    {msg.meta}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-2xl bg-gray-700 text-gray-100 animate-pulse">
                  Bot is thinking {thinkingEmoji}
                </div>
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          {/* Input */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white px-6 py-2 rounded-full transition-colors duration-200"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatPage;