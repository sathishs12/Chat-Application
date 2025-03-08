import React, { useState } from "react";
import { Box, Typography, TextField, IconButton, Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ChatItem } from "./ChatList";

interface ChatWindowProps {
    selectedChat: { chat: ChatItem; type: "group" | "person" } | null;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ selectedChat }) => {
    const [messages, setMessages] = useState<{ text: string; sender: "me" | "them" }[]>([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, { text: input, sender: "me" }]);
        setInput("");
    };

    if (!selectedChat?.chat) {
        return (
            <Box sx={{
                flex: 1, p: 2, display: "flex", alignItems: "center", backgroundColor: "White", justifyContent: "center",
                height: "678px", marginRight: "10px", borderRadius: "10px", marginBottom: "20px", marginTop: "10px"
            }}>
                <Typography
                    sx={{
                        fontSize: "34px",
                        fontWeight: "bold",
                        fontFamily: "cursive",
                        color: "rebeccapurple",
                        textAlign: "center"
                    }}
                >
                    Select a conversation
                </Typography>

            </Box>
        );
    }

    return (
        <Box sx={{
            flex: 1, display: "flex", flexDirection: "column", p: 2, backgroundColor: "White",
            height: "678px", marginRight: "10px", borderRadius: "10px", marginBottom: "20px", marginTop: "10px"
        }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar src={selectedChat.chat.image} sx={{ width: 40, height: 40, mr: 2 }} />
                <Box>
                    <Typography variant="h6" fontWeight="bold" sx={{fontFamily: "cursive",}}>{selectedChat.chat.name}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <FiberManualRecordIcon sx={{ fontSize: 12, color: selectedChat.chat.isOnline ? "green" : "gray", mr: 1 }} />
                        <Typography variant="body2" color="textSecondary">
                            {selectedChat.chat.isOnline ? "Online" : "Offline"}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
                {messages.map((msg, index) => (
                    <Typography key={index} sx={{ alignSelf: msg.sender === "me" ? "flex-end" : "flex-start", p: 1, borderRadius: 2, mb: 1, backgroundColor: msg.sender === "me" ? "#d1e7ff" : "#eee" }}>
                        {msg.text}
                    </Typography>
                ))}
            </Box>

            <Box sx={{ display: "flex", p: 1, backgroundColor: "#f1f5f9", borderRadius: 3 }}>
                <TextField fullWidth placeholder="Type a message..." value={input} onChange={(e) => setInput(e.target.value)} />
                <IconButton onClick={sendMessage}><SendIcon /></IconButton>
            </Box>
        </Box>
    );
};

export default ChatWindow;
