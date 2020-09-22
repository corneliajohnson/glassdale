const eventHub = document.querySelector(".container");

export const DisplayFacilitiesButton = () => {
  const contentTarget = document.querySelector(".facility__button");
  contentTarget.innerHTML =
    '<button id="facilityBtn">Display Facilities</button>';
};

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "facilityBtn") {
    const customEvent = new CustomEvent("facilitiesButtonClicked", {
      detail: {
        facilitiesBtnSelected: event.target.id,
      },
    });
    eventHub.dispatchEvent(customEvent);
  }
});
