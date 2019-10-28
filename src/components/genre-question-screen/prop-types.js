import PropTypes from "prop-types";
import propTypes from "../genre-answer/prop-types.js";

export default {
  questions: PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.oneOf([`folk`, `rock`, `pop`, `jazz`]).isRequired,
    answers: PropTypes.arrayOf(propTypes.answer).isRequired
  })
};
