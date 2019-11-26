import React from "react";
import PropTypes from "prop-types";

import propTypes from "./prop-types.js";
import GenreAnswer from "../genre-answer/genre-answer.jsx";

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this._startTime = null;

    this._formSubmitHandler = this._formSubmitHandler.bind(this);
  }

  componentDidUpdate() {
    if (this._startTime !== null) {
      return;
    }

    this._startTime = performance.now();
  }

  render() {
    const {screenIndex, renderPlayer, onChange, questions} = this.props;
    const {answers, genre} = questions;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={this._formSubmitHandler}>
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
      </section>
    );
  }

  _formSubmitHandler(evt) {
    const {onAnswer, userAnswer, resetUserAnswer, resetActivePlayerValue} = this.props;
    const answerTime = performance.now() - this._startTime;

    evt.preventDefault();

    onAnswer(userAnswer, answerTime);
    resetUserAnswer();
    resetActivePlayerValue();
    this._startTime = null;
  }
}

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
