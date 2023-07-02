import {getRandomElement, getRandomElements, getRandomFractional, getRandomInteger} from './utils.js';
import {data} from './data.js';
const getLocations = () => ({
  lat: getRandomFractional(35.65000, 35.70000, 5),
  lng: getRandomFractional(139.70000, 139.80000, 5)
});

export function createAdt(index) {
  const location = getLocations();
  return {
    author: {
      avatar: `img/avatars/user${index > 9?index:`0${index+1}`}.png`
    },
    offer: {
      title: 'Название предложения',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomInteger(200,1000),
      type: getRandomElement(data.type),
      rooms: getRandomInteger(1,5),
      guests: getRandomInteger(1,5),
      checkin: getRandomElement(data.checkTime),
      checkout: getRandomElement(data.checkTime),
      features: getRandomElements(data.features),
      description: 'для славян',
      photos: getRandomElements(data.photos)
    },
    location: location
  };
}
