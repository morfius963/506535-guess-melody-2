import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import propTypes from "./prop-types.js";
import {makeAnswers} from "../../utils.js";
import GameHeader from "../game-header/game-header.jsx";
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
    const {questions, screenIndex, onAnswer} = this.props;
    const {answers, genre} = questions;

    return <section className="game game--genre">

      <GameHeader />

      <section className="game__screen">
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
      </section>
    </section>;
  }

  _checkboxChangeHandler(evt) {
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

GenreQuestionScreen.propTypes = {
  questions: propTypes.questions,
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
