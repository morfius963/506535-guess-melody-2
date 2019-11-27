import * as React from "react";
import {Props} from "./interface";

const GameMistakes = ({mistakes}: Props) => {
  return (
    <div className="game__mistakes">
      {new Array(mistakes).fill(``).map((elem, i) =>
        <div key={`${mistakes}-${i}`} className="wrong"></div>
      )}
    </div>
  );
};

export default GameMistakes;
