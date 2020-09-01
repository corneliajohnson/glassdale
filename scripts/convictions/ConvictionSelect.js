import { useConvictions, getConvictions } from "./ConvictionProvider.js";

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime");

export const ConvictionSelect = () => {
  getConvictions().then(() => {
    const convictions = useConvictions();
    render(convictions);
  });
};

const render = (convictionsCollection) => {
  contentTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
    <option value="0">Please select a crime...</option>
    ${convictionsCollection
      .map(
        (conviction) =>
          `<option value=${conviction.name}>${conviction.name}</option>`
      )
      .sort()}
  </select>   
    `;
};
