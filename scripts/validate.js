const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__form-submit-btn',
    inactiveButtonClass: 'popup__form-submit-btn_disabled',
    inputErrorClass: 'popup__form-input_type_error',
    errorClass: 'popup__form-input-error_visible'
};

const showInputError = (formElement, inputElement, errorMessage, validationSettings) => {

  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);

  inputElement.classList.add(validationSettings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationSettings.errorClass);

};

const hideInputError = (formElement, inputElement, validationSettings) => {

  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);

  inputElement.classList.remove(validationSettings.inputErrorClass);
  errorElement.classList.remove(validationSettings.errorClass);
  errorElement.textContent = '';

};

const checkInputValidity = (formElement, inputElement, validationSettings) => {

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationSettings);
  } else {
    hideInputError(formElement, inputElement, validationSettings);
  }

};

const hasInvalidInput = (inputList) => {

  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })

};

function toggleButtonState (inputList, buttonElement, validationSettings) {

    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationSettings.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(validationSettings.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }

};

const setEventListeners = (formElement, validationSettings) => {

  const inputList = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));
  const buttonElement = formElement.querySelector(validationSettings.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, validationSettings);

  inputList.forEach((inputElement) => {

    inputElement.addEventListener('input', function () {

      checkInputValidity(formElement, inputElement, validationSettings);
      toggleButtonState(inputList, buttonElement, validationSettings);

    });

  });

};

const enableValidation = (validationSettings) => {

  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));

  formList.forEach(function(formElement) {

    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    
    setEventListeners(formElement, validationSettings);

  });

};

enableValidation(validationSettings);