import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "./Chat.css";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const chatContainerRef = useRef(null);
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Initialize socket connection
  useEffect(() => {
    // Connect to the server
    const newSocket = io("http://localhost:4000");
    setSocket(newSocket);

    // Set up event listeners
    newSocket.on("connect", () => {
      console.log("Connected to server");
      setIsConnected(true);
    });

    newSocket.on("disconnect", () => {
      console.log("Disconnected from server");
      setIsConnected(false);
    });

    // Listen for chat responses from the server
    newSocket.on("chat_response", (response) => {
      setIsTyping(false);
      setChatHistory((prev) => [
        ...prev,
        {
          sender: "shop",
          text: response,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    });

    // Clean up on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // This function is no longer needed as we're using the server for responses

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !socket || !isConnected) return;

    // Get current time for timestamp
    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Add user message to chat history
    setChatHistory((prev) => [
      ...prev,
      { sender: "user", text: message, timestamp },
    ]);

    // Show typing indicator
    setIsTyping(true);

    // Send message to server via socket
    socket.emit("chat_message", message);

    // Clear input
    setMessage("");
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);

    // If opening the chat and no messages yet, add a welcome message
    if (!isOpen && chatHistory.length === 0) {
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setChatHistory([
        {
          sender: "shop",
          text: "Hello! How can we help you today? You can ask us about our servers for different budgets.",
          timestamp,
        },
      ]);
    }
  };

  // Function to handle suggestion button clicks
  const handleSuggestion = (suggestionText) => {
    // Set the message to the suggestion text
    setMessage(suggestionText);

    // Simulate a click on the send button
    const fakeEvent = { preventDefault: () => {} };
    sendMessage(fakeEvent);
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
            <h3>
              macHaven Shop Assistant{" "}
              {isConnected ? "(Connected)" : "(Connecting...)"}
            </h3>
          </div>

          <div className="chat-messages" ref={chatContainerRef}>
            {chatHistory.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <div className="message-content">
                  <p>{msg.text}</p>
                  <span className="message-time">{msg.timestamp}</span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message shop typing-indicator">
                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          {/* Suggestion buttons */}
          <div className="chat-suggestions">
            <button
              onClick={() =>
                handleSuggestion("Which server is best for low budget?")
              }
              className="suggestion-btn"
            >
              Low Budget Servers
            </button>
            <button
              onClick={() =>
                handleSuggestion("Which server is best for mid budget?")
              }
              className="suggestion-btn"
            >
              Mid Budget Servers
            </button>
            <button
              onClick={() =>
                handleSuggestion("Which server is best for high budget?")
              }
              className="suggestion-btn"
            >
              High Budget Servers
            </button>
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
