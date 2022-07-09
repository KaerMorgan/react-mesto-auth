class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkErorr(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка" + res.status);
  }

  // GET
  getCardList() {
    return fetch(`${this._url}cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkErorr);
  }

  // POST
  addCard(cardData) {
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: {
        authorization: "1eb86aa4-a0d2-4f05-8adf-01200df0c7d3",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cardData),
    }).then(this._checkErorr);
  }

  // DELETE cards/cardId
  deleteCard(id) {
    return fetch(`${this._url}cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkErorr);
  }

  // GET
  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkErorr);
  }

  // PATCH
  changeUserInfo(userData) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: {
        authorization: "1eb86aa4-a0d2-4f05-8adf-01200df0c7d3",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then(this._checkErorr);
  }

  // PATCH
  changeAvatar(avatar) {
    return fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: "1eb86aa4-a0d2-4f05-8adf-01200df0c7d3",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(avatar),
    }).then(this._checkErorr);
  }

  // universal function for like\delete like from card
  handleCardLike(id, method) {
    if (method) {
      return fetch(`${this._url}cards/${id}/likes`, {
        method: "PUT",
        headers: this._headers,
      }).then(this._checkErorr);
    } else {
      return fetch(`${this._url}cards/${id}/likes`, {
        method: "DELETE",
        headers: this._headers,
      }).then(this._checkErorr);
    }
  }

  // // PUT
  // likeCard(id) {
  //   return fetch(`${this._url}cards/${id}/likes`, {
  //     method: 'PUT',
  //     headers: this._headers
  //   }).then(this._checkErorr)
  // }

  // // DELETE
  // removeLike(id) {
  //   return fetch(`${this._url}cards/${id}/likes`, {
  //     method: 'DELETE',
  //     headers: this._headers
  //   }).then(this._checkErorr)
  // }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-41/",
  headers: {
    authorization: "1eb86aa4-a0d2-4f05-8adf-01200df0c7d3",
  },
});

export default api;
