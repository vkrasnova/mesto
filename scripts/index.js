//*** CONSTANT DECLARATION ***//

// CONSTANTS => PROFILE

const profileUserName = document.querySelector('.profile__info-name');
const profileUserAbout = document.querySelector('.profile__info-about');
const profileEditButton = document.querySelector('.profile__info-edit-btn');
const profileAddPlaceButton = document.querySelector('.profile__add-place-btn');

// CONSTANTS => GALLERY & PLACES

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

// CONSTANTS => POPUPS

const popupCloseButtons = document.querySelectorAll('.popup__close-btn');

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupEditProfileForm = popupEditProfile.querySelector('form[name="edit-profile-form"]');
const popupInputUserName = popupEditProfile.querySelector('.popup__form-input_data_name');
const popupInputUserAbout = popupEditProfile.querySelector('.popup__form-input_data_about');

const popupAddPlace = document.querySelector('.popup_type_add-place');
const popupAddPlaceForm = popupAddPlace.querySelector('form[name="add-place-form"]');
const popupInputNewPlaceName = popupAddPlace.querySelector('.popup__form-input_data_place-title');
const popupInputNewPlacePhotoURL = popupAddPlace.querySelector('.popup__form-input_data_place-url');

//*** CREATE PLACE ***//

function createPlace(PlaceName, PlacePhotoURL) {

  const placeTemplate = document.querySelector('#place-template').content;
  const newPlaceElement = placeTemplate.querySelector('.gallery__places-item').cloneNode(true);

  // PLACE => IMAGE

  const newPlacePhoto = newPlaceElement.querySelector('.place__image');
  newPlacePhoto.src = PlacePhotoURL;
  newPlacePhoto.alt = PlaceName;

  // PLACE => TITLE

  const newPlaceName = newPlaceElement.querySelector('.place__title');
  newPlaceName.textContent = PlaceName;

  // PLACE => LIKE BUTTON

  const newPlaceLikeButton = newPlaceElement.querySelector('.place__like-btn');
  newPlaceLikeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('place__like-btn_active');
  });

  // PLACE => DELETE BUTTON

  const newPlaceDeleteButton = newPlaceElement.querySelector('.place__delete-btn');
  newPlaceDeleteButton.addEventListener('click', function() {
    newPlaceElement.remove();
  });

  return newPlaceElement;

}

//*** ADD PLACE TO GALLERY ***//

function addPlaceToGallery(placeName, placePhotoURL) {

  const place = createPlace(placeName, placePhotoURL);
  galleryOfPlaces.prepend(place);

}

//*** POPUPS ***//

// POPUPS => OPEN POPUP

function openPopup(popup) {

  popup.classList.add('popup_opened');

}

// POPUPS => CLOSE POPUP

function closePopup(popup) {

  popup.classList.remove('popup_opened');

}

popupCloseButtons.forEach(function(btn) {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', function() {
    closePopup(popup);
  });
});

// POPUP for PROFILE EDITING

profileEditButton.addEventListener('click', function() {

  openPopup(popupEditProfile);
  popupInputUserName.value = profileUserName.textContent;
  popupInputUserAbout.value = profileUserAbout.textContent;

})

popupEditProfileForm.addEventListener('submit', function(evt) {

  evt.preventDefault();
  profileUserName.textContent = popupInputUserName.value;
  profileUserAbout.textContent = popupInputUserAbout.value;
  closePopup(popupEditProfile);

});

// POPUP for PLACE ADDING

profileAddPlaceButton.addEventListener('click', function() {

  openPopup(popupAddPlace);

})

popupAddPlaceForm.addEventListener('submit', function(evt) {

  evt.preventDefault();
  addPlaceToGallery(popupInputNewPlaceName.value, popupInputNewPlacePhotoURL.value);
  evt.target.reset();
  closePopup(popupAddPlace);

});



//*** ON PAGE LOADING ***//

initialPlaces.forEach(function(place) {

  addPlaceToGallery(place.name, place.link);

})