import React from "react";
import { Route, Link } from "react-router-dom";

const HeaderAuthGroup = ({ email, onExit, width }) => {
  return (
    <div
      className={
        width <= 580
          ? "header__auth-group header__burger-menu"
          : "header__auth-group"
      }
    >
      {/* Гениально 👏 */}
      <Route exact path="/">
        <p className="header__mail">{email}</p>
        <button className="header__logout" onClick={onExit}>
          Выйти
        </button>
      </Route>

      <Route path="/sign-in">
        <Link
          className="page__link page__link_type_login"
          style={{ alignSelf: "flex-end" }}
          to="/sign-up"
        >
          Регистрация
        </Link>
      </Route>

      <Route path="/sign-up">
        <Link
          className="page__link page__link_type_login"
          style={{ alignSelf: "flex-end" }}
          to="/sign-in"
        >
          Войти
        </Link>
      </Route>
    </div>
  );
};

export default HeaderAuthGroup;
