import { deleteNote, getNotes, useNotes } from "./NoteProvider.js";
import { Note } from "./Note.js";
import { NoteForm } from "./NoteForm.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
const eventHub = document.querySelector(".container");
NoteForm();

const render = (theNoteArray, theCriminalArray) => {
  const noteListUI = document.getElementById("noteList");
  noteListUI.innerHTML += theNoteArray
    .map((note) => {
      // Find the related criminal
      const matchingCriminal = theCriminalArray.find(
        (criminal) => criminal.id === note.criminalId
      );
      return `${Note(note, matchingCriminal)}`;
    })
    .join("");
};

// Render ALL notes initally
export const NoteList = () => {
  getNotes()
    .then(getCriminals)
    .then(() => {
      const notesArray = useNotes();
      const criminalArray = useCriminals();
      render(notesArray, criminalArray);
    });
};

eventHub.addEventListener("noteStateChanged", () => {
  const newNotes = useNotes();
  render(newNotes, useCriminals());
});

eventHub.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id.startsWith("deleteNote--")) {
    const [prefix, id] = event.target.id.split("--");
    deleteNote(id);
  }
});
