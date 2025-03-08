// import { Box, Typography, Button } from "@mui/material";
// import personOne from "../../assets/HomeBG.jpg";
// import personTwo from "../../assets/istockphoto-1460124878-612x612.jpg";

// interface HomeProps {
//   setActiveView: (view: "home" | "chat") => void;
// }

// const Home: React.FC<HomeProps> = ({ setActiveView }) => {
//   return (
//     <>
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         sx={{ marginLeft: "40px", marginTop: "24px", color: "#4f4a4a" }}
//       >
//         Welcome to Chat Application
//       </Typography>

//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           height: "100vh",
//           padding: "0 10%",
//           color: "#4f4a4a",
//         }}
//       >
//         {/* Left Section - Header, Text & Buttons */}
//         <Box sx={{ maxWidth: "40%" }}>
//           <Typography variant="h2" fontWeight="bold">
//             Connect, Chat & Collaborate
//           </Typography>
//           <Typography variant="h6" sx={{ margin: "20px 0" }}>
//             Seamless conversations at your fingertips. Stay connected anytime, anywhere.
//           </Typography>

//           {/* "Try It Demo" Button */}
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: "20px" }}
//             onClick={() => setActiveView("chat")}
//           >
//             Try It Demo
//           </Button>
//         </Box>

//         {/* Right Section - Images with Overlay */}
//         <Box sx={{ position: "relative", display: "flex", gap: 2 }}>
//           {[personOne, personTwo].map((person, index) => (
//             <Box
//               key={index}
//               sx={{
//                 position: "relative",
//                 width: 250,
//                 height: "auto",
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 overflow: "hidden",
//               }}
//             >
//               <Box
//                 component="img"
//                 src={person}
//                 alt={`Person ${index + 1}`}
//                 sx={{ width: "100%", height: "100%", objectFit: "cover" }}
//               />
//               {/* Overlay */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
//                   color: "white",
//                   padding: "10px",
//                   textAlign: "center",
//                 }}
//               >
//                 <Typography variant="body1" fontWeight="bold">
//                   {index === 0 ? "Real-time Messaging" : "Secure & Private"}
//                 </Typography>
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Home;


import { useState } from "react";
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, TextField } from "@mui/material";
import personOne from "../../assets/HomeBG.jpg";
import personTwo from "../../assets/istockphoto-1460124878-612x612.jpg";

interface HomeProps {
  setActiveView: (view: "home" | "chat") => void;
}

const Home: React.FC<HomeProps> = ({ setActiveView }) => {
  const [openDemoChat, setOpenDemoChat] = useState(false);

  return (
    <>
      {/* <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ marginLeft: "40px", marginTop: "24px", color: "#4f4a4a" }}
      >
        Welcome to Chat Application
      </Typography> */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100vh",
          padding: "0 10%",
          color: "#4f4a4a",
        }}
      >
        {/* Left Section - Header, Text & Buttons */}
        <Box sx={{ maxWidth: "40%" }}>
          <Typography variant="h2" fontWeight="bold">
            Connect, Chat & Collaborate
          </Typography>
          <Typography variant="h6" sx={{ margin: "20px 0" }}>
            Seamless conversations at your fingertips. Stay connected anytime, anywhere.
          </Typography>

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{backgroundColor:"rebeccapurple"}}
              onClick={() => setActiveView("chat")}
            >
              Start Chat
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setOpenDemoChat(true)}
            >
              Try It Demo
            </Button>
          </Box>
        </Box>

        {/* Right Section - Images with Overlay */}
        <Box sx={{ position: "relative", display: "flex", gap: 2 }}>
          {[personOne, personTwo].map((person, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: 250,
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={person}
                alt={`Person ${index + 1}`}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {/* Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
                  color: "white",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <Typography variant="body1" fontWeight="bold">
                  {index === 0 ? "Real-time Messaging" : "Secure & Private"}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Demo Chat Popup */}
      <Dialog open={openDemoChat} onClose={() => setOpenDemoChat(false)}>
        <DialogTitle>Demo Chat</DialogTitle>
        <DialogContent>
          <Typography variant="body2">This is a demo chat. Type a message below:</Typography>
          <TextField fullWidth variant="outlined" placeholder="Type a message..." sx={{ mt: 2 }} />
          <Button onClick={() => setOpenDemoChat(false)} sx={{ mt: 2 }} color="primary">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Home;
