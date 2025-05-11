import { useState, useEffect, useRef } from "react";
import "./Chat.css";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const chatContainerRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Simple response generator function
  const getAutomatedResponse = (message) => {
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("hi") || lowerMsg.includes("hello")) {
      return "Hello! How can I help you today?";
    } else if (lowerMsg.includes("open") || lowerMsg.includes("hours")) {
      return "Our shop is open Monday to Friday, 9 AM to 6 PM, and Saturday from 10 AM to 4 PM.";
    } else if (lowerMsg.includes("location") || lowerMsg.includes("address")) {
      return "We are located at 123 Fashion Street, Dhaka, Bangladesh.";
    } else if (lowerMsg.includes("contact") || lowerMsg.includes("phone")) {
      return "You can reach us at +880 123-456-7890 or email us at support@varsity.com";
    } else {
      return "Thank you for your message. For specific inquiries, please contact us directly or visit our Contact page.";
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat history
    setChatHistory((prev) => [...prev, { sender: "user", text: message }]);

    // Get automated response
    setTimeout(() => {
      const response = getAutomatedResponse(message);
      setChatHistory((prev) => [...prev, { sender: "shop", text: response }]);
    }, 500); // Small delay to simulate response time

    // Clear input
    setMessage("");
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);

    // If opening the chat and no messages yet, add a welcome message
    if (!isOpen && chatHistory.length === 0) {
      setChatHistory([
        { sender: "shop", text: "Hello! How can I help you today?" },
      ]);
    }
  };

  return (
    <div className="chat-widget">
      {/* Chat button */}
      <button className="chat-button" onClick={toggleChat}>
        {isOpen ? "Close Chat" : "Chat with Us"}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <h3>macHaven Shop Assistant</h3>
          </div>

          <div className="chat-messages" ref={chatContainerRef}>
            {chatHistory.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>

          <form className="chat-input" onSubmit={sendMessage}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
