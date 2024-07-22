import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Editor } from "./Editor";
import { Home } from "./Home";
import { Layout } from "./Layout";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="editor" element={<RedirectToNewEditor />} />
          <Route path="editor/:id" element={<Editor />} />
        </Route>
      </Routes>
    </Router>
  );
}

const RedirectToNewEditor = () => {
  const uniqueId = uuidv4();
  return <Navigate to={`/editor/${uniqueId}`} />;
};

export default App;
