export const Note = (noteObj) => {
  return `
  <p> ${noteObj.date}: <strong>${noteObj.suspectId}</strong>  -  ${noteObj.noteText}</p>
  <hr>
  `;
};
