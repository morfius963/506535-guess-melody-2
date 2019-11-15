import React from "react";
import propTypes from "./prop-types.js";

const AuthorizationScreen = ({formSubmitHandler, userInputHandler}) => {
  return (
    <section className="login">
      <div className="login__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
      <h2 className="login__title">Необходима авторизация</h2>
      <p className="login__text">Представтесь!</p>
      <form className="login__form" action="" onSubmit={formSubmitHandler}>
        <p className="login__field">
          <label className="login__label" htmlFor="email">Логин</label>
          <input className="login__input" type="text" name="email" id="email" onChange={userInputHandler} required/>
        </p>
        <p className="login__field">
          <label className="login__label" htmlFor="password">Пароль</label>
          <input className="login__input" type="password" name="password" id="password" onChange={userInputHandler} required />
          <span className="login__error">Неверный пароль</span>
        </p>
        <button className="login__button button" type="submit" style={{zIndex: `1`}}>Войти</button>
      </form>
    </section>
  );
};

AuthorizationScreen.propTypes = propTypes;

export default AuthorizationScreen;
