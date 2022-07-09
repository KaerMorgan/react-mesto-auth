import React from "react";
import PopupWithForm from "./PopupWithForm";
import InputWithLabel from "./InputWithLabel";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const EditProfilePopup = ({ isOpened, onClose, onUpdateUser }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpened]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      submitButtonText="Сохранить"
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <InputWithLabel
        name="name"
        id="profile__name-input"
        type="text"
        placeholder="Имя"
        value={name}
        onChange={setName}
      />
      <InputWithLabel
        name="about"
        id="profile__about-input"
        type="text"
        placeholder="Профессиональная деятельность"
        value={description}
        onChange={setDescription}
      />
    </PopupWithForm>
  );
};

export default EditProfilePopup;
