import * as React from "react";
import {Props} from "./interface";

const GenreAnswer = ({answer, id, checkboxChangeHandler, children}: Props) => {
  return (
    <div className="track">

      {children}

      <div className="game__answer">
        <input
          className="game__input visually-hidden"
          type="checkbox" name="answer"
          value={`${answer.genre}-${id}`}
          id={`answer-${id}`}
          onChange={checkboxChangeHandler}
        />
        <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
      </div>
    </div>
  );
};

export default GenreAnswer;
