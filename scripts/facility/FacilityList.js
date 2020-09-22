import { Facility } from "./Facility.js";
import { getFacilities, useFacilities } from "./FacilityProvider.js";

const eventHub = document.querySelector(".container");
let facilityArray = [];

eventHub.addEventListener("facilitiesButtonClicked", (event) => {
  if ("facilitiesBtnSelected" in event.detail) {
    render(facilityArray);
  }
});

export const FacilityList = () => {
  getFacilities().then(() => {
    facilityArray = useFacilities();
  });
};

const render = (theFacilityArray) => {
  const contentTarget = document.querySelector(".facilityContainer");
  const facilityButton = document.querySelector(".facility__button");
  const crimialContainer = document.querySelector(".criminalsContainer");
  if (contentTarget.innerHTML === "") {
    contentTarget.innerHTML = theFacilityArray
      .map((facility) => {
        return Facility(facility);
      })
      .join("");
    crimialContainer.style.visibility = "hidden";
    facilityButton.innerHTML =
      '<button id="facilityBtn">Hide Facilities</button>';
  } else {
    contentTarget.innerHTML = "";
    crimialContainer.style.visibility = "visible";
    facilityButton.innerHTML =
      '<button id="facilityBtn">Display Facilities</button>';
  }
};
