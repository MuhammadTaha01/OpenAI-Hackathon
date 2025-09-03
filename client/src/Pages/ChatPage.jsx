import { useState, useRef, useEffect } from "react";
import React from "react";
import ReactMarkdown from "react-markdown";
import { FaArrowDown } from "react-icons/fa";

function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "👋 Hi, I’m Dr. TahAI, your personal medical assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [thinkingEmoji, setThinkingEmoji] = useState("🤔");
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const chatEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const startTimeRef = useRef(null);

  // Scroll to bottom when new message arrives
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Cycle emojis while bot is "thinking"
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

  // Detect scroll position → show/hide scroll button
  useEffect(() => {
    const handleScroll = () => {
      if (!chatContainerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } =
        chatContainerRef.current;
      setShowScrollBtn(scrollTop + clientHeight < scrollHeight - 100);
    };
    const container = chatContainerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    startTimeRef.current = Date.now();
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
        Math.round((Date.now() - startTimeRef.current) / 1000)
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
    <div className="flex flex-col items-center bg-black min-h-screen pt-20 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
        🧠 Dr. TahAI – Your Personal Medical Assistant
      </h1>

      {/* Chat Container */}
      <div className="relative w-full max-w-2xl bg-gray-900/80 backdrop-blur rounded-2xl shadow-lg p-4 flex flex-col h-[500px] border border-gray-700">
        {/* Messages */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-hide pb-8"
        >
          {messages.map((msg, idx) => (
            <div key={idx}>
              <div
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[75%] break-words relative ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                      : "bg-gray-800 text-gray-100"
                  }`}
                >
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent animate-gradient-border pointer-events-none"></div>
                </div>
              </div>
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
              <div className="px-4 py-2 rounded-2xl bg-gray-800 text-gray-100 animate-pulse relative">
                Bot is thinking {thinkingEmoji}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent animate-gradient-border pointer-events-none"></div>
              </div>
            </div>
          )}
          <div ref={chatEndRef}></div>
        </div>

        {/* Scroll to Bottom Button */}
        {showScrollBtn && (
          <button
            onClick={scrollToBottom}
            className="absolute bottom-20 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
          >
            <FaArrowDown />
          </button>
        )}

        {/* Input */}
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400"
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

      {/* Styles */}
      <style>
        {`
          @keyframes gradientBorder {
            0% { border-color: #34d399; } 
            25% { border-color: #f87171; }
            50% { border-color: #60a5fa; }
            75% { border-color: #facc15; }
            100% { border-color: #fb923c; }
          }
          .animate-gradient-border {
            animation: gradientBorder 3s linear infinite;
          }
          /* Hide scrollbar but keep scroll functionality */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
}

export default ChatPage;