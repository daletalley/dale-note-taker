const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
  });
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });
  const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

app.get('/api/notes', (req, res) => {
  // Read db.json and return all notes
});

app.post('/api/notes', (req, res) => {
  // Add a new note to db.json
});
