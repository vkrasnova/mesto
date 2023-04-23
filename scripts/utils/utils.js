/***************/
/*** IMPORTS ***/
/***************/

import {Card} from '../classes/Card.js';



/****************************/
/*** CONSTANT DECLARATION ***/
/****************************/

const galleryOfPlaces = document.querySelector('.gallery__places');



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



/***************/
/*** EXPORTS ***/
/***************/

export {openPopup, closePopup, addPlaceToGallery};