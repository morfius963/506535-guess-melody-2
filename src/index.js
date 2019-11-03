import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";
import {settings, questions} from "./__fixtures__/questions.js";
import {reducer} from "./reducer/reducer.js";

const init = (gameQuestions) => {
  const {errorCount} = settings;
  const store = createStore(reducer);

  ReactDOM.render(
      <Provider store={store} >
        <App
          maxMistakes = {errorCount}
          questions = {gameQuestions}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(questions);
