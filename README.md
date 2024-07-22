# CoEdit

A collaborative text editor application built with React, ReactQuill, Socket.IO, and Express. This application allows multiple users to edit documents in real-time.

## Features

- Real-time collaborative text editing
- Unique URLs for each document
- List of active documents
- Seamless synchronization of text changes

## Tech Stack

- React
- ReactQuill
- Socket.IO
- Express
- Node.js
- uuid (for generating unique IDs)
- CORS (for handling cross-origin requests)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/collaborative-text-editor.git
   cd collaborative-text-editor
   ```
2. Install server dependencies
   ```bash
   cd server
   npm install
   ```
3. Install client dependencies
   ```
   cd ../client
   npm install
   ```

## Running the app

1. Navigate to the server dir and start the server

   ```
   cd server
   node server.js
   ```

   The server will run on http://localhost:3000

2. Navigate to the client dir and start the client

   ```
   cd ../client
   npm run dev
   ```

   The client will run on http://localhost:5173

## Usage

- You will see a list of active documents at http://localhost:5173/. Click on any document to join the editor.
- Open your browser and navigate to http://localhost:5173/editor to create a new document.
- Start typing in the editor. Changes will be synchronized in real-time for all users in the same document.

## Next steps

- Implement database persistence with MongoDB
- Add user authentication
- Improve the UI/UX
