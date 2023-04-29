// PROFILE

export const profileUserName = document.querySelector('.profile__info-name');
export const profileUserAbout = document.querySelector('.profile__info-about');
export const profileEditButton = document.querySelector('.profile__info-edit-btn');
export const profileAddPlaceButton = document.querySelector('.profile__add-place-btn');

// GALLERY

export const galleryOfPlaces = document.querySelector('.gallery__places');

// POPUPS

export const popupList = document.querySelectorAll('.popup');
export const popupCloseButtons = document.querySelectorAll('.popup__close-btn');

// ...... => EDIT PROFILE

export const popupEditProfile = document.querySelector('#edit-profile-popup');
export const popupEditProfileForm = document.forms['edit-profile-form'];
export const popupInputUserName = popupEditProfileForm.elements['edit-profile-input-username'];
export const popupInputUserAbout = popupEditProfileForm.elements['edit-profile-input-userabout'];

// ...... => ADD PLACE

export const popupAddPlace = document.querySelector('#add-place-popup');
export const popupAddPlaceForm = document.forms['add-place-form'];
export const popupInputNewPlaceName = popupAddPlaceForm.elements['add-place-input-title'];
export const popupInputNewPlacePhotoURL = popupAddPlaceForm.elements['add-place-input-photourl'];

// VALIDATION

export const validationSettings = {

  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-submit-btn',
  inactiveButtonClass: 'popup__form-submit-btn_disabled',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-input-error_visible'
  
}