import * as React from "react";
import {Props} from "./interface";

const ArtistAnswer = ({answer, id}: Props) => {
  return (
    <div className="artist">
      <input className="artist__input visually-hidden" type="radio" name="answer" value={answer.artist} id={`answer-${id}`} />
      <label className="artist__name" htmlFor={`answer-${id}`}>
        <img className="artist__picture" src={answer.picture} alt={answer.artist} />
        {answer.artist}
      </label>
    </div>
  );
};

export default ArtistAnswer;
