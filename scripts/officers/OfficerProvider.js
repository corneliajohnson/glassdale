let officersArray = [];

export const useOfficers = () => {
  return officersArray.slice();
};

export const getOfficers = () => {
  return fetch("https://criminals.glassdale.us/officers")
    .then((response) => response.json())
    .then((parsedOfficers) => {
      officersArray = parsedOfficers;
    });
};
