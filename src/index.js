import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from "./context/userAuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <UserAuthContextProvider>
        <App />
      </UserAuthContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
