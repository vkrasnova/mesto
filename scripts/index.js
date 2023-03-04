// CONSTANT DECLARATION

const profileUsername = document.querySelector('.profile__username-text');
const profileAbout = document.querySelector('.profile__about');
const profileEditButton = document.querySelector('.profile__edit-btn');

const popup = document.querySelector('.popup');
const popupEditProfileForm = document.querySelector('form[name="profile-edit-form"]');
const popupInputName = document.querySelector('.popup__form-input_data_name');
const popupInputAbout = document.querySelector('.popup__form-input_data_about');
const popupCloseButton = document.querySelector('.popup__close-btn');
const popupSubmitButton = document.querySelector('.popup__form-submit-btn');

// OPEN POPUP

function openPopup() {
  popup.classList.add('popup_opened');
};

profileEditButton.addEventListener('click', function() {
  openPopup();
  popupInputName.value = profileUsername.textContent;
  popupInputAbout.value = profileAbout.textContent;
});

// CLOSE POPUP

function closePopup() {
  popup.classList.remove('popup_opened');
};

popupCloseButton.addEventListener('click', closePopup);

// SUBMIT FORM

function handleFormSubmit(event) {
    event.preventDefault();
    profileUsername.textContent = popupInputName.value;
    profileAbout.textContent = popupInputAbout.value;
    closePopup();
};

popupEditProfileForm.addEventListener('submit', handleFormSubmit);
