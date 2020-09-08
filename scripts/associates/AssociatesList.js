import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js";
import { Associates } from "./Associates.js";
const eventHub = document.querySelector(".container");
let associatesArray = [];
let criminalArray = [];

eventHub.addEventListener("selectedAssociate", (clickEvent) => {
  const associateID = clickEvent.detail.associate;
  const associates = criminalArray[associateID - 1].known_associates;
  render(associates, associateID);
});

const render = (theAssoicatesArray, associateID) => {
  const targetContent = document.querySelector(`.alibiDialog--${associateID}`);
  targetContent.innerHTML = theAssoicatesArray
    .map((associate) => {
      return Associates(associate);
    })
    .join("");
  return theAssoicatesArray;
};

export const AlibiDialog = (criminalID) => {
  return `
  <div class="alibiDialog--${criminalID}"></div>`;
};

export const AssociatesList = () => {
  getCriminals().then(() => {
    criminalArray = useCriminals();
    associatesArray = useCriminals().map((criminal) => {
      return criminal.known_associates;
    });
  });
};
