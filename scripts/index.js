// CONSTANT DECLARATION

const profileUserName = document.querySelector('.profile__info-name');
const profileUserAbout = document.querySelector('.profile__info-about');
const profileEditButton = document.querySelector('.profile__info-edit-btn');

const popup = document.querySelector('.popup');
const popupEditProfileForm = document.querySelector('form[name="profile-edit-form"]');
const popupInputUserName = document.querySelector('.popup__form-input_data_name');
const popupInputUserAbout = document.querySelector('.popup__form-input_data_about');
const popupCloseButton = document.querySelector('.popup__close-btn');
const popupSubmitButton = document.querySelector('.popup__form-submit-btn');

// OPEN POPUP

function openPopup() {
  popup.classList.add('popup_opened');
};

profileEditButton.addEventListener('click', function() {
  openPopup();
  popupInputUserName.value = profileUserName.textContent;
  popupInputUserAbout.value = profileUserAbout.textContent;
});

// CLOSE POPUP

function closePopup() {
  popup.classList.remove('popup_opened');
};

popupCloseButton.addEventListener('click', closePopup);

// SUBMIT FORM

function handleFormSubmit(event) {
    event.preventDefault();
    profileUserName.textContent = popupInputUserName.value;
    profileUserAbout.textContent = popupInputUserAbout.value;
    closePopup();
};

popupEditProfileForm.addEventListener('submit', handleFormSubmit);
