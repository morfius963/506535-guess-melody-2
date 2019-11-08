import React from 'react';
import {makeAnswers} from "../../utils.js";

const withUserAnswer = (Component) => {
  class WithUserAnswer extends React.PureComponent {
    constructor(props) {
      super(props);

      this._ANSWERS_COUNT = 4;

      this.state = {
        userAnswer: makeAnswers(this._ANSWERS_COUNT)
      };

      this._bindedCheckboxChangeHandler = this._checkboxChangeHandler.bind(this);
      this._bindedSetDefaultStateValue = this._setDefaultStateValue.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        onChange={this._bindedCheckboxChangeHandler}
        resetUserAnswer={this._bindedSetDefaultStateValue}
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
