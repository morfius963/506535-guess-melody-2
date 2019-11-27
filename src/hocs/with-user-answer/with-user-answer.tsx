import * as React from 'react';
import {makeAnswers} from "../../utils.js";
import {QuestionGenre} from "../../types";

interface Props {
  questions: QuestionGenre,
  screenIndex: number,
  onAnswer: (userAnswer: boolean[], answerTime: number) => void,
}

interface State {
  userAnswer: boolean[]
}

const withUserAnswer = (Component) => {
  class WithUserAnswer extends React.PureComponent<Props, State> {
    _ANSWERS_COUNT: number;

    constructor(props) {
      super(props);

      this._ANSWERS_COUNT = 4;

      this.state = {
        userAnswer: makeAnswers(this._ANSWERS_COUNT)
      };

      this._checkboxChangeHandler = this._checkboxChangeHandler.bind(this);
      this._setDefaultStateValue = this._setDefaultStateValue.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        onChange={this._checkboxChangeHandler}
        resetUserAnswer={this._setDefaultStateValue}
        userAnswer={this.state.userAnswer}
      />;
    }

    _checkboxChangeHandler(evt) {
      const isChecked = evt.target.checked;
      const value = evt.target.value.split(`-`).reverse()[0];

      this.setState((prevState) => {
        prevState.userAnswer[value] = isChecked;
      });
    }

    _setDefaultStateValue() {
      this.setState({userAnswer: makeAnswers(this._ANSWERS_COUNT)});
    }

  }

  return WithUserAnswer;
};

export default withUserAnswer;
