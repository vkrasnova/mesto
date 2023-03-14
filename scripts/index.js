//*** POPUPS (GENERAL) ***//

// POPUPS => OPEN

function openPopup(popup) {

  popup.classList.add('popup_opened');

}

// POPUPS => CLOSE

function closePopup(popup) {

  popup.classList.remove('popup_opened');

}

// POPUPS => CLOSE BUTTONS

const popupCloseButtons = document.querySelectorAll('.popup__close-btn');

popupCloseButtons.forEach(function(btn) {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', function() {
    closePopup(popup);
  });
});

//*** GALLERY & PLACES ***//

// CREATE NEW PLACE

function createPlace(PlaceName, PlacePhotoURL) {

  const placeTemplate = document.querySelector('#place-template').content;
  const newPlaceElement = placeTemplate.querySelector('.gallery__places-item').cloneNode(true);

  //............... => image

  const newPlacePhoto = newPlaceElement.querySelector('.place__image');
  
  newPlacePhoto.src = PlacePhotoURL;
  newPlacePhoto.alt = PlaceName;

  //........................ => POPUP (ZOOM IMAGE)

  newPlacePhoto.addEventListener('click', function() {

    const popupZoom = document.querySelector('#zoom-image-popup');
    const popupZoomImage = popupZoom.querySelector('.popup__image');
    const popupZoomImageTitle = popupZoom.querySelector('.popup__image-title');;
    
    popupZoomImage.src = PlacePhotoURL;
    popupZoomImage.alt = PlaceName;
    popupZoomImageTitle.textContent = PlaceName;
    openPopup(popupZoom);

  });

  //............... => title

  const newPlaceName = newPlaceElement.querySelector('.place__title');

  newPlaceName.textContent = PlaceName;

  //............... => like button

  const newPlaceLikeButton = newPlaceElement.querySelector('.place__like-btn');

  newPlaceLikeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('place__like-btn_active');
  });

  //............... => delete button

  const newPlaceDeleteButton = newPlaceElement.querySelector('.place__delete-btn');

  newPlaceDeleteButton.addEventListener('click', function() {
    newPlaceElement.remove();
  });

  // => return

  return newPlaceElement;

}

// ADD PLACE TO GALLERY

const galleryOfPlaces = document.querySelector('.gallery__places');

function addPlaceToGallery(placeName, placePhotoURL) {

  const place = createPlace(placeName, placePhotoURL);
  
  galleryOfPlaces.prepend(place);

}

// ON PAGE LOAD

const initialPlaces = [
  {
    name: 'Имеретинcкая низменность',
    link: './images/photos/imeretinka.jpg',
  },
  {
    name: 'Красная Поляна',
    link: './images/photos/krasnaya-polyana.jpg',
  },
    {
    name: 'Орджоникидзе',
    link: './images/photos/ordzhonikidze.jpg',
  },
  {
    name: 'Хоста',
    link: './images/photos/khosta.jpg',
  },
  {
    name: 'Дендрарий',
    link: './images/photos/dendrariy.jpg',
  },
  {
    name: 'Роза Хутор',
    link: './images/photos/rosa-khutor.jpg',
  }
]

initialPlaces.forEach(function(place) {

  addPlaceToGallery(place.name, place.link);

})

//*** POPUP (EDIT PROFILE) ***//

const profileUserName = document.querySelector('.profile__info-name');
const profileUserAbout = document.querySelector('.profile__info-about');
const profileEditButton = document.querySelector('.profile__info-edit-btn');

profileEditButton.addEventListener('click', function() {

  openPopup(popupEditProfile);
  popupInputUserName.value = profileUserName.textContent;
  popupInputUserAbout.value = profileUserAbout.textContent;

})

const popupEditProfile = document.querySelector('#edit-profile-popup');
const popupEditProfileForm = popupEditProfile.querySelector('#edit-profile-form');
const popupInputUserName = popupEditProfile.querySelector('#edit-profile-input-username');
const popupInputUserAbout = popupEditProfile.querySelector('#edit-profile-input-userabout');

popupEditProfileForm.addEventListener('submit', function(evt) {

  evt.preventDefault();
  profileUserName.textContent = popupInputUserName.value;
  profileUserAbout.textContent = popupInputUserAbout.value;
  closePopup(popupEditProfile);

});

//*** POPUP (ADD PLACE) ***//

const profileAddPlaceButton = document.querySelector('.profile__add-place-btn');

profileAddPlaceButton.addEventListener('click', function() {

  openPopup(popupAddPlace);

})

const popupAddPlace = document.querySelector('#add-place-popup');
const popupAddPlaceForm = popupAddPlace.querySelector('#add-place-form');
const popupInputNewPlaceName = popupAddPlace.querySelector('#add-place-input-title');
const popupInputNewPlacePhotoURL = popupAddPlace.querySelector('#add-place-input-photourl');

popupAddPlaceForm.addEventListener('submit', function(evt) {

  evt.preventDefault();
  addPlaceToGallery(popupInputNewPlaceName.value, popupInputNewPlacePhotoURL.value);
  evt.target.reset();
  closePopup(popupAddPlace);

});