import * as React from "react";
import * as ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import {compose} from "recompose";
import {Router} from "react-router-dom";

import App from "./components/app/app";
import game from "./store/reducers/game/game";
import appData from "./store/reducers/app-data/app-data";
import user from "./store/reducers/user/user";
import createAPI from "./api";
import history from "./history";

declare const __REDUX_DEVTOOLS_EXTENSION__: () => any;

const settings = {
  gameTime: 5,
  errorCount: 3
};

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
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  ReactDOM.render(
      <Provider store={store} >
        <Router history={history}>
          <App
            timeForGame={gameTime}
            maxMistakes={errorCount}
          />
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
