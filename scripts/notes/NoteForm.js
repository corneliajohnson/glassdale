import { saveNote } from "./NoteProvider.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
const contentTarget = document.querySelector(".noteFormContainer");
const eventHub = document.querySelector(".container");

const render = (criminalArray) => {
  return (contentTarget.innerHTML = `
        <form id="note--form">
        <h2>Notes</h2>
        <label for="noteSuspect">Suspect</label>
        <select id="noteCriminal" class="dropdown">
        <option  value="0">Please select a crime...</option>
        ${criminalArray
          .map(
            (criminal) =>
              `<option  value="${criminal.id}">${criminal.name}</option>`
          )
          .sort()}
      </select> <br><br>
        <textarea type="text" id="note-text" rows="4" cols="50"></textarea><br><br>
        <button id="saveNote">Save Note</button>
        </form>
    `);
};

//called in NoteList.js
export const NoteForm = () => {
  getCriminals().then(() => {
    render(useCriminals());
  });
};

// Handle browser-generated click event in component
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote") {
    clickEvent.preventDefault();

    const criminalId = document.querySelector("#noteCriminal").value;
    const noteText = document.getElementById("note-text").value;

    if (noteCriminal.value !== 0) {
      const newNote = {
        date: new Date(Date.now()).toGMTString(),
        suspectId: parseInt(criminalId),
        noteText: noteText,
      };
      // Change API state and application state
      saveNote(newNote);
    }
  }
});
