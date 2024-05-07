import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import URLProvider from "./contexts/URL";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <URLProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </URLProvider>
  </BrowserRouter>
);
