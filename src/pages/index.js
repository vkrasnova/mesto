/***************/
/*** IMPORTS ***/
/***************/

// CSS

import './index.css';

// COMPONENTS

import { Api } from '../components/Api.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupToConfirm } from '../components/PopupToConfirm.js';
import { FormValidator } from '../components/FormValidator.js';

// CONSTANTS

import { 
  avatar,
  profileEditButton,
  profileAddPlaceButton,
  validationSettings
} from '../utils/constants.js';



/**********************************************/
/*** DECLARATION OF CONSTANTS AND VARIABLES ***/
/**********************************************/

let userID;

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-65",
  headers: {
    authorization:
      "caa9776b-e67a-468e-a1fe-7b61e8271d58",
      "Content-Type": "application/json",
  }
})


/*************************************************/
/*** LOADING A USER PROFILE AND INITIAL CARDS ***/
/*************************************************/

Promise.all([api.getUserInfo(), api.getInitialPlaces()])
.then(([userData, initialPlaces]) => {
  userID = userData._id;
  userInfo.setUserInfo({
    userName: userData.name,
    userAbout: userData.about
  });
  userInfo.setUserAvatar({
    userAvatar: userData.avatar
  });
  gallery.renderItems(initialPlaces.reverse());
})
.catch((err) => {
  alert(`${err}. Попробуйте еще раз.`);
})



/***************/
/*** PROFILE ***/
/***************/

// AVATAR

const popupUpdateAvatar = new PopupWithForm({
  popupSelector: '#update-avatar-popup',
  handleFormSubmit: ({
    'update-avatar-input-url': newUserAvatarLink
  }) => {
    popupUpdateAvatar.renderLoading(true);
    api.updateUserAvatar(newUserAvatarLink)
    .then(({ avatar }) => {
      userInfo.setUserAvatar({
        userAvatar: avatar
      });
      popupUpdateAvatar.close();
    })
    .catch((err) => {
      alert(`${err}. Проверьте данные и попробуйте еще раз.`)
    })
    .finally(() => {
      popupUpdateAvatar.renderLoading(false)
    })
  }
});
popupUpdateAvatar.setEventListeners();

avatar.addEventListener('click', () => {
  formValidators['update-avatar-form'].hideInputErrors();
  formValidators['update-avatar-form'].disableSubmitButton();
  popupUpdateAvatar.open();
});

// USER INFO

const userInfo = new UserInfo({
  userNameSelector: '.profile__info-name',
  userAboutSelector: '.profile__info-about',
  userAvatarSelector: '.profile__avatar'
});

const popupEditProfile = new PopupWithForm({
  popupSelector: '#edit-profile-popup',
  handleFormSubmit: ({
    'edit-profile-input-username': userName,
    'edit-profile-input-userabout': userAbout
  }) => {
    popupEditProfile.renderLoading(true);
    api.setUserInfo({ userName, userAbout })
    .then(({ name, about }) => {
      userInfo.setUserInfo({
        userName: name,
        userAbout: about
      });
      popupEditProfile.close();
    })
    .catch((err) => {
      alert(`${err}. Проверьте данные и попробуйте еще раз.`);
    })
    .finally(() => {
      popupEditProfile.renderLoading(false)
    })
  }
});
popupEditProfile.setEventListeners();


profileEditButton.addEventListener('click', () => {
  const { userName, userAbout } = userInfo.getUserInfo();
  popupEditProfile.setInputValues({
    'edit-profile-input-username': userName,
    'edit-profile-input-userabout': userAbout
  });
  formValidators['edit-profile-form'].hideInputErrors();
  formValidators['edit-profile-form'].disableSubmitButton();
  popupEditProfile.open();
});

// BUTTON & POPUP TO ADD A NEW PLACE

const popupAddPlace = new PopupWithForm({
  popupSelector: '#add-place-popup',
  handleFormSubmit: ({
    'add-place-input-title': name,
    'add-place-input-photourl': link,
  }) => {
    popupAddPlace.renderLoading(true);
    api.addNewCard({ name, link })
    .then((res) => {
      gallery.addItem(createCard(res, userID));
      popupAddPlace.close();
    })
    .catch((err) => {
      alert(`${err}. Проверьте данные и попробуйте еще раз.`);
    })
    .finally(() => {
      popupAddPlace.renderLoading(false)
    })
  }
});
popupAddPlace.setEventListeners();

profileAddPlaceButton.addEventListener('click', () => {
  formValidators['add-place-form'].hideInputErrors();
  formValidators['add-place-form'].disableSubmitButton();
  popupAddPlace.open();
});



/***************/
/*** GALLERY ***/
/***************/

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupToDeleteCard = new PopupToConfirm({ popupSelector: '#delete-place-popup'});
popupToDeleteCard.setEventListeners();

function createCard(item, userID) {

  const newCard = new Card(

    item,
    '#place-template',
    userID,
    {

      handleCardClick: () => {
        popupWithImage.open({
          name: item.name,
          link: item.link
        })
      },

      handleCardDelete: (cardID) => {
        popupToDeleteCard.open();
        popupToDeleteCard.setSubmitAction(function() {
          popupToDeleteCard.renderLoading(true, 'Удаление...');
          api.deleteCard(cardID)
          .then(() => {
            newCard.deleteCard();
            popupToDeleteCard.close();
          })
          .catch((err) => {
            alert(`${err}. Попробуйте еще раз.`);
          })
          .finally(() => {
            popupToDeleteCard.renderLoading(false, '')
          })
        })
      },

      handlePutLike: (cardID) => {
        api.putLike(cardID)
        .then((res) => {
          newCard.getLikes(res);
        })
        .catch((err) => {
          alert(`${err}. Попробуйте еще раз.`);
        })
      },

      handleDeleteLike: (cardID) => {
        api.deleteLike(cardID)
        .then((res) => {
          newCard.getLikes(res);
        })
        .catch((err) => {
          alert(`${err}. Попробуйте еще раз.`);
        })
      }

    }
  );

  return newCard.generateCard();
}


const gallery = new Section({
  renderer: (item) => {
    gallery.addItem(createCard(item, userID));
  }
}, '.gallery__places');



/******************/
/*** VALIDATION ***/
/******************/

const formValidators = {}

const enableValidation = (validationSettings) => {

  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));

  formList.forEach((formElement) => {

    const validator = new FormValidator(validationSettings, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();

  });

};

enableValidation(validationSettings);