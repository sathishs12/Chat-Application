// // import { Box } from "@mui/material";
// // import Header from "./components/header/Header";
// // import ChatApp from "./components/group/ChatApp";

// // function App() {
// //   return (
// //     <Box sx={{ backgroundColor: "#efe8ff", height: "100vh", display: "flex" }}>
// //       {/* Sidebar (Header) */}
// //       <Box sx={{ width: "70px", flexShrink: 0 }}>
// //         <Header />
// //       </Box>

// //       {/* Main Chat Area */}
// //       <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
// //         <ChatApp />
// //       </Box>
// //     </Box>
// //   );
// // }

// // export default App;


// import { useState } from "react";
// import { Box } from "@mui/material";
// import Header from "./components/header/Header";
// import ChatApp from "./components/group/ChatApp";
// import Home from "./components/home/Home"; // Import Home component
// // import SideBar from "./components/sidebar/SideBar"; // Import Sidebar

// function App() {
//   const [activeView, setActiveView] = useState<"home" | "chat">("home");

//   return (
//     <Box sx={{ backgroundColor: "#efe8ff", height: "100vh", display: "flex" }}>
//       {/* Sidebar */}
//       <Box sx={{ width: "70px", flexShrink: 0 }}>
//         <Header setActiveView={setActiveView} /> {/* Pass setter function */}
//       </Box>

//       {/* Main Content (Home or ChatApp) */}
//       <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         {activeView === "home" ? <Home /> : <ChatApp />}
//       </Box>
//     </Box>
//   );
// }

// export default App;


import { useState } from "react";
import { Box } from "@mui/material";
import Header from "./components/header/Header";
import ChatApp from "./components/group/ChatApp";
import Home from "./components/home/Home";

function App() {
  const [activeView, setActiveView] = useState<"home" | "chat">("home");

  return (
    <Box sx={{ backgroundColor: "#efe8ff", height: "100vh", display: "flex" }}>
      {/* Show Header only when in chat mode */}
      {activeView === "chat" && (
        <Box sx={{ width: "70px", flexShrink: 0 }}>
          <Header setActiveView={setActiveView} />
        </Box>
      )}

      {/* Main Content (Home or ChatApp) */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {activeView === "home" ? <Home setActiveView={setActiveView} /> : <ChatApp />}
      </Box>
    </Box>
  );
}

export default App;
