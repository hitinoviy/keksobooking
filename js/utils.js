export const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
export const  getRandomFractional = (min, max, maxAfterComma) => {
  const lower = Math.min(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.max(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(maxAfterComma);
};

export const getRandomElements = (elements)=> elements.slice(0,getRandomInteger(1, elements.length));
export const getRandomElement = (arr) => arr[getRandomInteger(0,arr.length-1)];
