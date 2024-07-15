import React, { useEffect, useState } from "react";
import "./App.css";
import Editor from "./Editor";
import { io } from "socket.io-client";

function App() {
  const [socketId, setSocketId] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("connect", () => {
      console.log("Connected with id: " + socket.id);
      setSocketId(socket.id);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <div className="App">{socketId && <Editor id={socketId} />}</div>;
}

export default App;
