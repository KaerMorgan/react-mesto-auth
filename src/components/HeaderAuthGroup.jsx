import React from "react";
import { Link } from "react-router-dom";

const HeaderAuthGroup = ({ isLoggedIn, email, onExit, width }) => {
  return (
    <div
      className={
        width <= 580
          ? "header__auth-group header__burger-menu"
          : "header__auth-group"
      }
    >
      {isLoggedIn ? (
        <>
          <p className="header__mail">{email}</p>
          <Link className="page__link" to="/sign-in" onClick={onExit}>
            Выйти
          </Link>
        </>
      ) : window.location.href.includes("sign-in") ? (
        <Link
          className="page__link page__link_type_login"
          style={{ alignSelf: "flex-end" }}
          to="/sign-up"
        >
          Регистрация
        </Link>
      ) : (
        <Link
          className="page__link page__link_type_login"
          style={{ alignSelf: "flex-end" }}
          to="/sign-in"
        >
          Войти
        </Link>
      )}
    </div>
  );
};

export default HeaderAuthGroup;
