import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import propTypes from "./prop-types.js";
import {makeAnswers} from "../../utils.js";
import GenreAnswer from "../genre-answer/genre-answer.jsx";
import AudioPlayer from "../audio-player/audio-player.jsx";

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userAnswer: makeAnswers(props.questions.answers),
      activeAudioPlayer: -1
    };
    this._bindedCheckboxChangeHandler = this._checkboxChangeHandler.bind(this);
  }

  render() {
    const {questions, onAnswer, screenIndex} = this.props;
    const {answers, genre} = questions;

    return <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={(evt) => {
        evt.preventDefault();
        onAnswer(this.state.userAnswer);
        this.setState({
          userAnswer: makeAnswers(answers),
          activeAudioPlayer: -1
        });
      }}>
        {answers.map((answer, i) =>
          <GenreAnswer
            key={`${screenIndex}-answer-${i}`}
            answer={answer}
            id={i}
            checkboxChangeHandler={this._bindedCheckboxChangeHandler}
          >
            <AudioPlayer
              src={answer.src}
              isPlaying={this.state.activeAudioPlayer === i}
              onPlayButtonClick={() => this.setState({
                activeAudioPlayer: this.state.activeAudioPlayer === i ? -1 : i
              })}
            />
          </GenreAnswer>)}
        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>;
  }

  _checkboxChangeHandler(evt) {
    const isChecked = evt.target.checked;
    const value = evt.target.value.split(`-`).reverse()[0];

    this.setState((prevState) => {
      prevState.userAnswer[value] = isChecked;
    });
  }
}

GenreQuestionScreen.propTypes = {
  questions: propTypes.questions,
  onAnswer: PropTypes.func.isRequired,
  screenIndex: PropTypes.number.isRequired
};

export default GenreQuestionScreen;
