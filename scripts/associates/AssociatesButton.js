import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js";
const eventHub = document.querySelector(".container");
let associatesArray = [];
let criminalArray = [];

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.includes("associates")) {
    // Get the name of the selected officer
    const [prefix, associateID] = clickEvent.target.id.split("--");
    // Define a custom event
    const customEvent = new CustomEvent("selectedAssociate", {
      detail: {
        associate: associateID,
      },
    });
    // Dispatch event to event hub
    eventHub.dispatchEvent(customEvent);
  }
});

export const AssociatesButton = () => {
  getCriminals().then(() => {
    criminalArray = useCriminals();
    associatesArray = useCriminals().map((criminal) => {
      criminal.known_associates;
    });
  });
};
