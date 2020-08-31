import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { criminalListHTML } from "./Criminal.js";

export const CriminalList = () => {
  getCriminals().then(() => {
    const criminalArray = useCriminals();
    addOfficerToDOM(criminalArray);
  });
};

const addOfficerToDOM = (theOfficerArray) => {
  const criminalsContainer = document.querySelector(".criminalsContainer");
  return theOfficerArray.map((criminal) => {
    criminalsContainer.innerHTML += criminalListHTML(criminal);
  });
};
