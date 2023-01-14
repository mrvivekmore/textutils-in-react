import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("dark");

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#333";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "#fff";
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />

      <Routes>
        <Route path="/" element={<TextForm mode={mode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
