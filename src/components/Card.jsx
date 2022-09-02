import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some((id) => id === currentUser._id);
  function handleClick() {
    onCardClick(card);
  }
  function handleLike() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className='element'>
      <img src={card.link} alt='Фото места' className='element__photo' onClick={handleClick} />
      <div className='element__group'>
        <h2 className='element__caption'>{card.name}</h2>
        <div className='element__like-group'>
          <button
            type='button'
            className={isLiked ? "element__like element__like_pressed" : "element__like"}
            onClick={handleLike}
            aria-label='Мне нравится'
          ></button>
          <p className='element__like-counter'>{card.likes.length}</p>
        </div>
      </div>
      {isOwn && (
        <button
          type='button'
          aria-label='Удалить'
          className='element__delete'
          onClick={handleDeleteClick}
        ></button>
      )}
    </li>
  );
};

export default Card;
