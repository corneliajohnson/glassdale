import { getWitnesses, useWitnesses } from "./WitnessProvider.js";
const eventHub = document.querySelector(".container");
let witnessArray = [];

// Handle browser-generated click event in component
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "witnessBtn") {
    const selectedWitness = clickEvent.target.id;

    const customEvent = new CustomEvent("witnessessSelected", {
      detail: {
        witness: selectedWitness,
        witnessId: "witnessId",
      },
    });
    eventHub.dispatchEvent(customEvent);
  }
});

export const WitnessButton = () => {
  getWitnesses().then(() => {
    witnessArray = useWitnesses();
  });
};
