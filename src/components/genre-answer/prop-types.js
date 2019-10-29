import PropTypes from "prop-types";

export default {
  answer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.oneOf([`folk`, `rock`, `pop`, `jazz`]).isRequired
  })
};
