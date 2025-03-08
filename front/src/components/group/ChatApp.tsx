import React, { useState } from "react";
import { Box } from "@mui/material";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import { ChatItem, SelectedChat } from "../../types/ChatTypes";

const ChatApp: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<SelectedChat>(null);

  // Handler function to update selected chat
  const handleSelectChat = (chat: ChatItem, type: "group" | "person") => {
    setSelectedChat({ chat, type });
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <ChatList onSelectChat={handleSelectChat} />
      <ChatWindow selectedChat={selectedChat} />
    </Box>
  );
};

export default ChatApp;
