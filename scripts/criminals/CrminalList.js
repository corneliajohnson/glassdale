import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { criminalListHTML } from "./Criminal.js";
const eventHub = document.querySelector(".container");
let criminalArray = [];
// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", (event) => {
  // You remembered to add the id of the crime to the event detail, right?
  if ("crimeId" in event.detail) {
    /*
          Filter the criminals application state down to the people that committed the crime
      */
    const matchingCriminals = criminalArray.filter((matchingCriminal) => {
      return matchingCriminal.conviction === event.detail.crimeThatWasChosen;
    });

    /*
          Then invoke render() and pass the filtered collection as
          an argument
      */
    render(matchingCriminals);
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
};
