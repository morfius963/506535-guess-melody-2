import PropTypes from "prop-types";

export default {
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};
