import { useOfficers, getOfficers } from "./OfficerProvider.js";
const contentTarget = document.querySelector(".filters__officer");
let officersArray = [];

export const OfficerSelect = () => {
  getOfficers().then(() => {
    officersArray = useOfficers();
    render(officersArray);
  });
};

const render = (officerCollection) => {
  contentTarget.innerHTML += `
  <select class="dropdown" id="officerSelect">
  <option value="0">Please select a officer...</option>
  ${officerCollection
    .map(
      (officer) =>
        `<option id="crimeId" value="${officer.name}">${officer.name}</option>`
    )
    .sort()}
</select> 
  `;
};
