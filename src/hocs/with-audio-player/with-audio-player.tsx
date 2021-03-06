import * as React from 'react';

interface Props {
  src: string,
  id: number,
  isPlaying: boolean,
  onPlayButtonClick: (id: number) => void,
}

interface State {
  isLoading: boolean,
  isPlaying: boolean,
}

const withAudioPlayer = (Component) => {
  class WithAudioPlayer extends React.PureComponent<Props, State> {
    _audioRef: React.RefObject<HTMLAudioElement>;

    constructor(props) {
      super(props);

      this._audioRef = React.createRef();

      this.state = {
        isLoading: true,
        isPlaying: props.isPlaying,
      };

      this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
      this._onAudioCanPlayThrough = this._onAudioCanPlayThrough.bind(this);
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
      audio.addEventListener(`canplaythrough`, this._onAudioCanPlayThrough);
    }

    componentDidUpdate() {
      const audio = this._audioRef.current;

      if (audio.src !== this.props.src) {
        audio.src = this.props.src;
      }

      if (this.props.isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    componentWillUnmount() {
      const audio = this._audioRef.current;

      audio.removeEventListener(`canplaythrough`, this._onAudioCanPlayThrough);
      audio.src = ``;
    }

    _onPlayButtonClick(id) {
      this.props.onPlayButtonClick(id);
      this.setState({isPlaying: !this.state.isPlaying});
    }

    _onAudioCanPlayThrough() {
      this.setState({
        isLoading: false,
      });
    }
  }

  return WithAudioPlayer;
};

export default withAudioPlayer;
