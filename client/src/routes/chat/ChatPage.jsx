import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function ChatPage() {
  const { userId } = useParams(); // The user to chat with
  const { currentUser } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const message = {
      senderId: currentUser.id,
      receiverId: userId,
      text: input,
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, message]);
    setInput("");
  };

  return (
    <div style={{ background: "#fffbe6", minHeight: "100vh", fontFamily: "Montserrat, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 400, maxWidth: "90vw", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.05)", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
        <h2 style={{ color: "#bfa13a", fontWeight: 700, fontSize: 24, textAlign: "center" }}>Chat</h2>
        <div style={{ flexcur: 1, minHeight: 300, maxHeight: 300, overflowY: "auto", background: "#fcf5f3", borderRadius: 8, padding: 12, marginBottom: 8 }}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                textAlign: msg.senderId === currentUser.id ? "right" : "left",
                margin: "8px 0",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  background: msg.senderId === currentUser.id ? "#fece51" : "#eee",
                  color: "#222",
                  borderRadius: 16,
                  padding: "8px 16px",
                  maxWidth: "70%",
                  wordBreak: "break-word",
                }}
              >
                {msg.text}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSend} style={{ display: "flex", gap: 8 }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #fece51" }}
          />
          <button type="submit" style={{ padding: "0 20px", background: "#fece51", border: "none", borderRadius: 8, fontWeight: 600, cursor: "pointer" }}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage; 