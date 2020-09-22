const eventHub = document.querySelector(".container");
let notesArray = [];

export const useNotes = () => {
  return notesArray.slice();
};

const dispatchStateChangeEvent = () => {
  const noteStateChangedEvent = new CustomEvent("noteStateChanged");
  eventHub.dispatchEvent(noteStateChangedEvent);
};

export const getNotes = () => {
  return fetch("http://localhost:8088/notes")
    .then((response) => response.json())
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

//delete note
export const deleteNote = (noteId) => {
  return fetch(`http://localhost:8088/notes/${noteId}`, {
    method: "DELETE",
  })
    .then(getNotes)
    .then(dispatchStateChangeEvent);
};

export const getSingleNote = (id) => {
  return fetch(`http://localhost:8088/notes/${id}`).then((response) =>
    response.json()
  );
};

export const getUpdatedNote = (noteObj, id) => {
  return fetch(`http://localhost:8088/notes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteObj),
  })
    .then(getNotes)
    .then(dispatchStateChangeEvent);
};
