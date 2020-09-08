import { useOfficers, getOfficers } from "./OfficerProvider.js";
const contentTarget = document.querySelector(".filters__officer");
const eventHub = document.querySelector(".container");
let officersArray = [];

//called in CriminalList.js
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
      (officer) => `<option value="${officer.name}">${officer.name}</option>`
    )
    .sort()}
</select> 
  `;
};

eventHub.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "officerSelect") {
    // Get the name of the selected officer
    const selectedOfficer = changeEvent.target.value;

    // Define a custom event
    const customEvent = new CustomEvent("officerSelected", {
      detail: {
        officer: selectedOfficer,
        officerId: "officerId",
      },
    });

    // Dispatch event to event hub
    eventHub.dispatchEvent(customEvent);
  }
});
