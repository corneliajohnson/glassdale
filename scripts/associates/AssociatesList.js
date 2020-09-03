import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js";
const eventHub = document.querySelector(".container");
let associatesArray = [];
let criminalArray = [];

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.includes("associates")) {
    const [prefix, associateID] = clickEvent.target.id.split("--");
    const associates = criminalArray[associateID - 1].known_associates;
    const criminalName = criminalArray[associateID - 1].name;
    render(associates, criminalName);
  }
});

const render = (theAssoicatesArray, theCrimalName) => {
  const associateContainer = document.querySelector(".associateContainer");
  associateContainer.innerHTML = `<h2>Assocciate(s) of ${theCrimalName}</h2>`;
  associateContainer.innerHTML += `${theAssoicatesArray
    .map(
      (associate) =>
        `<div class="associate">
        <p><strong>Name: ${associate.name}</strong> - Aibli: ${associate.alibi}</p>
        </div>
        `
    )
    .join("")}`;
  return theAssoicatesArray;
};

export const AssociatesList = () => {
  getCriminals().then(() => {
    criminalArray = useCriminals();
    associatesArray = useCriminals().map((criminal) => {
      return criminal.known_associates;
    });
  });
};
