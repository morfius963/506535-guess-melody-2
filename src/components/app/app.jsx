import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer.js";
import WelcomeScreen from "../welcome-screen/welcome-scren.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import propTypes from "./prop-types.js";

class App extends PureComponent {
  render() {
    const {questions, questionStep} = this.props;
    return this._getScreen(questions[questionStep]);
  }

  _getScreen(question) {
    if (!question) {
      const {time, maxMistakes, onWelcomeScreenClick} = this.props;

      return <WelcomeScreen
        gameTime = {time}
        errorCount = {maxMistakes}
        onButtonClick = {onWelcomeScreenClick}
      />;
    }

    const {onUserAnswer, mistakes, maxMistakes, questions} = this.props;
    const currentQuestionIndex = questions.indexOf(question);
    const maxQuestionIndex = questions.length;

    switch (question.type) {
      case `genre`:
        return <GenreQuestionScreen
          questions = {question}
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
        return <ArtistQuestionScreen
          questions = {question}
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
  onUserAnswer: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  questionStep: state.questionStep,
  mistakes: state.mistakes
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes, currentQuestionIndex, maxQuestionIndex) => {
    dispatch(ActionCreator.incrementStep(currentQuestionIndex, maxQuestionIndex));
    dispatch(ActionCreator.incrementMistake(userAnswer, question, mistakes, maxMistakes));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
