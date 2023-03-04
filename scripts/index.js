// CONSTANT DECLARATION

const popup = document.querySelector('.popup');
// const profileUsername = document.querySelector('.profile__username-text');
// const profileAbout = document.querySelector('.profile__about');
const profileEditButton = document.querySelector('.profile__edit-btn');
const popupCloseButton = document.querySelector('.popup__close-btn');

// OPEN POPUP

function openPopup() {
  popup.classList.add('popup_opened');
}
profileEditButton.addEventListener('click', openPopup);

// CLOSE POPUP

function closePopup() {
  popup.classList.remove('popup_opened');
}
popupCloseButton.addEventListener('click', closePopup);