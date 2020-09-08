const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.includes("associates")) {
    // Get the name of the selected criminal id
    const [prefix, criminalID] = clickEvent.target.id.split("--");
    // Define a custom event
    const customEvent = new CustomEvent("selectedAssociate", {
      detail: {
        associate: criminalID,
      },
    });
    // Dispatch event to event hub
    eventHub.dispatchEvent(customEvent);
  }
});

//required for eventlistener above to be found
//called in AssociateList.js
export const AssociatesButton = () => {};
