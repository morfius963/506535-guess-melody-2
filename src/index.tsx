import * as React from "react";
import * as ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import Operation from "./store/actions/async-actions.js";
import App from "./components/app/app";
import withScreenSwitch from "./hocs/with-screen-switch/with-screen-switch";
import game from "./store/reducers/game/game";
import appData from "./store/reducers/app-data/app-data";
import user from "./store/reducers/user/user";
import createAPI from "./api";
import history from "./history";

const settings = {
  gameTime: 5,
  errorCount: 3
};

const AppWrapped = withScreenSwitch(App);

const init = () => {
  const {errorCount, gameTime} = settings;

  const api = createAPI(() => history.push(`/login`));
  const reducer = combineReducers({
    game,
    appData,
    user
  });
  const store = createStore(
      reducer,
      applyMiddleware(thunk.withExtraArgument(api))
  );

  store.dispatch(Operation.loadQuestions());

  ReactDOM.render(
      <Provider store={store} >
        <Router history={history}>
          <AppWrapped
            timeForGame={gameTime}
            maxMistakes={errorCount}
          />
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();