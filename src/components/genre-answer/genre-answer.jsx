import React from "react";
import thisPropTypes from "./prop-types.js";

const GenreAnswer = ({answer, id, checkboxChangeHandler}) => {
  return <div className="track">
    <button className="track__button track__button--play" type="button"></button>
    <div className="track__status">
      <audio></audio>
    </div>
    <div className="game__answer">
      <input
        className="game__input visually-hidden"
        type="checkbox" name="answer"
        value={answer.genre}
        id={`answer-${id}`}
        onChange={checkboxChangeHandler}
      />
      <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
    </div>
  </div>;
};

GenreAnswer.propTypes = thisPropTypes;

export default GenreAnswer;
