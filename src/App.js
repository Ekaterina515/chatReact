import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { ChatPage, HomePage, ProfilePage } from "./pages";
import "./common.module.css";

const theme = createTheme({
  palette: {
    glassmorphism: {
      shadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      color: "rgba( 255, 255, 255, 0.75 )",
      gradient:
        "linear-gradient(169deg, rgba(255, 216, 245, 0.7) 0%, rgba(225, 250, 255, 0.7) 100%)",
      blur: "blur( 16px )",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      radius: "10px",
    },
    text: {
      main: "#fff",
      secondary: "#001858",
      heading: "rgba(31, 38, 135, 0.37)",
    },
  },
});

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="//*" element={<HomePage />} />;
            <Route path="/chat/*" element={<ChatPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
