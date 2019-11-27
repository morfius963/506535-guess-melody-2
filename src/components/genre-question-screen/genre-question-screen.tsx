import * as React from "react";
import GenreAnswer from "../genre-answer/genre-answer";
import {Props} from "./interface";

class GenreQuestionScreen extends React.PureComponent<Props, null> {
  _startTime: null | number;

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

export default GenreQuestionScreen;
