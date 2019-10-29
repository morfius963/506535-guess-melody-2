import React from "react";
import PropTypes from "prop-types";
import propTypes from "./prop-types.js";
import GameHeader from "../game-header/game-header.jsx";
import ArtistAnswer from "../artist-answer/artist-answer.jsx";

const ArtistQuestionScreen = ({questions, screenIndex, onAnswer}) => {
  const {answers} = questions;

  return <section className="game game--artist">

    <GameHeader />

    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          <button className="track__button track__button--play" type="button"></button>
          <div className="track__status">
            <audio></audio>
          </div>
        </div>
      </div>

      <form className="game__artist" onChange={(evt) => {
        const asnwerValue = evt.target.value;
        onAnswer(asnwerValue);
      }}>
        {answers.map((answer, i) => <ArtistAnswer key={`${screenIndex}-${answer}-${i}`} answer={answer} id={i} />)}
      </form>
    </section>
  </section>;
};

ArtistQuestionScreen.propTypes = {
  questions: propTypes.questions,
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default ArtistQuestionScreen;
