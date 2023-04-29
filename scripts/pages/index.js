/***************/
/*** IMPORTS ***/
/***************/

// COMPONENTS

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';

// CONSTANTS

import {initialPlaces} from '../utils/initialPlaces.js';
import {
  profileUserName,
  profileUserAbout,
  profileEditButton,
  profileAddPlaceButton,
  galleryOfPlaces,
  popupList,
  popupCloseButtons,
  popupEditProfile,
  popupEditProfileForm,
  popupInputUserName,
  popupInputUserAbout,
  popupAddPlace,
  popupAddPlaceForm,
  popupInputNewPlaceName,
  popupInputNewPlacePhotoURL,
  validationSettings
} from '../utils/constants.js';

// UTILS

import {openPopup, closePopup} from '../utils/utils.js';



/****************************/
/*** CONSTANT DECLARATION ***/
/****************************/

const editProfileFormValidation = new FormValidator(validationSettings, popupEditProfileForm);
const addPlaceFormValidation = new FormValidator(validationSettings, popupAddPlaceForm);



/*****************/
/*** FUNCTIONS ***/
/*****************/

// CREATE NEW PLACE

function createPlace(place, templateSelector) {
  const newPlace = new Card(place, templateSelector);
  return newPlace.generateCard();
}

// ADD PLACE TO GALLERY

function addPlaceToGallery(place, templateSelector) {
  
  galleryOfPlaces.prepend(createPlace(place, templateSelector));

}



/****************/
/*** HANDLERS ***/
/****************/

// ON PAGE LOAD

initialPlaces.forEach(function(place) {

  addPlaceToGallery(place, '#place-template');

});

// POPUPS (GENERAL) => CLOSE BUTTONS

popupCloseButtons.forEach(function(btn) {

  const popup = btn.closest('.popup');

  btn.addEventListener('click', function() {
    closePopup(popup);
  });

});

// CLOSE POPUP BY CLICKING OUTSIDE

popupList.forEach(function(popup) {

  popup.addEventListener('mousedown', function(evt) {

    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    
  })

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
  addPlaceToGallery(newPlace, '#place-template');
  evt.target.reset();
  addPlaceFormValidation.disableSubmitButton();
  closePopup(popupAddPlace);
});

// ADD VALIDATION TO FORMS

editProfileFormValidation.enableValidation();
addPlaceFormValidation.enableValidation();