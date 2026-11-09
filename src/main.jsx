import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <h2>Welcome to the E-commerce Website</h2>
    </BrowserRouter>
  </StrictMode>,
);
