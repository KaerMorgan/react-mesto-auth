import React from "react";
import { Link } from "react-router-dom";

const Register = ({ onSubmit }) => {
  return (
    <form className="auth-form" name="register" onSubmit={onSubmit}>
      <div className="auth-form__input-group">
        <h2 className="auth-form__title">Регистрация</h2>
        <input className="auth-form__input" type="email" placeholder="Email" />
        <input
          className="auth-form__input"
          type="password"
          placeholder="Пароль"
        />
      </div>
      <div className="auth-form__button-group">
        <button className="auth-form__button" type="submit">
          Зарегистрироваться
        </button>
        <p className="auth-form__subtitle">
          Уже зарегистрированы?{" "}
          <Link className="page__link" to="sign-in">
            Войти
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
