import React from "react";
import propTypes from "./prop-types.js";

class AudioPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = React.createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: false,
    };

    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }

  render() {
    const {isLoading, isPlaying} = this.state;

    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={this._onPlayButtonClick}
        />
        <div className="track__status">
          <audio ref={this._audioRef} />
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;

    audio.src = src;

    audio.oncanplaythrough = () => {
      this.setState({
        isLoading: false,
      });
    };

    audio.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    audio.onpause = () => {
      this.setState({
        isPlaying: false,
      });
    };

    audio.ontimeupdate = () => {
      this.setState({
        progress: audio.currentTime
      });
    };
  }

  componentDidUpdate() {
    const audio = this._audioRef.current;

    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
  }

  _onPlayButtonClick() {
    this.props.onPlayButtonClick();
  }
}

AudioPlayer.propTypes = propTypes;

export default AudioPlayer;
