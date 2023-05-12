import { Popup } from './Popup.js';

export class PopupToConfirm extends Popup {

  constructor({ popupSelector }) {

    super(popupSelector);

    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__form-submit-btn');
    this._submitButtonText = this._submitButton.textContent;

  }

  setSubmitAction(action) {

    this._functionSubmit = action;

  }

  setEventListeners() {

    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._functionSubmit();
    });

  }

  renderLoading(isLoading, text) {

    if (isLoading) {
      this._submitButton.textContent = text;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
    
  }

}