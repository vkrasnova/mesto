import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {

  constructor({ popupSelector, handleFormSubmit }) {

    super(popupSelector);

    this._form = this._popup.querySelector('.popup__form');
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll('.popup__form-input');
    this._submitButton = this._form.querySelector('.popup__form-submit-btn');
    this._submitButtonText = this._submitButton.textContent;

  }

  _getInputValues() {

    const inputValues = {};

    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;

  }

  setInputValues(data) {

    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });

  }


  setEventListeners() {

    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });

  }

  close() {

    super.close();

    this._form.reset();

  }

  renderLoading(isLoading) {

    if (isLoading) {
      this._submitButton.textContent = 'Сохранение...';
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
    
  }

}