let convictionsArray = [];

export const useConvictions = () => {
  return convictionsArray.slice();
};

export const getConvictions = () => {
  return fetch("https://criminals.glassdale.us/crimes")
    .then((response) => response.json())
    .then((parsedConvictions) => {
      convictionsArray = parsedConvictions;
    });
};
