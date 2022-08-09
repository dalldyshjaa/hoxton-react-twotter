import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
    {window.location.pathname === "/" ? <Navigate to="/home" /> : null}
  </BrowserRouter>
);
