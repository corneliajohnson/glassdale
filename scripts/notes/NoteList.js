import { getNotes, useNotes } from "./NoteProvider.js";
import { Note } from "./Note.js";
import { NoteForm } from "./NoteForm.js";
let notesArray = [];

const render = (theNoteArray) => {
  const noteListUI = document.getElementById("noteList");
  noteListUI.innerHTML = `
  <h3>Previous Notes</h3>
<div>${theNoteArray.map((note) => Note(note)).join("")}</div>
  `;
};

// Render ALL criminals initally
export const NoteList = () => {
  getNotes().then(() => {
    notesArray = useNotes();
    render(notesArray);
  });
  NoteForm();
};
