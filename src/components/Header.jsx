import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../images/header__logo.svg";

function Header({ isLoggedIn, mail, onExit }) {
  return (
    <header className="header">
      <img src={headerLogo} alt="Место" className="header__logo" />
      <div className="header__auth-group">
        {isLoggedIn ? (
          <>
            <p>{mail}</p>
            <Link className="page__link" to="/sign-in" onClick={onExit}>
              Выйти
            </Link>
          </>
        ) : window.location.href.includes("sign-in") ? (
          <Link className="page__link" to="/sign-up">
            Зарегистрироваться
          </Link>
        ) : (
          <Link className="page__link" to="/sign-in">
            Войти
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
