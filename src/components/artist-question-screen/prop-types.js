import PropTypes from "prop-types";
import propTypes from "../artist-answer/prop-types.js";

export default {
  questions: PropTypes.shape({
    type: PropTypes.string.isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    answers: PropTypes.arrayOf(propTypes.answer).isRequired
  })
};
