// CONSTANT DECLARATION

const profileUserName = document.querySelector('.profile__info-name');
const profileUserAbout = document.querySelector('.profile__info-about');
const profileEditButton = document.querySelector('.profile__info-edit-btn');

const galleryOfPlaces = document.querySelector('.gallery__places');
const initialPlaces = [
  {
    name: 'Имеретинcкая низменность',
    link: './images/photos/imeretinka.jpg',
  },
  {
    name: 'Красная Поляна',
    link: './images/photos/krasnaya-polyana.jpg',
  },
  {
    name: 'Хоста',
    link: './images/photos/khosta.jpg',
  },
  {
    name: 'Орджоникидзе',
    link: './images/photos/ordzhonikidze.jpg',
  },
  {
    name: 'Дендрарий',
    link: './images/photos/dendrariy.jpg',
  },
  {
    name: 'Роза Хутор',
    link: './images/photos/rosa-khutor.jpg',
  }
]

const popup = document.querySelector('.popup');
const popupEditProfileForm = document.querySelector('form[name="profile-edit-form"]');
const popupInputUserName = document.querySelector('.popup__form-input_data_name');
const popupInputUserAbout = document.querySelector('.popup__form-input_data_about');
const popupCloseButton = document.querySelector('.popup__close-btn');
const popupSubmitButton = document.querySelector('.popup__form-submit-btn');

// CREATE PLACE

function createPlace(PlaceName, PlacePhotoURL) {

  const placeTemplate = document.querySelector('#place-template').content;
  const newPlaceElement = placeTemplate.querySelector('.gallery__places-item').cloneNode(true);

  const newPlacePhoto = newPlaceElement.querySelector('.place__image');
  newPlacePhoto.src = PlacePhotoURL;
  newPlacePhoto.alt = PlaceName;

  const newPlaceName = newPlaceElement.querySelector('.place__title');
  newPlaceName.textContent = PlaceName;

  const newPlaceLikeButton = newPlaceElement.querySelector('.place__like-btn');
  newPlaceLikeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('place__like-btn_active');
  });

  return newPlaceElement;

}

// ADD PLACE TO GALLERY

function addPlaceToGallery(placeName, placePhotoURL) {
  const place = createPlace(placeName, placePhotoURL);
  galleryOfPlaces.prepend(place);
}

// OPEN POPUP

function openPopup() {
  popup.classList.add('popup_opened');
}

profileEditButton.addEventListener('click', function() {
  openPopup();
  popupInputUserName.value = profileUserName.textContent;
  popupInputUserAbout.value = profileUserAbout.textContent;
})

// CLOSE POPUP

function closePopup() {
  popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', closePopup);

// SUBMIT FORM

function handleFormSubmit(event) {
    event.preventDefault();
    profileUserName.textContent = popupInputUserName.value;
    profileUserAbout.textContent = popupInputUserAbout.value;
    closePopup();
}

popupEditProfileForm.addEventListener('submit', handleFormSubmit);

// ON PAGE LOADING

initialPlaces.forEach(function(place) {
  addPlaceToGallery(place.name, place.link);
})