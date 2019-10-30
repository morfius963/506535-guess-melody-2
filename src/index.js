import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {settings, questions} from "./__fixtures__/questions.js";

const init = (gameQuestions) => {
  ReactDOM.render(
      <App
        time = {settings.gameTime}
        errorCount = {settings.errorCount}
        questions = {gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(questions);
