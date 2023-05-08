/***************/
/*** IMPORTS ***/
/***************/

// CSS

import './index.css';

// COMPONENTS

import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { FormValidator } from '../components/FormValidator.js';

// CONSTANTS

import { initialPlaces } from '../utils/initialPlaces.js';
import { 
  profileEditButton,
  profileAddPlaceButton,
  validationSettings
} from '../utils/constants.js';



/***************/
/*** PROFILE ***/
/***************/

const userInfo = new UserInfo({
  userNameSelector: '.profile__info-name',
  userAboutSelector: '.profile__info-about'
});


const popupEditProfile = new PopupWithForm({
  popupSelector: '#edit-profile-popup',
  handleFormSubmit: ({
    'edit-profile-input-username': userName,
    'edit-profile-input-userabout': userAbout
  }) => {
    userInfo.setUserInfo({ userName, userAbout });
  }
});
popupEditProfile.setEventListeners();


profileEditButton.addEventListener('click', () => {
  const { userName, userAbout } = userInfo.getUserInfo();
  popupEditProfile.setInputValues({
    'edit-profile-input-username': userName,
    'edit-profile-input-userabout': userAbout
  });
  formValidators['edit-profile-form'].hideInputErrors();
  popupEditProfile.open();
});

// BUTTON & POPUP TO ADD A NEW PLACE

const popupAddPlace = new PopupWithForm({
  popupSelector: '#add-place-popup',
  handleFormSubmit: ({
    'add-place-input-title': name,
    'add-place-input-photourl': link,
  }) => {
    gallery.addItem(createPlace({name, link}));
  }
});
popupAddPlace.setEventListeners();

profileAddPlaceButton.addEventListener('click', () => {
  formValidators['add-place-form'].hideInputErrors();
  formValidators['add-place-form'].disableSubmitButton();
  popupAddPlace.open();
});



/***************/
/*** GALLERY ***/
/***************/

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

function createPlace(place) {
  const newPlace = new Card(place, '#place-template', () => {
    popupWithImage.open({
      name: place.name,
      link: place.link
    });
  });
  return newPlace.generateCard();
}

const gallery = new Section({
  items: initialPlaces,
  renderer: (item) => {
    gallery.addItem(createPlace(item));
  }
}, '.gallery__places'
);
gallery.renderItems();



/******************/
/*** VALIDATION ***/
/******************/

const formValidators = {}

const enableValidation = (validationSettings) => {

  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));

  formList.forEach((formElement) => {

    const validator = new FormValidator(validationSettings, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();

  });

};

enableValidation(validationSettings);