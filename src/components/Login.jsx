import React from "react";

const Login = ({
  onSubmit,
  email,
  password,
  onEmailChange,
  onPasswordChange,
}) => {
  return (
    // многовато отличий чтобы перенести компонент Form
    <form className="auth-form" name="register" onSubmit={onSubmit}>
      <div className="auth-form__input-group">
        <h2 className="auth-form__title">Войти</h2>
        <input
          className="auth-form__input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
        />
        <input
          className="auth-form__input"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <div className="auth-form__button-group">
        <button className="auth-form__button" type="submit">
          Войти
        </button>
      </div>
    </form>
  );
};

export default Login;
