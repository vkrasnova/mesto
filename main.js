(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_sendRequest",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._sendRequest)}},{key:"getInitialPlaces",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._sendRequest)}},{key:"setUserInfo",value:function(t){var e=t.userName,n=t.userAbout;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:n})}).then(this._sendRequest)}},{key:"addNewCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this._sendRequest)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._sendRequest)}},{key:"putLike",value:function(t){return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"PUT",headers:this._headers}).then(this._sendRequest)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"DELETE",headers:this._headers}).then(this._sendRequest)}},{key:"updateUserAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._sendRequest)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(t){var e=this;this.clear(),t.forEach((function(t){e._renderer(t)}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function c(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function l(t,e,n){return(e=s(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var f=c((function t(e){var n=this,r=e.userNameSelector,o=e.userAboutSelector,i=e.userAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"getUserInfo",(function(){return{userName:n._userName.textContent,userAbout:n._userAbout.textContent}})),l(this,"setUserInfo",(function(t){var e=t.userName,r=t.userAbout;n._userName.textContent=e,n._userAbout.textContent=r})),l(this,"setUserAvatar",(function(t){var e=t.userAvatar;n._userAvatar.src=e})),this._userName=document.querySelector(r),this._userAbout=document.querySelector(o),this._userAvatar=document.querySelector(i)}));function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,b(r.key),r)}}function d(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function m(t,e,n){return(e=b(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var h=d((function t(e,n,r,o){var i=this,u=o.handleCardClick,a=o.handleCardDelete,c=o.handlePutLike,l=o.handleDeleteLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,"_setLikeButtonStatus",(function(){i._hasUserLike&&i._newCardLikeButton.classList.add("place__like-btn_active")})),m(this,"_getTemplate",(function(){return document.querySelector(i._templateSelector).content.querySelector(".gallery__places-item").cloneNode(!0)})),m(this,"deleteCard",(function(){i._newCardElement.remove(),i._newCardElement=null})),m(this,"getLikes",(function(t){i._likes=t.likes,i._newCardLikeQty.textContent=i._likes.length,i._newCardLikeButton.classList.toggle("place__like-btn_active")})),m(this,"_setEventListeners",(function(){i._newCardPhoto.addEventListener("click",i._handleCardClick),i._newCardLikeButton.addEventListener("click",(function(){i._newCardLikeButton.classList.contains("place__like-btn_active")?i._handleDeleteLike(i._cardID):i._handlePutLike(i._cardID)})),i._newCardDeleteButton.addEventListener("click",(function(){i._handleCardDelete(i._cardID)}))})),m(this,"generateCard",(function(){return i._newCardName.textContent=i._cardName,i._newCardPhoto.src=i._cardPhotoLink,i._newCardPhoto.alt=i._cardName,i._newCardLikeQty.textContent=i._likesQty,i._isUserCard||i._newCardDeleteButton.remove(),i._setLikeButtonStatus(),i._setEventListeners(),i._newCardElement})),this._cardName=e.name,this._cardPhotoLink=e.link,this._cardID=e._id,this._cardOwnerID=e.owner._id,this._hasUserLike=e.likes.find((function(t){return t._id===r})),this._likesQty=e.likes.length,this._isUserCard=this._cardOwnerID===r,this._templateSelector=n,this._handleCardClick=u,this._handleCardDelete=a,this._handlePutLike=c,this._handleDeleteLike=l,this._newCardElement=this._getTemplate(),this._newCardPhoto=this._newCardElement.querySelector(".place__image"),this._newCardName=this._newCardElement.querySelector(".place__title"),this._newCardLikeButton=this._newCardElement.querySelector(".place__like-btn"),this._newCardDeleteButton=this._newCardElement.querySelector(".place__delete-btn"),this._newCardLikeQty=this._newCardElement.querySelector(".place__like-qty")}));function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close-btn"),this._closeByEsc=this._closeByEsc.bind(this)}var e,n;return e=t,(n=[{key:"_closeByEsc",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closeByEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closeByEsc)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close()})),this._popupCloseButton.addEventListener("click",(function(){t.close()}))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},E.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__image"),e._imageTitle=e._popup.querySelector(".popup__image-title"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;this._image.src=n,this._image.alt=e,this._imageTitle.textContent=e,E(C(u.prototype),"open",this).call(this)}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._form=e._popup.querySelector(".popup__form"),e._handleFormSubmit=r,e._inputList=e._popup.querySelectorAll(".popup__form-input"),e._submitButton=e._form.querySelector(".popup__form-submit-btn"),e._submitButtonText=e._submitButton.textContent,e}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;j(I(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"close",value:function(){j(I(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(t){this._submitButton.textContent=t?"Сохранение...":this._submitButtonText}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._form=e._popup.querySelector(".popup__form"),e._submitButton=e._form.querySelector(".popup__form-submit-btn"),e._submitButtonText=e._submitButton.textContent,e}return e=u,(n=[{key:"setSubmitAction",value:function(t){this._functionSubmit=t}},{key:"setEventListeners",value:function(){var t=this;R(x(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._functionSubmit()}))}},{key:"renderLoading",value:function(t,e){this._submitButton.textContent=t?e:this._submitButtonText}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,H(r.key),r)}}function F(t,e,n){return e&&V(t.prototype,e),n&&V(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Q(t,e,n){return(e=H(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function H(t){var e=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===U(e)?e:String(e)}var J,M=F((function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Q(this,"_showInputError",(function(t,e){var n=r._formElement.querySelector(".".concat(t.name,"-error"));t.classList.add(r._inputErrorClass),n.textContent=e,n.classList.add(r._errorClass)})),Q(this,"_hideInputError",(function(t){var e=r._formElement.querySelector(".".concat(t.name,"-error"));t.classList.remove(r._inputErrorClass),e.classList.remove(r._errorClass),e.textContent=""})),Q(this,"hideInputErrors",(function(){r._inputList.forEach((function(t){r._hideInputError(t)}))})),Q(this,"_checkInputValidity",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t,t.validationMessage)})),Q(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),Q(this,"_enableSubmitButton",(function(){r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.disabled=!1})),Q(this,"disableSubmitButton",(function(){r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.disabled=!0})),Q(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.disableSubmitButton():r._enableSubmitButton()})),Q(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._checkInputValidity(t),r._toggleButtonState()}))}))})),Q(this,"enableValidation",(function(){r._setEventListeners()})),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)})),G=document.querySelector(".profile__avatar"),z=document.querySelector(".profile__info-edit-btn"),$=document.querySelector(".profile__add-place-btn");function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var W=new n({url:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"caa9776b-e67a-468e-a1fe-7b61e8271d58","Content-Type":"application/json"}});Promise.all([W.getUserInfo(),W.getInitialPlaces()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];J=o._id,Y.setUserInfo({userName:o.name,userAbout:o.about}),Y.setUserAvatar({userAvatar:o.avatar}),it.renderItems(i.reverse())})).catch((function(t){alert("".concat(t,". Попробуйте еще раз."))}));var X=new T({popupSelector:"#update-avatar-popup",handleFormSubmit:function(t){var e=t["update-avatar-input-url"];X.renderLoading(!0),W.updateUserAvatar(e).then((function(t){var e=t.avatar;Y.setUserAvatar({userAvatar:e}),X.close()})).catch((function(t){alert("".concat(t,". Проверьте данные и попробуйте еще раз."))})).finally((function(){X.renderLoading(!1)}))}});X.setEventListeners(),G.addEventListener("click",(function(){ut["update-avatar-form"].hideInputErrors(),ut["update-avatar-form"].disableSubmitButton(),X.open()}));var Y=new f({userNameSelector:".profile__info-name",userAboutSelector:".profile__info-about",userAvatarSelector:".profile__avatar"}),Z=new T({popupSelector:"#edit-profile-popup",handleFormSubmit:function(t){var e=t["edit-profile-input-username"],n=t["edit-profile-input-userabout"];Z.renderLoading(!0),W.setUserInfo({userName:e,userAbout:n}).then((function(t){var e=t.name,n=t.about;Y.setUserInfo({userName:e,userAbout:n}),Z.close()})).catch((function(t){alert("".concat(t,". Проверьте данные и попробуйте еще раз."))})).finally((function(){Z.renderLoading(!1)}))}});Z.setEventListeners(),z.addEventListener("click",(function(){var t=Y.getUserInfo(),e=t.userName,n=t.userAbout;Z.setInputValues({"edit-profile-input-username":e,"edit-profile-input-userabout":n}),ut["edit-profile-form"].hideInputErrors(),ut["edit-profile-form"].disableSubmitButton(),Z.open()}));var tt=new T({popupSelector:"#add-place-popup",handleFormSubmit:function(t){var e=t["add-place-input-title"],n=t["add-place-input-photourl"];tt.renderLoading(!0),W.addNewCard({name:e,link:n}).then((function(t){it.addItem(rt(t,J)),tt.close()})).catch((function(t){alert("".concat(t,". Проверьте данные и попробуйте еще раз."))})).finally((function(){tt.renderLoading(!1)}))}});tt.setEventListeners(),$.addEventListener("click",(function(){ut["add-place-form"].hideInputErrors(),ut["add-place-form"].disableSubmitButton(),tt.open()}));var et=new L(".popup_type_image");et.setEventListeners();var nt=new N({popupSelector:"#delete-place-popup"});function rt(t,e){var n=new h(t,"#place-template",e,{handleCardClick:function(){et.open({name:t.name,link:t.link})},handleCardDelete:function(t){nt.open(),nt.setSubmitAction((function(){nt.renderLoading(!0,"Удаление..."),W.deleteCard(t).then((function(){n.deleteCard(),nt.close()})).catch((function(t){alert("".concat(t,". Попробуйте еще раз."))})).finally((function(){nt.renderLoading(!1,"")}))}))},handlePutLike:function(t){W.putLike(t).then((function(t){n.getLikes(t)})).catch((function(t){alert("".concat(t,". Попробуйте еще раз."))}))},handleDeleteLike:function(t){W.deleteLike(t).then((function(t){n.getLikes(t)})).catch((function(t){alert("".concat(t,". Попробуйте еще раз."))}))}});return n.generateCard()}nt.setEventListeners();var ot,it=new i({renderer:function(t){it.addItem(rt(t,J))}},".gallery__places"),ut={};ot={formSelector:".popup__form",inputSelector:".popup__form-input",submitButtonSelector:".popup__form-submit-btn",inactiveButtonClass:"popup__form-submit-btn_disabled",inputErrorClass:"popup__form-input_type_error",errorClass:"popup__form-input-error_visible"},Array.from(document.querySelectorAll(ot.formSelector)).forEach((function(t){var e=new M(ot,t),n=t.getAttribute("name");ut[n]=e,e.enableValidation()}))})();