import PropTypes from "prop-types";

export default {
  time: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        answers: PropTypes.array.isRequired,
        genre: PropTypes.string,
        song: PropTypes.shape({
          artist: PropTypes.string.isRequired,
          src: PropTypes.string.isRequired
        })
      })
  ).isRequired
};
