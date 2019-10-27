import React from "react";
import thisPropTypes from "./prop-types.js";

const ArtistAnswer = ({answer, id}) => {
  return <div className="artist">
    <input className="artist__input visually-hidden" type="radio" name="answer" value={answer.artist} id={`answer-${id}`} />
    <label className="artist__name" htmlFor={`answer-${id}`}>
      <img className="artist__picture" src={answer.picture} alt={answer.artist} />
      {answer.artist}
    </label>
  </div>;
};

ArtistAnswer.propTypes = thisPropTypes;

export default ArtistAnswer;
