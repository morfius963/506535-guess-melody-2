import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import {compose} from "recompose";
import thunk from 'redux-thunk';
import {BrowserRouter} from "react-router-dom";

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

  const api = createAPI();
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
        <BrowserRouter>
          <App
            timeForGame={gameTime}
            maxMistakes={errorCount}
          />
        </BrowserRouter>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
