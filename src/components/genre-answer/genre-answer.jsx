import React from "react";
import PropTypes from "prop-types";
import propTypes from "./prop-types.js";

const GenreAnswer = ({answer, id, checkboxChangeHandler, children}) => {
  return <div className="track">

    {children}

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

GenreAnswer.propTypes = {
  answer: propTypes.answer,
  id: PropTypes.number.isRequired,
  checkboxChangeHandler: PropTypes.func.isRequired,
  children: PropTypes.element
};

export default GenreAnswer;
