// apiRoutes.js
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '../db/db.json');
const uuid  = require('uuid');


  // Route to get notes from the database
  router.get('/notes', (req, res) => {
    try {
      const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error reading notes.' });
    }
  });

  // Route to save a new note to the database
  router.post('/notes', (req, res) => {
    const note = req.body;
    try {
      const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
      note.id = uuid.v4() // Generate a unique ID for the new note
      data.push(note);
      fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
      res.json(note);
    } catch (error) {
      res.status(500).json({ error: 'Error saving the note.' });
    }
  });

  router.delete('/notes/:noteId', (req, res) => {
    try {
      const noteId = req.params.noteId;
      const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
      const newData = data.filter(n => n.id !== noteId);
      fs.writeFileSync(dbPath, JSON.stringify(newData, null, 2), 'utf8');
      res.json({status: 'success'});
    } catch (error) {
      throw new Error(error);
      res.status(500).json({ error: 'Error saving the note.' });
    }
  });

module.exports = router;