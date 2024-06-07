import express from "express";
import { addNote } from "../persistence.js";
import { v4 as uuidv4 } from "uuid";

const notesRouter = express.Router();

// Post notes page
notesRouter.post("/", (req, res, next) => {
    const noteText = req.body.noteText;
    console.log(noteText);
    const note = {
        id: uuidv4(),
        text: noteText,
    }
    addNote(note)
    res.redirect("/")
})

export default notesRouter;