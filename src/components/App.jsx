import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import Register from "./Register";
import Login from "./Login";

import { api } from "../utils/Api";
import { auth } from "../utils/Auth";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import InfoTooltip from "./InfoTooltip";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const token = localStorage.getItem("token");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [cards, setCards] = React.useState([]);

  const [selectedCard, setSelectedCard] = React.useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const history = useHistory();

  React.useEffect(() => {
    if (token) {
      Promise.all([api.getUserInfo(), api.getCardList()])
        .then(([userData, cardData]) => {
          setEmail(userData.email);
          setCurrentUser(userData);
          setCards(cardData);
          setIsLoggedIn(true);
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn, token]);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsInfoTooltipOpen(false);
    setSelectedCard({});
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((id) => id === currentUser._id);
    api
      .handleCardLike(card._id, !isLiked)
      .then((newCard) => {
        setCards((prevState) => prevState.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then((res) => {
        setCards((prevState) => prevState.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateUser(userData) {
    api
      .changeUserInfo(userData)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(link) {
    api
      .changeAvatar(link)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(newCard) {
    api
      .addCard(newCard)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();
    auth
      .register(password, email)
      .then((res) => {
        if (res) {
          setEmail("");
          setPassword("");
          history.push("/login");
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsInfoTooltipOpen(true);
      });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    auth
      .login(password, email)
      .then((data) => {
        setPassword("");
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        history.push("/");
        setIsInfoTooltipOpen(true);
      })
      .catch((err) => {
        setSuccess(false);
        setIsInfoTooltipOpen(true);
        console.log(err);
      });
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    history.push("/sign-in");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header isLoggedIn={isLoggedIn} onExit={handleLogout} email={email} />
      <Switch>
        <Route path='/sign-in'>
          {isLoggedIn ? (
            <Redirect to='/' />
          ) : (
            <Login
              onSubmit={handleLoginSubmit}
              email={email}
              password={password}
              onEmailChange={handleEmailChange}
              onPasswordChange={handlePasswordChange}
            />
          )}
        </Route>

        <Route path='/sign-up'>
          {isLoggedIn ? (
            <Redirect to='/' />
          ) : (
            <Register
              onSubmit={handleRegisterSubmit}
              email={email}
              password={password}
              onEmailChange={handleEmailChange}
              onPasswordChange={handlePasswordChange}
            />
          )}
        </Route>

        <ProtectedRoute
          path='/'
          isLoggedIn={isLoggedIn}
          component={Main}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <Route path='*'>{isLoggedIn ? <Redirect to='/' /> : <Redirect to='/sign-in' />}</Route>
      </Switch>

      {/* Предотвращение отправок формы неавторизованными пользователями */}
      {isLoggedIn && (
        <>
          <Footer />
          <EditProfilePopup
            isOpened={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpened={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            isOpened={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

          <PopupWithForm name='delete' title='Вы уверены?' submitButtonText='Да' />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} photoViewClass='photo-view' />
        </>
      )}
      {!isLoggedIn && (
        <InfoTooltip success={success} isOpened={isInfoTooltipOpen} onClose={closeAllPopups} />
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
