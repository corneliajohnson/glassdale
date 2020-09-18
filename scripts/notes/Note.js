export const Note = (noteObj, criminalObj) => {
  return `
  <p> ${noteObj.date}: <strong>${criminalObj.name}</strong>  -  ${noteObj.noteText} <button type="button" id="deleteNote--${noteObj.id}">Delete</button></p>
  <hr>
  `;
};
