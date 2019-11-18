import React from "react";
import {useHistory} from "react-router-dom";
import propTypes from "./prop-types.js";

const GameResultLose = ({result, restartGame}) => {
  const loseReason = result.split(`-`)[1];
  const loseMessage = loseReason === `mistakes`
    ? `У вас закончились все попытки. Ничего, повезёт в следующий раз!`
    : `Время вышло! Вы не успели отгадать все мелодии`;

  const history = useHistory();

  const gameRestartHandler = () => {
    restartGame();
    history.push(`/`);
  };

  return (
    <section className="result">
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">{loseMessage}</p>
      <button className="replay" type="button" onClick={gameRestartHandler}>Попробовать ещё раз</button>
    </section>
  );
};

GameResultLose.propTypes = propTypes;

export default GameResultLose;
