import React, {useCallback} from "react";
import PropTypes from "prop-types";

import propTypes from "./prop-types.js";
import GenreAnswer from "../genre-answer/genre-answer.jsx";

const GenreQuestionScreen = (props) => {
  const {questions, onAnswer, screenIndex, renderPlayer, onChange, userAnswer, resetUserAnswer, resetActivePlayerValue} = props;
  const {answers, genre} = questions;

  const formSubmitHandler = useCallback(
      (evt) => {
        evt.preventDefault();
        onAnswer(userAnswer);
        resetUserAnswer();
        resetActivePlayerValue();
      },
      [onAnswer, resetUserAnswer, resetActivePlayerValue]
  );

  return <section className="game__screen">
    <h2 className="game__title">Выберите {genre} треки</h2>
    <form className="game__tracks" onSubmit={formSubmitHandler}>
      {
        answers.map((answer, i) =>
          <GenreAnswer
            key={`${screenIndex}-answer-${i}`}
            answer={answer}
            id={i}
            checkboxChangeHandler={onChange}
          >
            {renderPlayer(answer, i)}
          </GenreAnswer>)
      }
      <button className="game__submit button" type="submit">Ответить</button>
    </form>
  </section>;
};

GenreQuestionScreen.propTypes = {
  questions: propTypes.questions,
  onAnswer: PropTypes.func.isRequired,
  screenIndex: PropTypes.number.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  userAnswer: PropTypes.arrayOf(PropTypes.bool).isRequired,
  resetUserAnswer: PropTypes.func.isRequired,
  resetActivePlayerValue: PropTypes.func.isRequired
};

export default GenreQuestionScreen;
