import { useConvictions, getConvictions } from "./ConvictionProvider.js";

// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".filters__crime");

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", (event) => {
  // Only do this if the `crimeSelect` element was changed
  if (event.target.id === "crimeSelect") {
    // Create custom event. Provide an appropriate name.
    const customEvent = new CustomEvent("crimeChosen", {
      detail: {
        crimeThatWasChosen: event.target.value,
        crimeId: event.target.id,
      },
    });

    // Dispatch to event hub
    eventHub.dispatchEvent(customEvent);
  }
});

const render = (convictionsCollection) => {
  contentTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
    <option value="0">Please select a crime...</option>
    ${convictionsCollection
      .map(
        (conviction) =>
          `<option id="crimeId" value="${conviction.name}">${conviction.name}</option>`
      )
      .sort()}
  </select>   
    `;
};

//called in CriminalList.js
export const ConvictionSelect = () => {
  getConvictions().then(() => {
    const convictions = useConvictions();
    render(convictions);
  });
};
