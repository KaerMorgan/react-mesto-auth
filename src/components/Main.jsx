import React from "react";
import buttonAdd from "../images/button_add.svg";
import buttonEdit from "../images/button_edit.svg";
import avatarMask from "../images/avatar-mask.png";
import defaultAvatar from "../images/profile__avatar.png";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onEditAvatar,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className='main'>
      <section className='profile'>
        <div className='profile__avatar-container' onClick={onEditAvatar}>
          <img src={currentUser.avatar || defaultAvatar} alt='Аватар' className='profile__avatar' />
          <div className='profile__avatar-mask'>
            <img src={avatarMask} alt='Маска' />
          </div>
        </div>
        <div className='profile__info'>
          <h1 className='profile__name' id='profile__name'>
            {currentUser.name}
          </h1>
          <p className='profile__about' id='profile__about'>
            {currentUser.about}
          </p>
          <button type='button' className='profile__edit-button' onClick={onEditProfile}>
            <img className='profile__edit-image' src={buttonEdit} alt='Редактировать' />
          </button>
        </div>
        <button type='button' className='profile__add-button' onClick={onAddPlace}>
          <img className='profile__add-button-icon' src={buttonAdd} alt='Добавить' />
        </button>
      </section>
      <section className='elements'>
        <ul className='elements__grid'>
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardDelete={onCardDelete}
              onCardLike={onCardLike}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
