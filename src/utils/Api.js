class Api {
  constructor(config) {
    this._url = config.url;
  }

  _checkErorr(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка" + res.status);
  }

  // GET
  getCardList() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: { "Content-Type": "application/json", authorization: this._getToken() },
    }).then(this._checkErorr);
  }

  // POST
  addCard(cardData) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: { "Content-Type": "application/json", authorization: this._getToken() },
      body: JSON.stringify(cardData),
    }).then(this._checkErorr);
  }

  // DELETE cards/cardId
  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", authorization: this._getToken() },
    }).then(this._checkErorr);
  }

  // GET
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: { "Content-Type": "application/json", authorization: this._getToken() },
    }).then(this._checkErorr);
  }

  // PATCH
  changeUserInfo(userData) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", authorization: this._getToken() },
      body: JSON.stringify(userData),
    }).then(this._checkErorr);
  }

  // PATCH
  changeAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", authorization: this._getToken() },
      body: JSON.stringify(avatar),
    }).then(this._checkErorr);
  }

  // universal function for like\delete like from card
  handleCardLike(id, method) {
    if (method) {
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", authorization: this._getToken() },
      }).then(this._checkErorr);
    } else {
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", authorization: this._getToken() },
      }).then(this._checkErorr);
    }
  }

  _getToken() {
    return `Bearer ${localStorage.getItem("token")}`;
  }
}
export const api = new Api({
  url: "http://api.morgankatarn.nomoredomains.sbs",
});
