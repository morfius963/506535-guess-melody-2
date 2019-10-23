import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-scren.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GerneQuestionScreen from "../gerne-question-screen/gerne-question-screen.jsx";

class App extends React.PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {time, errorCount} = props;

      return <WelcomeScreen
        gameTime = {time}
        errorCount = {errorCount}
        onButtonClick = {onUserAnswer}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`:
        return <GerneQuestionScreen
          questions = {currentQuestion}
          screenIndex = {question}
          onAnswer = {onUserAnswer}
        />;
      case `artist`:
        return <ArtistQuestionScreen
          questions = {currentQuestion}
          screenIndex = {question}
          onAnswer = {onUserAnswer}
        />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      currentQuestionIndex: -1,
      answers: {}
    };

    this._bindedUserAnswerHandler = this._userAnswerHandler.bind(this);
  }

  render() {
    const {currentQuestionIndex} = this.state;
    return App.getScreen(currentQuestionIndex, this.props, this._bindedUserAnswerHandler);
  }

  _userAnswerHandler(userValue = null) {
    const {questions} = this.props;

    this.setState((prevState) => {
      const nextIndex = prevState.currentQuestionIndex + 1;
      const isEnd = nextIndex >= questions.length;

      return {
        currentQuestionIndex: isEnd ? -1 : nextIndex,
        answers: nextIndex <= 0
          ? {}
          : Object.assign(
              {},
              prevState.answers,
              {
                [`question${nextIndex}`]: userValue
              }
          )
      };
    });
  }
}

App.propTypes = {
  time: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
