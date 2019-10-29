import PropTypes from "prop-types";

export default {
  question: PropTypes.shape({
    type: PropTypes.oneOf([`artist`, `genre`]).isRequired,
    answers: PropTypes.array.isRequired,
    genre: PropTypes.oneOf([`folk`, `rock`, `pop`, `jazz`]),
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  })
};
