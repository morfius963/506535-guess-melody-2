import React from 'react';
import AudioPlayer from "../../components/audio-player/audio-player.jsx";
import withAudioPlayer from "../with-audio-player/with-audio-player.jsx";

const AudioPlayerWrapped = withAudioPlayer(AudioPlayer);

const withActivePlayer = (Component) => {
  class WithActivePlayer extends React.PureComponent {
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
