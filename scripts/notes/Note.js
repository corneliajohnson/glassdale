export const Note = (noteObj, criminalObj) => {
  return `
  <div class="note">
  <p> ${noteObj.date}: <strong>${criminalObj.name}</strong>  -  ${noteObj.noteText} <button id="deleteNote--${noteObj.id}" type="button" >Delete</button></p>
  <div>
  <hr>
  `;
};
