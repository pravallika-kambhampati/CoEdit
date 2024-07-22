import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Editor.css";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

export const Editor = () => {
  const { id } = useParams();
  const [editorContent, setEditorContent] = useState("");
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://localhost:3000");

    socket.current.emit("join", id);
    console.log(`Joining room ${id}`);

    socket.current.on("text-update", (newText) => {
      console.log(`Received text update: ${newText}`);
      setEditorContent(newText);
    });

    return () => {
      console.log("Disconnecting socket");
      socket.current.disconnect();
    };
  }, [id]);

  const handleChange = (value) => {
    setEditorContent(value);
    console.log(`Sending text change: ${value}`);
    socket.current.emit("text-change", { room: id, text: value });
  };

  return (
    <div>
      <ReactQuill
        value={editorContent}
        onChange={handleChange}
        theme="snow"
        className="custom-editor"
        aria-label="Collaborative Text Editor"
      />
    </div>
  );
};
