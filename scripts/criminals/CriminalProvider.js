let criminalsArray = [];

export const useCriminals = () => {
  return criminalsArray.slice();
};

export const getCriminals = () => {
  return fetch("https://criminals.glassdale.us/criminals")
    .then((response) => response.json())
    .then((parsedCriminals) => {
      criminalsArray = parsedCriminals;
    });
};
