export class Card {

  constructor(
    data, templateSelector, userID,
    {
      handleCardClick,
      handleCardDelete,
      handlePutLike,
      handleDeleteLike
    })
    
    {

    this._cardName = data.name;
    this._cardPhotoLink = data.link;
    this._cardID = data._id;
    this._cardOwnerID = data.owner._id;
    this._hasUserLike = data.likes.find((user) => user._id === userID)
    this._likesQty = data.likes.length;
    this._isUserCard = (this._cardOwnerID === userID)
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handlePutLike = handlePutLike;
    this._handleDeleteLike = handleDeleteLike;

    this._newCardElement = this._getTemplate();

    this._newCardPhoto = this._newCardElement
      .querySelector('.place__image');

    this._newCardName = this._newCardElement
      .querySelector('.place__title');

    this._newCardLikeButton = this._newCardElement
      .querySelector('.place__like-btn');

    this._newCardDeleteButton = this._newCardElement
      .querySelector('.place__delete-btn');

    this._newCardLikeQty = this._newCardElement
      .querySelector('.place__like-qty');
    
  }

  _setLikeButtonStatus = () => {
    if (this._hasUserLike) {
      this._newCardLikeButton.classList.add('place__like-btn_active');
    }
  }

  _getTemplate = () => {

    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.gallery__places-item')
      .cloneNode(true);

  }

  deleteCard = () => {
    this._newCardElement.remove();
    this._newCardElement = null;
  }

  getLikes = (card) => {
    this._likes = card.likes;
    this._newCardLikeQty.textContent = this._likes.length;
    this._newCardLikeButton.classList.toggle('place__like-btn_active');
  }
  
  _setEventListeners = () => {

    this._newCardPhoto.addEventListener('click', this._handleCardClick);

    this._newCardLikeButton.addEventListener('click', () => {
      if (this._newCardLikeButton.classList.contains('place__like-btn_active')) {
        this._handleDeleteLike(this._cardID);
      } else {
        this._handlePutLike(this._cardID);
      }
    });

    this._newCardDeleteButton
      .addEventListener('click', () => {
        this._handleCardDelete(this._cardID)});

  }

  generateCard = () => {

    this._newCardName.textContent = this._cardName;
    this._newCardPhoto.src = this._cardPhotoLink;
    this._newCardPhoto.alt = this._cardName;
    this._newCardLikeQty.textContent = this._likesQty;

    if (!this._isUserCard) {
      this._newCardDeleteButton.remove();
    }

    this._setLikeButtonStatus();

    this._setEventListeners();

    return this._newCardElement;

  }

}