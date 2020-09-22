import { getSingleNote, getUpdatedNote } from "./NoteProvider.js";

const eventHub = document.querySelector(".container");
let selectedObj = {};

//add content to note form
eventHub.addEventListener("editSelected", (event) => {
  document.getElementById("noteBtn").innerHTML =
    '<button id="updateNote">Update</button> <button id="cancelUpdate">Cancel</button>';
  const noteId = event.detail.noteEntryId;
  getSingleNote(noteId).then((responseObj) => {
    selectedObj = { ...responseObj };
    document.getElementById("noteCriminal").value = responseObj.criminalId;
    document.getElementById("note-text").innerHTML = responseObj.noteText;
  });
});

//update note lest with new content
eventHub.addEventListener("editSelected", (event) => {
  const noteId = parseInt(event.detail.noteEntryId);
  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "updateNote") {
      const newEntry = {
        date: selectedObj.date,
        criminalId: parseInt(document.getElementById("noteCriminal").value),
        noteText: document.getElementById("note-text").value,
      };
      getUpdatedNote(newEntry, noteId);
    } else if (clickEvent.target.id === "cancelUpdate") {
      getUpdatedNote(selectedObj, noteId);
    }
  });
});
