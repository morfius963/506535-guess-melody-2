import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/reducer.js";
import WelcomeScreen from "../welcome-screen/welcome-scren.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import GameHeader from "../game-header/game-header.jsx";
import propTypes from "./prop-types.js";
import withActivePlayer from "../../hocs/with-active-player/with-active-player.jsx";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer.jsx";

const GenreQuestionScreenWrapped = withUserAnswer(withActivePlayer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

class App extends PureComponent {
  render() {
    const {questions, questionStep, mistakes, time, onTimeUpdate, onTimeEnd, registrateTimer} = this.props;
    const currentQuestion = questions[questionStep];

    return <section className="game">

      {currentQuestion && <GameHeader mistakes={mistakes} gameTime={time} registrateTimer={registrateTimer} onTimeUpdate={onTimeUpdate} onTimeEnd={onTimeEnd} />}

      {this._getScreen(currentQuestion)}

    </section>;
  }

  _getScreen(question) {
    if (!question) {
      const {time, maxMistakes, onWelcomeScreenClick} = this.props;
      const timeInMin = time / 60 / 1000;

      return <WelcomeScreen
        gameTime = {timeInMin}
        errorCount = {maxMistakes}
        onButtonClick = {onWelcomeScreenClick}
      />;
    }

    const {onUserAnswer, mistakes, maxMistakes, questions, questionStep} = this.props;
    const currentQuestionIndex = questions.indexOf(question);
    const maxQuestionIndex = questions.length;

    switch (question.type) {
      case `genre`:
        return <GenreQuestionScreenWrapped
          questions = {question}
          screenIndex={questionStep}
          onAnswer = {(userAnswer) => onUserAnswer(
              userAnswer,
              question,
              mistakes,
              maxMistakes,
              currentQuestionIndex,
              maxQuestionIndex
          )}
        />;
      case `artist`:
        return <ArtistQuestionScreenWrapped
          questions = {question}
          screenIndex={questionStep}
          onAnswer = {(userAnswer) => onUserAnswer(
              userAnswer,
              question,
              mistakes,
              maxMistakes,
              currentQuestionIndex,
              maxQuestionIndex
          )}
        />;
    }

    return null;
  }
}

App.propTypes = {
  time: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(propTypes.question).isRequired,
  questionStep: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onTimeEnd: PropTypes.func.isRequired,
  registrateTimer: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  questionStep: state.questionStep,
  mistakes: state.mistakes,
  time: state.time
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes, currentQuestionIndex, maxQuestionIndex) => {
    dispatch(ActionCreator.incrementStep(currentQuestionIndex, maxQuestionIndex));
    dispatch(ActionCreator.incrementMistake(userAnswer, question, mistakes, maxMistakes));
  },

  onTimeUpdate: () => dispatch(ActionCreator.decrementTime()),

  onTimeEnd: () => dispatch(ActionCreator.resetGame()),

  registrateTimer: (id) => dispatch(ActionCreator.registrateTimer(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
