import React, { useState, useEffect } from "react";
import {
  Box,
  Avatar,
  Typography,
  Paper,
  Tabs,
  Tab,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
  IconButton,
  Badge,
  Switch,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import DeleteIcon from "@mui/icons-material/Delete";
import NotificationsIcon from "@mui/icons-material/Notifications";

const initialNotifications = [
  { id: 1, user: "Alice", message: "New task assigned!", time: "Today", type: "chat", avatar: "https://randomuser.me/api/portraits/women/1.jpg", read: false },
  { id: 2, user: "Bob", message: "Task deadline is tomorrow!", time: "Yesterday", type: "chat", avatar: "https://randomuser.me/api/portraits/men/1.jpg", read: false },
  { id: 3, user: "Emma", message: "Your request was approved 🎉", time: "Earlier", type: "chat", avatar: "https://randomuser.me/api/portraits/women/2.jpg", read: true },
];

const ChatNotifications = () => {
  const [tabValue, setTabValue] = useState(0);
  const [selectedUser, setSelectedUser] = useState("All");
  const [notifications, setNotifications] = useState(initialNotifications);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleTabChange = (_event: any, newValue: React.SetStateAction<number>) => setTabValue(newValue);
  const handleSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => setSearchTerm(e.target.value);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const filteredNotifications = notifications.filter((n) => {
    if (tabValue === 1 && n.type !== "chat") return false;
    if (tabValue === 2 && n.type !== "general") return false;
    if (selectedUser !== "All" && n.user !== selectedUser) return false;
    if (searchTerm && !n.message.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification = {
        id: Date.now(),
        user: "System",
        message: "New update available!",
        time: "Just now",
        type: "general",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        read: false,
      };
      setNotifications((prev) => [newNotification, ...prev]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "auto",
        padding: isSmallScreen ? 2 : 3,
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        borderRadius: "12px",
        boxShadow: 3,
        overflow: "hidden",
      }}
      component={motion.div}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Typography variant="h6">Notifications</Typography>
        <Box display="flex" alignItems="center">
          <Badge badgeContent={notifications.filter((n) => !n.read).length} color="error">
            <NotificationsIcon />
          </Badge>
          <Switch checked={darkMode} onChange={toggleDarkMode} sx={{ ml: 1 }} />
        </Box>
      </Grid>

      {/* Tabs */}
      <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth" sx={{ mb: 2, backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
        <Tab label="All" />
        <Tab label="Chat" />
        <Tab label="General" />
      </Tabs>

      {/* Search & Filter */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12}>
          <TextField fullWidth label="Search" variant="outlined" size="small" onChange={handleSearch} />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>User</InputLabel>
            <Select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)} label="User">
              {["All", ...new Set(notifications.map((n) => n.user))].map((user) => (
                <MenuItem key={user} value={user}>
                  {user}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Notifications List */}
      <Box
        sx={{
          maxHeight: isSmallScreen ? "300px" : "400px",
          overflowY: "auto",
          padding: 2,
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
        }}
      >
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification, index) => (
            <motion.div key={notification.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                  borderRadius: "10px",
                  mb: 2,
                  backgroundColor: notification.read ? "#e0e0e0" : "#ffffff",
                }}
              >
                <Avatar src={notification.avatar} sx={{ width: 45, height: 45, mr: 2 }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>{notification.user}</Typography>
                  <Typography variant="body2">{notification.message}</Typography>
                  <Typography variant="caption" color="textSecondary" sx={{ display: "block", mt: 0.5 }}>{notification.time}</Typography>
                </Box>
                <IconButton onClick={() => markAsRead(notification.id)}>✔</IconButton>
                <IconButton onClick={() => deleteNotification(notification.id)}><DeleteIcon /></IconButton>
              </Paper>
            </motion.div>
          ))
        ) : (
          <Typography align="center" color="textSecondary">No notifications found.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default ChatNotifications;
