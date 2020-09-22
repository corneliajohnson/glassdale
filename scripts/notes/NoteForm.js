import { saveNote } from "./NoteProvider.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
const contentTarget = document.querySelector(".noteFormContainer");
const eventHub = document.querySelector(".container");

const render = (criminalArray) => {
  return (contentTarget.innerHTML = `
        <div id="note--form">
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
        <div id="noteBtn">
        <button id="saveNote">Save Note</button>
        <div>
        </div>
    `);
};

//called in NoteList.js
export const NoteForm = () => {
  getCriminals().then(() => {
    render(useCriminals());
  });
};

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("editNote--")) {
    const [perfix, noteId] = clickEvent.target.id.split("--");
    const customEvent = new CustomEvent("editSelected", {
      detail: {
        noteEntryId: noteId,
      },
    });
    eventHub.dispatchEvent(customEvent);
  }
});

// Handle browser-generated click event in component
eventHub.addEventListener("click", (clickEvent) => {
  clickEvent.preventDefault();
  if (clickEvent.target.id === "saveNote") {
    const criminal = document.querySelector("#noteCriminal").value;
    const noteText = document.getElementById("note-text").value;

    if (noteCriminal.value !== 0) {
      const newNote = {
        date: new Date(Date.now()).toGMTString(),
        criminalId: parseInt(criminal),
        noteText: noteText,
      };
      // Change API state and application state
      saveNote(newNote);
    }
  }
});
