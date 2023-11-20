//imports
const fs = require("fs");
const path = require("path");
const UUID = require('../helpers/uuid');

// Function to create a new note in the database
function createNewNote(body, notesArray) {
    const note = body;
    // Generate a unique ID for the note
    note.id = UUID();
    notesArray.push(note);
    // Write to json file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'), 
        JSON.stringify(notesArray, null, 2) // Directly write the array of notes
    );

    return note;
}

// Function to delete a note
function deleteNote(notesArray, id) {
    // Find the note to delete based on its ID
    const newNotesArray = notesArray.filter(note => note.id !== id);
    // Write to json file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(newNotesArray, null, 2) // Directly write the updated array of notes
    );
}

module.exports = {
    createNewNote,
    deleteNote
};
