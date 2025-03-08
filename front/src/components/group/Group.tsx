import React, { useState } from "react";
import { Box, TextField, Typography, Paper, Avatar, Badge } from "@mui/material";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const Group: React.FC = () => {
  const [search, setSearch] = useState("");

  const groups = [
    {
      id: 1,
      name: "Friends Forever",
      message: "Let's catch up!",
      time: "Today, 9:52 AM",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Meme Gang",
      message: "Kyawww 🐱",
      time: "Yesterday, 7:30 AM",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Hiking",
      message: "It's not going to happen",
      time: "Wednesday, 9:12 AM",
      image: "https://via.placeholder.com/50",
    },
  ];

  const people = [
    {
      id: 1,
      name: "Anil",
      message: "Aye! Birthday day",
      time: "Today, 9:52 AM",
      image: "https://via.placeholder.com/50",
      seen: true,
    },
    {
      id: 2,
      name: "Chuuthtya",
      message: "Tasuky",
      time: "10:06 AM",
      image: "https://via.placeholder.com/50",
      seen: false,
    },
    {
      id: 3,
      name: "Mary ma’am",
      message: "You have to accept it...",
      time: "Tuesday, 1:12 PM",
      image: "https://via.placeholder.com/50",
      seen: false,
    },
    {
      id: 4,
      name: "Bill Gates",
      message: "Technology 💡",
      time: "Yesterday, 12:13 PM",
      image: "https://via.placeholder.com/50",
      seen: false,
    },
    {
      id: 5,
      name: "Victoria H",
      message: "Okyo, beaber, b e a be...",
      time: "Wednesday, 11:11 AM",
      image: "https://via.placeholder.com/50",
      seen: true,
    },
  ];

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", p: 2 }}>
      {/* Search Bar */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          borderRadius: 2,
          backgroundColor: "#F1F5F9",
          mb: 2,
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
        }}
      />

      {/* Groups Section */}
      <Paper sx={{ p: 2, mb: 2, borderRadius: 3 }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
          Groups
        </Typography>
        {groups.map((group) => (
          <Box
            key={group.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1,
              borderBottom: "1px solid #E0E0E0",
              "&:last-child": { borderBottom: "none" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src={group.image} alt={group.name} sx={{ width: 45, height: 45, mr: 2 }} />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {group.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {group.message}
                </Typography>
              </Box>
            </Box>
            <Typography variant="caption" color="text.secondary">
              {group.time}
            </Typography>
          </Box>
        ))}
      </Paper>

      {/* People Section */}
      <Paper sx={{ p: 2, borderRadius: 3 }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
          People
        </Typography>
        {people.map((person) => (
          <Box
            key={person.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1,
              borderBottom: "1px solid #E0E0E0",
              "&:last-child": { borderBottom: "none" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src={person.image} alt={person.name} sx={{ width: 45, height: 45, mr: 2 }} />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {person.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {person.message}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>
                {person.time}
              </Typography>
              {person.seen ? (
                <DoneAllIcon sx={{ color: "#4CAF50", fontSize: 16 }} />
              ) : (
                <Badge
                  color="error"
                  variant="dot"
                  sx={{
                    "& .MuiBadge-dot": {
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                    },
                  }}
                />
              )}
            </Box>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default Group;
