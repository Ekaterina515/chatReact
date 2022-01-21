import React, { useEffect, useRef, useState } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Message } from "./Message";

export const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const ref = useRef(null);

  useEffect(() => {
    const lastMessages = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessages.author !== "Bot") {
      timerId = setTimeout(() => {
        setMessages([
          ...messages,
          { author: "Bot", message: "Hello from bot!" },
        ]);
      }, 200);
    }

    return () => clearInterval(timerId);
  }, [messages]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const sendMessage = () => {
    if (value) {
      setMessages([
        ...messages,
        {
          author: "User",
          message: value,
          date: new Date(),
        },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  return (
    <div>
      {messages.map((message, index) => (
        <Message message={message} key={index} />
      ))}
      <br></br>
      <br></br>
      <Input
        fullWidth
        ref={ref}
        placeholder="enter message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            <Send onClick={sendMessage} />
          </InputAdornment>
        }
      />
    </div>
  );
};
