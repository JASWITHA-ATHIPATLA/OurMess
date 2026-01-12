import React, { useState } from "react";
import styled from "styled-components";

/* ---------- STYLED COMPONENTS ---------- */
const ChatWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  border: 2px solid #0b1c2d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 400px;

  @media (max-width: 480px) {
    height: 350px;
    margin: 10px;
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 12px;
  overflow-y: auto;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Message = styled.div`
  background: ${(props) => (props.isUser ? "#1f3b5c" : "#ccc")};
  color: ${(props) => (props.isUser ? "white" : "black")};
  padding: 8px 12px;
  border-radius: 12px;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  max-width: 70%;
  word-wrap: break-word;
`;

const InputContainer = styled.div`
  display: flex;
  border-top: 1px solid #ddd;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 0 0 0 10px;
  font-size: 14px;
`;

const SendButton = styled.button`
  padding: 10px 16px;
  background: #0b1c2d;
  color: white;
  border: none;
  border-radius: 0 0 10px 0;
  cursor: pointer;

  &:hover {
    background: #1f3b5c;
  }
`;

/* ---------- COMPONENT ---------- */

function Discussions(){
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = {
      text: input,
      isUser: true,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <ChatWrapper>
      <MessagesContainer>
        {messages.map((msg, idx) => (
          <Message key={idx} isUser={msg.isUser}>
            {msg.text} <span style={{ fontSize: "10px", marginLeft: "6px" }}>{msg.timestamp}</span>
          </Message>
        ))}
      </MessagesContainer>

      <InputContainer>
        <Input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <SendButton onClick={handleSend}>Send</SendButton>
      </InputContainer>
    </ChatWrapper>
  );
};

export default Discussions;
