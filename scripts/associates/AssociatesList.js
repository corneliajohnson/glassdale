import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js";
import { Associates } from "./Associates.js";
import { AssociatesButton } from "./AssociatesButton.js";
const eventHub = document.querySelector(".container");
let criminalArray = [];

eventHub.addEventListener("selectedAssociate", (clickEvent) => {
  const criminalID = clickEvent.detail.associate;
  const associatesArray = criminalArray[criminalID - 1].known_associates;
  render(associatesArray, criminalID);
});

const render = (theAssoicatesArray, theCriminalID) => {
  let targetContent = document.querySelector(`.alibiDialog--${theCriminalID}`);
  let hTarget = document.querySelector("h4");

  if (targetContent.contains(hTarget)) {
    targetContent.innerHTML = "";
  } else {
    targetContent.innerHTML = theAssoicatesArray
      .map((associate) => {
        return Associates(associate);
      })
      .join("");
    return theAssoicatesArray;
  }
};

export const AlibiDialog = (theCriminalID) => {
  return `
  <div class="alibiDialog--${theCriminalID}"></div>`;
};

export const AssociatesList = () => {
  getCriminals().then(() => {
    criminalArray = useCriminals();
  });
  AssociatesButton();
};
