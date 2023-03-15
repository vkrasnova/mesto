/****************************/
/*** CONSTANT DECLARATION ***/
/****************************/

// PROFILE

const profileUserName = document.querySelector('.profile__info-name');
const profileUserAbout = document.querySelector('.profile__info-about');
const profileEditButton = document.querySelector('.profile__info-edit-btn');
const profileAddPlaceButton = document.querySelector('.profile__add-place-btn');

// GALLERY & TEMPLATE for PLACE

const galleryOfPlaces = document.querySelector('.gallery__places');
const placeTemplate = document.querySelector('#place-template').content;

// POPUPS

const popupList = document.querySelectorAll('.popup');
const popupCloseButtons = document.querySelectorAll('.popup__close-btn');

// ...... => EDIT PROFILE

const popupEditProfile = document.querySelector('#edit-profile-popup');
const popupEditProfileForm = popupEditProfile.querySelector('#edit-profile-form');
const popupInputUserName = popupEditProfile.querySelector('#edit-profile-input-username');
const popupInputUserAbout = popupEditProfile.querySelector('#edit-profile-input-userabout');

// ...... => ADD PLACE

const popupAddPlace = document.querySelector('#add-place-popup');
const popupAddPlaceForm = popupAddPlace.querySelector('#add-place-form');
const popupInputNewPlaceName = popupAddPlace.querySelector('#add-place-input-title');
const popupInputNewPlacePhotoURL = popupAddPlace.querySelector('#add-place-input-photourl');

// ...... => ZOOM IMAGE

const popupZoom = document.querySelector('#zoom-image-popup');
const popupZoomImage = popupZoom.querySelector('.popup__image');
const popupZoomImageTitle = popupZoom.querySelector('.popup__image-title');



/*****************/
/*** FUNCTIONS ***/
/*****************/

// OPEN POPUP

function openPopup(popup) {

  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeOpenedPopupByEsc);

}

// CLOSE POPUP

function closePopup(popup) {

  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOpenedPopupByEsc);

}

// CLOSE POPUP BY ESC

function closeOpenedPopupByEsc(evt) {

  const openedPopup = document.querySelector('.popup_opened');

  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }

}

// CREATE NEW PLACE

function createPlace(place) {

  const newPlaceElement = placeTemplate.querySelector('.gallery__places-item').cloneNode(true);

  //............... => image

  const newPlacePhoto = newPlaceElement.querySelector('.place__image');
  
  newPlacePhoto.src = place.link;
  newPlacePhoto.alt = place.name;

  //........................ => POPUP (ZOOM IMAGE)

  newPlacePhoto.addEventListener('click', function() {
    
    popupZoomImage.src = place.link;
    popupZoomImage.alt = place.name;
    popupZoomImageTitle.textContent = place.name;
    openPopup(popupZoom);

  });

  //............... => title

  const newPlaceName = newPlaceElement.querySelector('.place__title');

  newPlaceName.textContent = place.name;

  //............... => like button

  const newPlaceLikeButton = newPlaceElement.querySelector('.place__like-btn');

  newPlaceLikeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('place__like-btn_active');
  });

  //............... => delete button

  const newPlaceDeleteButton = newPlaceElement.querySelector('.place__delete-btn');

  newPlaceDeleteButton.addEventListener('click', function() {
    newPlaceElement.remove();
  });

  // => return

  return newPlaceElement;

}

// ADD PLACE TO GALLERY

function addPlaceToGallery(place) {

  const newCard = createPlace(place);
  
  galleryOfPlaces.prepend(newCard);

}



/****************/
/*** HANDLERS ***/
/****************/

// ON PAGE LOAD

initialPlaces.forEach(function(place) {

  addPlaceToGallery(place);

});

// POPUPS (GENERAL) => CLOSE BUTTONS

popupCloseButtons.forEach(function(btn) {

  const popup = btn.closest('.popup');

  btn.addEventListener('click', function() {
    closePopup(popup);
  });

});

// POPUP => EDIT PROFILE //

profileEditButton.addEventListener('click', function() {

  openPopup(popupEditProfile);
  popupInputUserName.value = profileUserName.textContent;
  popupInputUserAbout.value = profileUserAbout.textContent;

});

popupEditProfileForm.addEventListener('submit', function(evt) {

  evt.preventDefault();
  profileUserName.textContent = popupInputUserName.value;
  profileUserAbout.textContent = popupInputUserAbout.value;
  closePopup(popupEditProfile);

});

// POPUP => ADD PLACE //

profileAddPlaceButton.addEventListener('click', function() {

  openPopup(popupAddPlace);

});

popupAddPlaceForm.addEventListener('submit', function(evt) {

  const newPlace = {};
  newPlace.name = popupInputNewPlaceName.value;
  newPlace.link = popupInputNewPlacePhotoURL.value;

  evt.preventDefault();
  addPlaceToGallery(newPlace);
  evt.target.reset();
  closePopup(popupAddPlace);

});

// CLOSE POPUP BY CLICKING OUTSIDE

popupList.forEach(function(popup) {
  popup.addEventListener('mousedown', function(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
  })
});