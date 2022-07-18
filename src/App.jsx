import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import WelcomeScreen from "./pages/WelcomeScreen";
import Questions from "./pages/Questions";
import Results from "./pages/Results";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme } from "./styles/theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={30}>
            <Routes>
              <Route path="/" element={<WelcomeScreen />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </Box>
        </Container>
        <CssBaseline />
      </ThemeProvider>
    </Router>
  );
}

export default App;
