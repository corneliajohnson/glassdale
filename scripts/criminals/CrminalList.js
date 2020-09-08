import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { criminalListHTML } from "./Criminal.js";
import { OfficerSelect } from "../officers/OfficerSelect.js";
import { ConvictionSelect } from "../convictions/ConvictionSelect.js";
const eventHub = document.querySelector(".container");
let criminalArray = [];

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", (event) => {
  const crimeName = event.detail.crimeThatWasChosen;
  // You remembered to add the id of the crime to the event detail, right?
  if ("crimeId" in event.detail) {
    const matchingCriminals = criminalArray.filter((matchingCriminal) => {
      return matchingCriminal.conviction === crimeName;
    });
    render(matchingCriminals);
  }
});

// Listen for the custom event you dispatched in OfficerSelect
eventHub.addEventListener("officerSelected", (event) => {
  // How can you access the officer name that was selected by the user?
  const officerName = event.detail.officer;

  if ("officerId" in event.detail) {
    const matchingOfficers = criminalArray.filter((criminal) => {
      return criminal.arrestingOfficer === officerName;
    });
    render(matchingOfficers);
  }
});

const render = (theCriminalArray) => {
  const criminalsContainer = document.querySelector(".criminalsContainer");
  criminalsContainer.innerHTML = `
    ${theCriminalArray.map((criminal) => criminalListHTML(criminal)).join("")}
  `;
};

// Render ALL criminals initally
export const CriminalList = () => {
  getCriminals().then(() => {
    criminalArray = useCriminals();
    render(criminalArray);
  });
  OfficerSelect();
  ConvictionSelect();
};
