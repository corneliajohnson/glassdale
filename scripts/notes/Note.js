export const Note = (noteObj) => {
  return `
  <p>${noteObj.date}</p>
  <p>${noteObj.suspect}</p>
  <p>${noteObj.noteText}</p>
  `;
};
