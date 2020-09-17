export const Note = (noteObj, criminalObj) => {
  return `
  <p> ${noteObj.date}: <strong>${criminalObj.name}</strong>  -  ${noteObj.noteText}</p>
  <hr>
  `;
};
