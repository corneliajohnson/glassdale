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
  const convictionsNamesArray = convictionsCollection.map((conviction) => {
    const convictionInfo = conviction.name;
    return convictionInfo;
  });

  contentTarget.innerHTML = `
  <select class="dropdown" id="crimeSelect">
  <option value="0">Please select a crime...</option>
  ${convictionsNamesArray.map(
    (conviction) => `<option value=${conviction}>${conviction}</option>`
  )}
</select>   
  `;
};
