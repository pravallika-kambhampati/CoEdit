import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

const EditorComponent = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleChange = (value) => {
    setEditorContent(value);
  };

  return (
    <div>
      <ReactQuill value={editorContent} onChange={handleChange} theme="snow" />
    </div>
  );
};

export default EditorComponent;
