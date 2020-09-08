import { getWitnesses, useWitnesses } from "./WitnessProvider.js";
import { Witness } from "./Witness.js";
import { WitnessButton } from "./WitnessButton.js";
const eventHub = document.querySelector(".container");
let crimialContainer = document.querySelector(".criminalsContainer");
let witnessArray = [];

// Listen for the custom event you dispatched in witnessessSelected
eventHub.addEventListener("witnessessSelected", (event) => {
  if ("witnessId" in event.detail) {
    const matchingWitness = witnessArray.map((witness) => {
      return witness;
    });
    render(matchingWitness);
  }
});

const render = (theWitnessArray) => {
  const witnessListHTML = document.getElementById("witnessList");
  const witnessBtn = document.getElementById("witnessBtn");
  if (witnessListHTML.innerHTML === "") {
    return theWitnessArray.map((witness) => {
      witnessListHTML.innerHTML += Witness(witness);
      crimialContainer.style.visibility = "hidden";
      witnessBtn.innerHTML = "Hide Witnesses";
    });
  } else {
    witnessListHTML.innerHTML = "";
    crimialContainer.style.visibility = "visible";
    witnessBtn.innerHTML = "See Criminals";
  }
};

// Render ALL criminals initally
export const WitnessList = () => {
  getWitnesses().then(() => {
    witnessArray = useWitnesses();
  });
  WitnessButton();
};
