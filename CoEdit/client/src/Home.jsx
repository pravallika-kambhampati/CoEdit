import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/rooms")
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  return (
    <div className="home-container">
      <h1>Your docs</h1>
      <ul>
        {rooms.map((room, index) => (
          <li key={index}>
            <Link to={`/editor/${room}`}>Doc: {room}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
