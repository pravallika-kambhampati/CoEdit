import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import "./Editor.css"; // import custom styles

const EditorComponent = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleChange = (value) => {
    setEditorContent(value);
  };

  const headingStyle = {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    textAlign: "left",
  };

  return (
    <div>
      <h1 style={headingStyle}>CoEdit</h1>
      <ReactQuill
        value={editorContent}
        onChange={handleChange}
        theme="snow"
        className="custom-editor"
      />
    </div>
  );
};

export default EditorComponent;
