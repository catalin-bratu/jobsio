export const getRandomNumber = (max = 1) => {
  return Math.floor(Math.random() * max);
};

export const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(50);

  return `hsl(${h}deg, ${s}%, ${l}%)`;
};

export const getRandomCapitalLetter = () =>
  String.fromCharCode(65 + Math.floor(Math.random() * 26));
