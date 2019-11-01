import React from "react";
import PropTypes from "prop-types";
import propTypes from "./prop-types.js";
import GameHeader from "../game-header/game-header.jsx";
import ArtistAnswer from "../artist-answer/artist-answer.jsx";
import AudioPlayer from "../audio-player/audio-player.jsx";

class ArtistQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };
  }

  render() {
    const {questions, onAnswer} = this.props;
    const {answers, song} = questions;
    const {isPlaying} = this.state;

    return <section className="game game--artist">

      <GameHeader />

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">

            <AudioPlayer
              src={song.src}
              isPlaying={isPlaying}
              onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}
            />

          </div>
        </div>

        <form className="game__artist" onChange={(evt) => {
          const asnwerValue = evt.target.value;
          onAnswer(asnwerValue);
        }}>
          {answers.map((answer, i) => <ArtistAnswer key={`${Math.random()}-${answer}-${i}`} answer={answer} id={i} />)}
        </form>
      </section>
    </section>;
  }
}

ArtistQuestionScreen.propTypes = {
  questions: propTypes.questions,
  onAnswer: PropTypes.func.isRequired,
};

export default ArtistQuestionScreen;
