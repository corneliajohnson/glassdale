import { useOfficers, getOfficers } from "./OfficerProvider.js";
import { officersHTML } from "./Officers.js";

export const OfficerList = () => {
  getOfficers().then(() => {
    const officerArray = useOfficers();
    addOfficersToDOM(officerArray);
  });
};

const addOfficersToDOM = (theOfficerArray) => {
  const officersContainer = document.querySelector(".officersContainer");
  return theOfficerArray.map((officer) => {
    officersContainer.innerHTML += officersHTML(officer);
  });
};
