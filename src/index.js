import React from "react";
import ReactDOM from "react-dom";
import WelcomeScreen from "./components/welcome-scren.jsx";

const init = () => {
  ReactDOM.render(
      <WelcomeScreen />,
      document.querySelector(`#root`)
  );
};

init();
