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
      <h2>Demo Content</h2>
      <p>
        Preset build with <code>snow</code> theme, and some common formats.
      </p>
      <ReactQuill value={editorContent} onChange={handleChange} theme="snow" />
    </div>
  );
};

export default EditorComponent;
