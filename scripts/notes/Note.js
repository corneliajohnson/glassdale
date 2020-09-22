export const Note = (noteObj, criminalObj) => {
  return `
  <div class="note note="note--${noteObj.id}" >
  <p> ${noteObj.date}: <strong>${criminalObj.name}</strong>  -  ${noteObj.noteText} 
  <button id="editNote--${noteObj.id}" type="button" >Edit</button>
  <button id="deleteNote--${noteObj.id}" type="button" >Delete</button></p>
  <div>
  <hr>
  `;
};
