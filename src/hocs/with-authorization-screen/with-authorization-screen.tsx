import React from 'react';
import PropTypes from "prop-types";

const withAuthorizationScreen = (Component) => {
  class WithAuthorizationScreen extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this._handleUserInput = this._handleUserInput.bind(this);
      this._formSubmitHandler = this._formSubmitHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        userInputHandler={this._handleUserInput}
        formSubmitHandler={this._formSubmitHandler}
      />;
    }

    _handleUserInput(evt) {
      const name = evt.target.name;
      const value = evt.target.value;

      this.setState({
        [name]: value
      });
    }

    _formSubmitHandler(evt) {
      const {onSubmit, history} = this.props;
      const pushPath = () => {
        history.push(`/win`);
      };

      evt.preventDefault();
      onSubmit(
          {
            email: this.state.email,
            password: this.state.password
          },
          pushPath
      );
    }
  }

  WithAuthorizationScreen.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.object
  };

  return WithAuthorizationScreen;
};

export default withAuthorizationScreen;
