export const Note = (noteObj) => {
  return `
  <p> ${noteObj.date}: <strong>${noteObj.suspect}</strong>  -  ${noteObj.noteText}</p>
  <hr>
  `;
};
