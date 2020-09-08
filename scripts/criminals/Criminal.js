import { AlibiDialog } from "../associates/AssociatesList.js";
export const criminalListHTML = (criminalObj) => {
  return `
  <div class = "criminal" id="criminal-${criminalObj.id}">
  <h3>${criminalObj.name}</h3>
  <p>Age: ${criminalObj.age}</p>
  <p>Crime: ${criminalObj.conviction}</p>
  <p>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString(
    "en-US"
  )}</p>
  <p>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString(
    "en-US"
  )}</p>
  <button id="associates--${criminalObj.id}">Associate Alibis</button>
  ${AlibiDialog(criminalObj.id)}
  </div>
  `;
};
