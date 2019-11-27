import * as React from "react";
import {Link} from "react-router-dom";
import {Props} from "./interface";

const GameResultLose = ({result, restartGame}: Props) => {
  const loseReason = result.split(`-`)[1];
  const loseMessage = loseReason === `mistakes`
    ? `У вас закончились все попытки. Ничего, повезёт в следующий раз!`
    : `Время вышло! Вы не успели отгадать все мелодии`;

  return (
    <section className="result">
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">{loseMessage}</p>
      <Link to="/" className="replay" onClick={restartGame}>Попробовать ещё раз</Link>
    </section>
  );
};

export default GameResultLose;
