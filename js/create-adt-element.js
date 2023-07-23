
const body = document.body;
const type = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house':'Дом',
  'palace':'Дворец',
  'hotel': 'Отель'
};
const AdtTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');

const selectFeature = (features, offerFeatures) => {
  const featuresList = features.querySelectorAll('.popup__feature');
  const modifiers = offerFeatures.map((offerFeature) => `popup__feature--${  offerFeature}`);
  featuresList.forEach((featuresItem) => {
    const modifier = featuresItem.classList[1];

    if(!modifiers.includes(modifier)) {
      featuresItem.remove();
    }
  });

  return featuresList;
};
const generatePhotos = (photosInfo) => {
  const photos = photosInfo.map((photoItem) => `<img src="${photoItem}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
  return photos;
};
const CreateAdt = ({author, offer, location}) => {
  const adt = AdtTemplate.cloneNode(true);
  adt.querySelector('.popup__avatar').src = author.avatar;
  adt.querySelector('.popup__title').textContent = offer.title;
  adt.querySelector('.popup__text--address').textContent = offer.address;
  adt.querySelector('.popup__text--price').innerHTML = `${offer.price} <span>₽/ночь</span>`;
  adt.querySelector('.popup__type').textContent = type[offer.type];
  adt.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  adt.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  adt.querySelector('.popup__feature').innerHTML = selectFeature(adt.querySelector('.popup__features'), offer.features);
  adt.querySelector('.popup__description').textContent = offer.description;
  adt.querySelector('.popup__photos').innerHTML = generatePhotos(offer.photos);

  return adt;
};


export const CreateAdts = (adts) =>{
  const fragment = document.createDocumentFragment();
  adts.forEach((adt) => {
    const pictureElement = CreateAdt(adt);
    fragment.append(pictureElement);
  });
  body.appendChild(fragment);
};
