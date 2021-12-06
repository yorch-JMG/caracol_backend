export const generateRandomEventId = () : number => {
  return Math.floor(Math.random() * (4 - 1 + 1) + 1)
};
