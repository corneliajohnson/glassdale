const notesArray = [];
const eventHub = document.querySelector(".container");

export const useNotes = () => {
  return notesArray.slice();
};

const dispatchStateChangeEvent = () => {
  const noteStateChangedEvent = new CustomEvent("noteStateChanged");

  eventHub.dispatchEvent(noteStateChangedEvent);
};

export const getNotes = () => {
  return fetch("http://localhost:8088/notes")
    .then((response) => response.json)
    .then((parsedNotes) => {
      notesArray = parsedNotes;
    });
};

//add a note to the database
export const saveNote = (note) => {
  return fetch("http://localhost:8088/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  })
    .then(getNotes)
    .then(dispatchStateChangeEvent);
};
