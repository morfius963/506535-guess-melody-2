import React from "react";
import ReactDOM from "react-dom";
import WelcomeScreen from "./components/welcome-screen/welcome-scren.jsx";
import fixtureData from "./__fixtures__/data.js";

const init = () => {
  ReactDOM.render(
      <WelcomeScreen
        time = {fixtureData.gameTime}
        errorCount = {fixtureData.errorCount}
      />,
      document.querySelector(`#root`)
  );
};

init();
