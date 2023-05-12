export class FormValidator {

  constructor(validationSettings, formElement) {

    this._formSelector = validationSettings.formSelector;
    this._inputSelector = validationSettings.inputSelector;
    this._submitButtonSelector = validationSettings.submitButtonSelector;
    this._inactiveButtonClass = validationSettings.inactiveButtonClass;
    this._inputErrorClass = validationSettings.inputErrorClass;
    this._errorClass = validationSettings.errorClass;

    this._formElement = formElement;

    this._inputList = Array.from
      (this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement
      .querySelector(this._submitButtonSelector);

  };

  _showInputError = (inputElement, errorMessage) => {

    const errorElement = this._formElement
      .querySelector(`.${inputElement.name}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);

  };

  _hideInputError = (inputElement) => {

    const errorElement = this._formElement
      .querySelector(`.${inputElement.name}-error`);

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';

  };

  hideInputErrors = () => {
    this._inputList.forEach((item) => {
      this._hideInputError(item);
    })
  }

  _checkInputValidity = (inputElement) => {

    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }

  };

  _hasInvalidInput = () => {

    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })

  };

  _enableSubmitButton = () => {

    this._buttonElement.classList
      .remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;

  }

  disableSubmitButton = () => {

    this._buttonElement.classList
      .add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;

  }

  _toggleButtonState = () => {

    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }

  };

  _setEventListeners = () => {

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });

  };

  enableValidation = () => {

    this._setEventListeners();

  };

}