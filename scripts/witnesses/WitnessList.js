import { getWitnesses, useWitnesses } from "./WitnessProvider.js";
import { Witness } from "./Witness.js";
const eventHub = document.querySelector(".container");
let witnessArray = [];

// Listen for the custom event you dispatched in OfficerSelect
eventHub.addEventListener("witnessessSelected", (event) => {
  // How can you access the officer name that was selected by the user?

  if ("witnessId" in event.detail) {
    const matchingWitness = witnessArray.map((witness) => {
      return witness;
    });
    render(matchingWitness);
  }
});

const render = (theWitnessArray) => {
  const witnessListHTML = document.getElementById("witnessList");
  witnessListHTML.innerHTML = "";
  return theWitnessArray.map((witness) => {
    witnessListHTML.innerHTML += Witness(witness);
  });
};

// Render ALL criminals initally
export const WitnessList = () => {
  getWitnesses().then(() => {
    witnessArray = useWitnesses();
  });
};
