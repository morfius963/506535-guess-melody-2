import React from "react";
import {Link} from "react-router-dom";
import propTypes from "./prop-types.js";

const GAME_TIME = 300000;

const GameResultSuccess = ({time, mistakes, points, quickAnswerCount, restartGame}) => {
  const timeUsage = GAME_TIME - time;
  const minutes = parseInt(timeUsage / 1000 / 60, 10);
  const seconds = parseInt(timeUsage / 1000 % 60, 10);
  const formattedMinutes = `${minutes}`.padStart(2, `0`);
  const formattedSeconds = `${seconds}`.padStart(2, `0`);
  const formattedTime = `${formattedMinutes}:${formattedSeconds}`;

  return (
    <section className="result">
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width={186} height={83} /></div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы играли {formattedTime} и набрали {points} баллов ({quickAnswerCount} быстрых ответов), совершив {mistakes} ошибки</p>
      <Link to="/" className="replay" onClick={restartGame}>Сыграть ещё раз</Link>
    </section>
  );
};

GameResultSuccess.propTypes = propTypes;

export default GameResultSuccess;
