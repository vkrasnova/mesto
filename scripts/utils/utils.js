// OPEN POPUP

export function openPopup(popup) {

  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeOpenedPopupByEsc);

}

// CLOSE POPUP

export function closePopup(popup) {

  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOpenedPopupByEsc);

}

// CLOSE POPUP BY ESC

function closeOpenedPopupByEsc(evt) {

  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }

}