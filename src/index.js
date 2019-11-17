import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import {compose} from "recompose";
import thunk from 'redux-thunk';

import App from "./components/app/app.jsx";
import game from "./store/reducers/game/game.js";
import appData from "./store/reducers/app-data/app-data.js";
import user from "./store/reducers/user/user.js";
import createAPI from "./api.js";

const settings = {
  gameTime: 5,
  errorCount: 3
};

const init = () => {
  const {errorCount, gameTime} = settings;

  const api = createAPI((...args) => store.dispatch(...args));
  const reducer = combineReducers({
    game,
    appData,
    user
  });
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  ReactDOM.render(
      <Provider store={store} >
        <App
          timeForGame={gameTime}
          maxMistakes={errorCount}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
