import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { AuthWrapper } from "modules/auth/AuthContext";
import { Home } from "pages/Home";
import { theme } from "theme";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthWrapper>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </AuthWrapper>
  </React.StrictMode>
);
