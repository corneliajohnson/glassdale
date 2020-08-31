export const officersHTML = (officerObj) => {
  return `
  <section id="officer=${officerObj.id}" class="officer">
    <h2>${officerObj.name}</h2>
    </section>
  `;
};
