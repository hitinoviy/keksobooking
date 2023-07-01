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


getRandomInteger(1, 5);

getRandomFractional(2,5, 2);

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
function getRandomPhotos () {
  const countPhotos = getRandomInteger(1, photos.length);
  return photos.slice(0,countPhotos);
}

function createAdt(_, index) {
  return {
    author: {
      avatar: `img/avatars/user${index+1 > 9?index+1:`0${index+1}`}.png`
    },
    offer: {
      title: 'Название предложения',
      address: `${this.location.lat}, ${this.location.lng}`,
      price: getRandomInteger(200,1000),
      type: 'palace, flat, house, bungalow или hotel',
      rooms: getRandomInteger(1,5),
      guests: getRandomInteger(1,5),
      checkin: ' 12:00, 13:00 или 14:00',
      checkout: '12:00, 13:00 или 14:00',
      features: 'массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner',
      description: 'для славян',
      photos: getRandomPhotos()
    },
    location: {
      lat: getRandomFractional(35.65000,35.70000, 5),
      lng: getRandomFractional(139.70000,139.80000, 5),
    }
  };
}
function createAtds(countAdt) {
  return Array.from({length: countAdt}, createAdt);
}
console.log(createAtds(10));
