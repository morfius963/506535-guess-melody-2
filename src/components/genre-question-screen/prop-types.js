import PropTypes from "prop-types";

export default {
  questions: PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.oneOf([`folk`, `rock`, `pop`, `jazz`]).isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          genre: PropTypes.oneOf([`folk`, `rock`, `pop`, `jazz`]).isRequired,
        })
    ).isRequired
  }),
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
};
