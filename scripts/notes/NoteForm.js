import { saveNote } from "./NoteProvider.js";
const contentTarget = document.querySelector(".noteFormContainer");
const eventHub = document.querySelector(".container");

const render = () => {
  return (contentTarget.innerHTML = `
        <form>
        <label for="noteDate">Date:</label>
        <input type="date" id="noteDate" name="date"><br>
        <label for="noteSuspect">Suspect</label>
        <input type="text" id="noteSuspect" name="suspect"><br>
        <textarea type="text" id="note-text" rows="4" cols="50"></textarea><br>
        <button id="saveNote">Save Note</button>
        </form>
    `);
};

export const NoteForm = () => {
  render();
};

// Handle browser-generated click event in component
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote") {
    // Make a new object representation of a note
    const noteDate = document.getElementById("noteDate").value;
    const noteSuspect = document.getElementById("noteSuspect").value;
    const noteText = document.getElementById("note-text").value;
    const newNote = {
      // Key/value pairs here
      date: noteDate,
      suspect: noteSuspect,
      noteText: noteText,
    };
    // Change API state and application state
    saveNote(newNote);
  }
});
