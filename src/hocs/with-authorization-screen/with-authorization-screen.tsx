import * as React from 'react';

interface Props {
  onSubmit: (
      userData: {
        email: string,
        password: string
      },
      pushPath: () => void
  ) => void,
  history: {
    push: (path: string) => void
  }
}

interface State {
  email?: string,
  password?: string
}

const withAuthorizationScreen = (Component) => {
  class WithAuthorizationScreen extends React.PureComponent<Props, State> {
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

  return WithAuthorizationScreen;
};

export default withAuthorizationScreen;
