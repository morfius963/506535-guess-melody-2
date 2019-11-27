import * as React from 'react';
import AudioPlayer from "../../components/audio-player/audio-player";
import withAudioPlayer from "../with-audio-player/with-audio-player";
import {QuestionGenre, QuestionArtist} from "../../types";

interface Props {
  questions: QuestionGenre | QuestionArtist,
  screenIndex: number,
  onAnswer: (userAnswer: boolean[], answerTime: number) => void,
}

interface State {
  activePlayer: number
}

const AudioPlayerWrapped = withAudioPlayer(AudioPlayer);

const withActivePlayer = (Component) => {
  class WithActivePlayer extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this.state = {
        activePlayer: -1,
      };

      this._buttonClickHandler = this._buttonClickHandler.bind(this);
      this._setDefaultStateValue = this._setDefaultStateValue.bind(this);
    }

    render() {
      const {activePlayer} = this.state;
      return <Component
        {...this.props}

        resetActivePlayerValue={this._setDefaultStateValue}
        renderPlayer={(it, i) => {
          return <AudioPlayerWrapped
            src={it.src}
            isPlaying={i === activePlayer}
            id={i}
            onPlayButtonClick={this._buttonClickHandler}
          />;
        }}
      />;
    }

    _buttonClickHandler(index) {
      this.setState((prevState) => ({
        activePlayer: prevState.activePlayer === index ? -1 : index
      }));
    }

    _setDefaultStateValue() {
      this.setState({activePlayer: -1});
    }
  }

  return WithActivePlayer;
};

export default withActivePlayer;
