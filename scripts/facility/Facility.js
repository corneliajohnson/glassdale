export const Facility = (facilityObj) => {
  return `
  <div class ="criminal" id="criminal-${facilityObj.id}">
  <h3>${facilityObj.facilityName}</h3>
  <p>Security Level: ${facilityObj.securityLevel}</p>
  <p>Capacity: ${facilityObj.capacity}</p>
  </div>
  `;
};
