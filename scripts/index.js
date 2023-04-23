/***************/
/*** IMPORTS ***/
/***************/

import {initialPlaces} from './data/initialPlaces.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

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

// POPUPS

const popupList = document.querySelectorAll('.popup');
const popupCloseButtons = document.querySelectorAll('.popup__close-btn');

// ...... => EDIT PROFILE

const popupEditProfile = document.querySelector('#edit-profile-popup');
const popupEditProfileForm = document.forms['edit-profile-form'];
const popupInputUserName = popupEditProfileForm.elements['edit-profile-input-username'];
const popupInputUserAbout = popupEditProfileForm.elements['edit-profile-input-userabout'];

// ...... => ADD PLACE

const popupAddPlace = document.querySelector('#add-place-popup');
const popupAddPlaceForm = document.forms['add-place-form'];
const popupInputNewPlaceName = popupAddPlaceForm.elements['add-place-input-title'];
const popupInputNewPlacePhotoURL = popupAddPlaceForm.elements['add-place-input-photourl'];

// VALIDATION

const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-submit-btn',
  inactiveButtonClass: 'popup__form-submit-btn_disabled',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-input-error_visible'
};

const editProfileFormValidation = new FormValidator(validationSettings, popupEditProfileForm);
const addPlaceFormValidation = new FormValidator(validationSettings, popupAddPlaceForm);

/*****************/
/*** FUNCTIONS ***/
/*****************/

// OPEN POPUP

export function openPopup(popup) {

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

  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }

}

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
  evt.submitter.classList.add('popup__form-submit-btn_disabled');
  evt.submitter.disabled = true;
  closePopup(popupAddPlace);

});

// ADD VALIDATION TO FORMS

editProfileFormValidation.enableValidation();
addPlaceFormValidation.enableValidation();