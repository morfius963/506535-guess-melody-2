import React from 'react';
import PropTypes from "prop-types";

const withAudioPlayer = (Component) => {
  class WithAudioPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this._audioRef = this._setRef();

      this.state = {
        isLoading: true,
        isPlaying: props.isPlaying,
      };

      this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        audioRef={this._audioRef}
        isLoading={this.state.isLoading}
        onPlayButtonClick={this._onPlayButtonClick}
      />;
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

    _setRef() {
      return React.createRef();
    }

    _onPlayButtonClick() {
      this.props.onPlayButtonClick();
      this.setState({isPlaying: !this.state.isPlaying});
    }
  }

  WithAudioPlayer.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    onPlayButtonClick: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
  };

  return WithAudioPlayer;
};

export default withAudioPlayer;
