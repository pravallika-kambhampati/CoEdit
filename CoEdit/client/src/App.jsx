import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Editor } from "./Editor";
import { io } from "socket.io-client";
import { Home } from "./Home";

function App() {
  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("connect", () => {
      console.log("Connected with id: " + socket.id);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;
