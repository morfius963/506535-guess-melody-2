import React from "react";
import propTypes from "./prop-types.js";

const GameMistakes = ({mistakes}) => {
  return <div className="game__mistakes">
    {new Array(mistakes).fill(``).map(() =>
      <div key={Math.random() + mistakes} className="wrong"></div>
    )}
  </div>;
};

GameMistakes.propTypes = propTypes;

export default GameMistakes;
