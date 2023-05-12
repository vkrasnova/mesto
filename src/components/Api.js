export class Api {

  constructor(options) {
    this._url = options.url,
    this._headers = options.headers
  }

  _sendRequest(res) {

    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}. Попробуйте еще раз.`)

  }

  getUserInfo() {

    return fetch(`${this._url}/users/me`, {
        method: 'GET',
        headers: this._headers
    })
    .then(this._sendRequest)

  }

  getInitialPlaces() {

    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._sendRequest)

  }

  setUserInfo({ userName, userAbout }) {

    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout
      })
    })
    .then(this._sendRequest)

  }

  addNewCard(data) {

    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._sendRequest)

  }

  deleteCard(cardID) {

    return fetch(`${this._url}/cards/${cardID}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._sendRequest)

  }

  putLike(cardID) {

    return fetch(`${this._url}/cards/likes/${cardID}`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._sendRequest)

  }

  deleteLike(cardID) {

    return fetch(`${this._url}/cards/likes/${cardID}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._sendRequest)

  }

  updateUserAvatar(newUserAvatarLink) {

    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: newUserAvatarLink
      })
    })
    .then(this._sendRequest)

  }

}