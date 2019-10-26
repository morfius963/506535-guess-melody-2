import React, {PureComponent} from "react";
import thisPropTypes from "./prop-types.js";

const makeAnswers = (obj) => obj.reduce((acc, {genre}) => {
  return Object.assign(
      {},
      acc,
      {
        [genre]: 0
      }
  );
}, {});

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = makeAnswers(props.questions.answers);
    this._bindedSetUserAnswer = this._setUserAnswer.bind(this);
  }

  render() {
    const {questions, screenIndex, onAnswer} = this.props;
    const {answers, genre} = questions;

    return <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={(evt) => {
          evt.preventDefault();
          onAnswer(this.state);
          this.setState(() => makeAnswers(answers));
        }}>
          {answers.map((answer, i) => <div key={`${screenIndex}-answer-${i}`} className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
            <div className="game__answer">
              <input
                className="game__input visually-hidden"
                type="checkbox" name="answer"
                value={answer.genre}
                id={`answer-${i}`}
                onChange={this._bindedSetUserAnswer}
              />
              <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
            </div>
          </div>)}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>;
  }

  _setUserAnswer(evt) {
    const isChecked = evt.target.checked;
    const value = evt.target.value;

    this.setState((prevState) => {
      if (isChecked) {
        prevState[value] = prevState[value] + 1;
      } else {
        prevState[value] = prevState[value] - 1;
      }
    });
  }
}

GenreQuestionScreen.propTypes = thisPropTypes;

export default GenreQuestionScreen;
