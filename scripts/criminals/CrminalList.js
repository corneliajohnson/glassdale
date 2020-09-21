import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { criminalListHTML } from "./Criminal.js";
import { OfficerSelect } from "../officers/OfficerSelect.js";
import { ConvictionSelect } from "../convictions/ConvictionSelect.js";
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js";
import {
  getCriminalFacilities,
  useCriminalFacilities,
} from "../facility/CriminalFacilityProvider.js";
const eventHub = document.querySelector(".container");
let facilitiesArray = [];
let crimFacArray = [];
let criminalArray = [];

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", (event) => {
  const crimeName = event.detail.crimeThatWasChosen;
  // You remembered to add the id of the crime to the event detail, right?
  if ("crimeId" in event.detail) {
    const matchingCriminals = criminalArray.filter((matchingCriminal) => {
      document.querySelector(".filters__crime").classList.remove("disabled");
      document.querySelector(".filters__officer").classList.add("disabled");
      return matchingCriminal.conviction === crimeName;
    });
    render(matchingCriminals, facilitiesArray, crimFacArray);
  }
});

// Listen for the custom event you dispatched in OfficerSelect
eventHub.addEventListener("officerSelected", (event) => {
  // How can you access the officer name that was selected by the user?
  const officerName = event.detail.officer;

  if ("officerId" in event.detail) {
    const matchingOfficers = criminalArray.filter((criminal) => {
      document.querySelector(".filters__crime").classList.add("disabled");
      document.querySelector(".filters__officer").classList.remove("disabled");
      return criminal.arrestingOfficer === officerName;
    });
    render(matchingOfficers, facilitiesArray, crimFacArray);
  }
});

const render = (theCriminalArray, theFacilitiesArray, theCrimFacArray) => {
  const criminalsContainer = document.querySelector(".criminalsContainer");
  criminalsContainer.innerHTML = theCriminalArray
    .map((criminalObject) => {
      // Step 2 - Filter all relationships to get only ones for this criminal
      const facilityRelationshipsForThisCriminal = theCrimFacArray.filter(
        (cf) => cf.criminalId === criminalObject.id
      );

      // Step 3 - Convert the relationships to facilities with map()
      const facilities = facilityRelationshipsForThisCriminal.map((cf) => {
        const matchingFacilityObject = theFacilitiesArray.find(
          (facility) => facility.id === cf.facilityId
        );
        return matchingFacilityObject;
      });

      // Must pass the matching facilities to the Criminal component
      return criminalListHTML(criminalObject, facilities);
    })
    .join("");
};

// Render ALL criminals initally
export const CriminalList = () => {
  getFacilities()
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then(() => {
      facilitiesArray = useFacilities();
      crimFacArray = useCriminalFacilities();
      criminalArray = useCriminals();
      render(criminalArray, facilitiesArray, crimFacArray);
    });
  OfficerSelect();
  ConvictionSelect();
};
