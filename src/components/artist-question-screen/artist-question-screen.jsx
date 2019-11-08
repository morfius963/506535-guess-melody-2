import React, {useCallback} from "react";
import PropTypes from "prop-types";

import propTypes from "./prop-types.js";
import ArtistAnswer from "../artist-answer/artist-answer.jsx";

const ArtistQuestionScreen = ({questions, onAnswer, screenIndex, renderPlayer, resetActivePlayerValue}) => {
  const {answers, song} = questions;

  const formChangeHandler = useCallback(
      (evt) => {
        const asnwerValue = evt.target.value;
        onAnswer(asnwerValue);
        resetActivePlayerValue();
      },
      [onAnswer, resetActivePlayerValue]
  );

  return <section className="game__screen">
    <h2 className="game__title">Кто исполняет эту песню?</h2>
    <div className="game__track">
      <div className="track">

        {renderPlayer(song, 0)}

      </div>
    </div>

    <form className="game__artist" onChange={formChangeHandler}>
      {answers.map((answer, i) => <ArtistAnswer key={`${screenIndex}-${answer}-${i}`} answer={answer} id={i} />)}
    </form>
  </section>;
};

ArtistQuestionScreen.propTypes = {
  questions: propTypes.questions,
  onAnswer: PropTypes.func.isRequired,
  screenIndex: PropTypes.number.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  resetActivePlayerValue: PropTypes.func.isRequired
};

export default ArtistQuestionScreen;
