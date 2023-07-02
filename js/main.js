const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const checkTime = [
  '12:00',
  '13:00',
  '14:00'
];
const type = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
function getRandomFractional(min, max, maxAfterComma) {
  const lower = Math.min(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.max(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(maxAfterComma);
}

const getRandomElements = (elements)=> elements.slice(0,getRandomInteger(1, elements.length));
const getRandomElement = (arr) => arr[getRandomInteger(0,arr.length-1)];

const getLocations = () => ({
  lat: getRandomFractional(35.65000, 35.70000, 5),
  lng: getRandomFractional(139.70000, 139.80000, 5)
});

function createAdt(index) {
  const location = getLocations();
  return {
    author: {
      avatar: `img/avatars/user${index > 9?index:`0${index+1}`}.png`
    },
    offer: {
      title: 'Название предложения',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomInteger(200,1000),
      type: getRandomElement(type),
      rooms: getRandomInteger(1,5),
      guests: getRandomInteger(1,5),
      checkin: getRandomElement(checkTime),
      checkout: getRandomElement(checkTime),
      features: getRandomElements(features),
      description: 'для славян',
      photos: getRandomElements(photos)
    },
    location: location
  };
}
const getAtds = () => Array.from(
  {length: 10},
  (_,adtIndex)=> createAdt(adtIndex+1));
getAtds();
