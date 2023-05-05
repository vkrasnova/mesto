import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {

  constructor({ popupSelector, handleFormSubmit }) {

    super(popupSelector);

    this._form = this._popup.querySelector('.popup__form');
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll('.popup__form-input');

  }

  _getInputValues() {

    const inputValues = {};

    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;

  }

  setEventListeners() {

    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });

  }

  close() {

    super.close();

    this._form.reset();

  }

}