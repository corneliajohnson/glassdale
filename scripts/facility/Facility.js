export const Facility = (facilityObj, criminalFacilitiesArray) => {
  return `
  <div class ="criminal" id="criminal-${facilityObj.id}">
  <h3>${facilityObj.facilityName}</h3>
  <p>Security Level: ${facilityObj.securityLevel}</p>
  <p>Capacity: ${facilityObj.capacity}</p>
  <h3>Facilities</h3>
  <ul>
  ${criminalFacilitiesArray
    .map((criminal) => {
      return `<li>${criminal.criminal.name}</li>`;
    })
    .join("")}
    </ul>
  </div>
  `;
};
