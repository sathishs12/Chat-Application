import React, { useState } from "react";
import { Box, TextField, Typography, Paper, Avatar, Badge } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export interface ChatItem {
  id: number;
  name: string;
  message: string;
  time: string;
  image: string;
  seen?: boolean;
  isOnline: boolean;
}

interface ChatListProps {
  onSelectChat: (chat: ChatItem, type: "group" | "person") => void;
}

const ChatList: React.FC<ChatListProps> = ({ onSelectChat }) => {
  const [search, setSearch] = useState("");

  const groups: ChatItem[] = [
    { id: 1, name: "Friends Forever", message: "Let's catch up!", time: "Today, 9:52 AM", image: "https://via.placeholder.com/50", isOnline: false },
    { id: 2, name: "Meme Gang", message: "Kyawww 🐱", time: "Yesterday, 7:30 AM", image: "https://via.placeholder.com/50", isOnline: true },
    { id: 3, name: "Dev Club", message: "Meeting at 5 PM!", time: "Today, 8:45 AM", image: "https://via.placeholder.com/50", isOnline: true },
    { id: 4, name: "Gaming Squad", message: "Tonight’s session?", time: "Yesterday, 10:00 PM", image: "https://via.placeholder.com/50", isOnline: false },
  ];

  const people: ChatItem[] = [
    { id: 3, name: "Anil", message: "Aye! Birthday day", time: "Today, 9:52 AM", image: "https://via.placeholder.com/50", seen: true, isOnline: true },
    { id: 4, name: "Chuuthtya", message: "Tasuky", time: "10:06 AM", image: "https://via.placeholder.com/50", seen: false, isOnline: false },
    { id: 5, name: "Priya", message: "See you soon!", time: "Yesterday, 4:30 PM", image: "https://via.placeholder.com/50", seen: true, isOnline: true },
    { id: 6, name: "Rahul", message: "Call me later", time: "Today, 2:00 PM", image: "https://via.placeholder.com/50", seen: false, isOnline: true },
    { id: 7, name: "Sanya", message: "Hey there!", time: "Yesterday, 8:30 AM", image: "https://via.placeholder.com/50", seen: true, isOnline: false },
  ];

  // Filter groups and people based on search
  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ width: 350, p: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2, backgroundColor: "#F1F5F9", borderRadius: 2 }}
      />

      <Paper sx={{ p: 2, mb: 2, borderRadius: 3 }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
          Groups
        </Typography>
        <Box sx={{ maxHeight: 180, overflowY: "auto" }}>
          {filteredGroups.length > 0 ? (
            filteredGroups.map((group) => (
              <Box
                key={group.id}
                onClick={() => onSelectChat(group, "group")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 1,
                  cursor: "pointer",
                  borderBottom: "1px solid #E0E0E0",
                  "&:last-child": { borderBottom: "none" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar src={group.image} alt={group.name} sx={{ width: 45, height: 45, mr: 2 }} />
                  <Box>
                    <Typography fontWeight="bold">{group.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{group.message}</Typography>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary">{group.time}</Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">
              No groups found
            </Typography>
          )}
        </Box>
      </Paper>

      <Paper sx={{ p: 2, borderRadius: 3 }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
          People
        </Typography>
        <Box sx={{ maxHeight: 294, overflowY: "auto" }}>
          {filteredPeople.length > 0 ? (
            filteredPeople.map((person) => (
              <Box
                key={person.id}
                onClick={() => onSelectChat(person, "person")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 1,
                  cursor: "pointer",
                  borderBottom: "1px solid #E0E0E0",
                  "&:last-child": { borderBottom: "none" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar src={person.image} alt={person.name} sx={{ width: 45, height: 45, mr: 2 }} />
                  <Box>
                    <Typography fontWeight="bold">{person.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{person.message}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>
                    {person.time}
                  </Typography>
                  {person.seen ? <DoneAllIcon sx={{ color: "#4CAF50", fontSize: 16 }} /> : <Badge color="error" variant="dot" />}
                </Box>
              </Box>
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">
              No people found
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatList;
