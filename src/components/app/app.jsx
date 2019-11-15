import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import ActionCreator from "../../store/actions/action-creator.js";
import Operation from "../../store/actions/async-actions";
import WelcomeScreen from "../welcome-screen/welcome-scren.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import GameHeader from "../game-header/game-header.jsx";
import AuthorizationScreen from "../authorization-screen/authorization-screen.jsx";
import propTypes from "./prop-types.js";
import withActivePlayer from "../../hocs/with-active-player/with-active-player.jsx";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer.jsx";
import withAuthorizationScreen from "../../hocs/with-authorization-screen/with-authorization-screen.jsx";

const GenreQuestionScreenWrapped = withUserAnswer(withActivePlayer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);
const AuthorizationScreenWrapped = withAuthorizationScreen(AuthorizationScreen);

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.props.loadQuestions();
  }

  render() {
    const {questions, questionStep, mistakes, time, onTimeUpdate, onTimeEnd, registrateTimer, isLoading, isAuthorizationRequired, resetGame} = this.props;
    const currentQuestion = questions[questionStep];

    return (
      isLoading
        ? null
        : <section className="game">

          {currentQuestion && isAuthorizationRequired && <GameHeader
            mistakes={mistakes}
            gameTime={time}
            registrateTimer={registrateTimer}
            onTimeUpdate={onTimeUpdate}
            onTimeEnd={onTimeEnd}
            resetGame={resetGame}
          />}

          {this._getScreen(currentQuestion)}

        </section>
    );
  }

  _getScreen(question) {
    if (!question) {
      const {timeForGame, maxMistakes, onWelcomeScreenClick} = this.props;

      return <WelcomeScreen
        gameTime = {timeForGame}
        errorCount = {maxMistakes}
        onButtonClick = {onWelcomeScreenClick}
      />;
    }

    const {onUserAnswer, mistakes, maxMistakes, questions, questionStep, isAuthorizationRequired, requireAuthorization} = this.props;
    const currentQuestionIndex = questions.indexOf(question);
    const maxQuestionIndex = questions.length;

    if (!isAuthorizationRequired) {
      return (
        <AuthorizationScreenWrapped
          onSubmit={requireAuthorization}
        />
      );
    }

    switch (question.type) {
      case `genre`:
        return (
          <GenreQuestionScreenWrapped
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
          />
        );
      case `artist`:
        return (
          <ArtistQuestionScreenWrapped
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
          />
        );
    }

    return null;
  }
}

App.propTypes = {
  time: PropTypes.number.isRequired,
  timeForGame: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(propTypes.question).isRequired,
  questionStep: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onTimeEnd: PropTypes.func.isRequired,
  registrateTimer: PropTypes.func.isRequired,
  loadQuestions: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  requireAuthorization: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  questionStep: state.game.questionStep,
  mistakes: state.game.mistakes,
  time: state.game.time,
  questions: state.appData.questions,
  isLoading: state.appData.isLoading,
  isAuthorizationRequired: state.user.isAuthorizationRequired
});

const mapDispatchToProps = {
  loadQuestions: () => Operation.loadQuestions(),

  onWelcomeScreenClick: () => ActionCreator.incrementStep(),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes, currentQuestionIndex, maxQuestionIndex) => (
    ActionCreator.incrementStep(userAnswer, question, mistakes, maxMistakes, currentQuestionIndex, maxQuestionIndex)
  ),

  onTimeUpdate: () => ActionCreator.decrementTime(),

  onTimeEnd: () => ActionCreator.resetGame(),

  registrateTimer: (id) => ActionCreator.registrateTimer(id),

  requireAuthorization: (userData) => Operation.postUserLogin(userData),

  resetGame: () => ActionCreator.resetGame()
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
