import { Facility } from "./Facility.js";
import { getFacilities, useFacilities } from "./FacilityProvider.js";
import {
  getCriminalFacilities,
  useCriminalFacilities,
} from "./CriminalFacilityProvider.js";

const eventHub = document.querySelector(".container");
let facilityArray = [];
let criminalFacilitiesArray = [];

eventHub.addEventListener("facilitiesButtonClicked", (event) => {
  if ("facilitiesBtnSelected" in event.detail) {
    render(facilityArray, criminalFacilitiesArray);
  }
});

export const FacilityList = () => {
  getFacilities()
    .then(getCriminalFacilities)
    .then(() => {
      facilityArray = useFacilities();
      criminalFacilitiesArray = useCriminalFacilities();
    });
};

const render = (theFacilityArray) => {
  const contentTarget = document.querySelector(".facilityContainer");
  const facilityButton = document.querySelector(".facility__button");
  const crimialContainer = document.querySelector(".criminalsContainer");
  if (contentTarget.innerHTML === "") {
    contentTarget.innerHTML = theFacilityArray
      .map((facility) => {
        const matchingCriminals = criminalFacilitiesArray.filter(
          (criminal) => criminal.facilityId === facility.id
        );
        return Facility(facility, matchingCriminals);
      })
      .join("");
    crimialContainer.style.visibility = "hidden";
    facilityButton.innerHTML =
      '<button id="facilityBtn">Display Criminals</button>';
  } else {
    contentTarget.innerHTML = "";
    crimialContainer.style.visibility = "visible";
    facilityButton.innerHTML =
      '<button id="facilityBtn">Display Facilities</button>';
  }
};
