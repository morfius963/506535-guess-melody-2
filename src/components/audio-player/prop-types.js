import PropTypes from "prop-types";

export default {
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  audioRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]),
  isLoading: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired
};
