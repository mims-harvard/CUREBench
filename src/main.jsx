import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Organizers from "./pages/Organizers";

document.title = "CURE-Bench @ NeurIPS 2025 – AI Reasoning for Therapeutic Decision-Making";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/CURE-Bench">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/organizers" element={<Organizers />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
