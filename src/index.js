import React from "react";
import ReactDOM from "react-dom";
import WelcomeScreen from "./components/welcome-screen/welcome-scren.jsx";

const MockData = {
  GAME_TIME: 8,
  ERROR_COUNT: 4
};

const init = () => {
  ReactDOM.render(
      <WelcomeScreen
        time = {MockData.GAME_TIME}
        errorCount = {MockData.ERROR_COUNT}
      />,
      document.querySelector(`#root`)
  );
};

init();
