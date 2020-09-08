export const Witness = (witnessObj) => {
  return `
  <div class="witness">
  <h3> <strong>${witnessObj.name}</h3>  
  <p>${witnessObj.statements}</p>
  </div>
  `;
};
