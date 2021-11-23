export const generateRealisticAge = () : number => {
  const randomNumber = Math.random() * (80 - 1) + 1; 
  return Math.round(randomNumber);
} 
