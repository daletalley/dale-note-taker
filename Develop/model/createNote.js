//imports
const fs = require("fs");
const path = require("path");
const UUID = require('../helpers/uuid');

//function to create new note to database
function createNewNote(body, notesArray) {
    const note = body;
    // Generate a unique ID for  note
    note.id = UUID();
    notesArray.push(note);
    //write to json file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )

    return note;
}
