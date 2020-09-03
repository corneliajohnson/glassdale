import { getWitnesses, useWitnesses } from "./WitnessProvider.js";
const eventHub = document.querySelector(".container");
let witnessArray = [];

// Handle browser-generated click event in component
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "witnessBtn") {
    const witnessListUI = document.getElementById("witnessList");
    buttonHide(clickEvent.target, witnessListUI);
    witnessListUI.innerHTML = witnessArray
      .map((witness) => {
        return `<p>${witness.name}: ${witness.statements}</p>`;
      })
      .join("");
  }
});

export const WitnessList = () => {
  getWitnesses().then(() => {
    witnessArray = useWitnesses();
  });
};

const buttonHide = (btnElement, htmlElement) => {
  if ((btnElement.innerHTML = "Show Witnesses")) {
    btnElement.innerHTML = "Hide Witnesses";
  } else {
    btnElement.innerHTML = "Show Witnesses";
    htmlElement.innerHTML = " ";
  }
};
