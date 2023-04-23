import {openPopup} from './index.js';

const popupZoom = document.querySelector('#zoom-image-popup');
const popupZoomImage = popupZoom.querySelector('.popup__image');
const popupZoomImageTitle = popupZoom.querySelector('.popup__image-title');

export class Card {

  constructor(place, templateSelector) {

    this._cardName = place.name;
    this._cardPhotoLink = place.link;
    this._templateSelector = templateSelector;

    this._newCardElement = this._getTemplate();
    this._newCardPhoto = this._newCardElement.querySelector('.place__image');
    this._newCardName = this._newCardElement.querySelector('.place__title');
    this._newCardLikeButton = this._newCardElement.querySelector('.place__like-btn');
    this._newCardDeleteButton = this._newCardElement.querySelector('.place__delete-btn');
    
  };

  _getTemplate = () => {

    const newCardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.gallery__places-item')
      .cloneNode(true);

    return newCardElement;

  }

  _addCardZoom = () => {

    popupZoomImage.src = this._cardPhotoLink;
    popupZoomImage.alt = this._cardName;
    popupZoomImageTitle.textContent = this._cardName;

    openPopup(popupZoom);

  }
  
  _setEventListeners = () => {

    this._newCardPhoto.addEventListener('click', this._addCardZoom);

    this._newCardLikeButton.addEventListener('click', (evt) => {
      evt.target.classList.toggle('place__like-btn_active');
    });

    this._newCardDeleteButton.addEventListener('click', () => {
      this._newCardElement.remove();
    });

  }

  generateCard = () => {

    this._newCardName.textContent = this._cardName;
    this._newCardPhoto.src = this._cardPhotoLink;
    this._newCardPhoto.alt = this._cardName;

    this._setEventListeners();

    return this._newCardElement;
  }

}