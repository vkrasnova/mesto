// PROFILE EDITING

export const profileEditButton = document
  .querySelector('.profile__info-edit-btn');

export const popupEditProfileForm = document
  .forms['edit-profile-form'];

export const popupInputUserName = popupEditProfileForm
  .elements['edit-profile-input-username'];
export const popupInputUserAbout = popupEditProfileForm
  .elements['edit-profile-input-userabout'];

// ADDING A NEW PLACE

export const profileAddPlaceButton = document
  .querySelector('.profile__add-place-btn');

export const popupAddPlaceForm = document
  .forms['add-place-form'];

// SETTINGS FOR VALIDATION

export const validationSettings = {

  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-submit-btn',
  inactiveButtonClass: 'popup__form-submit-btn_disabled',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-input-error_visible'

}