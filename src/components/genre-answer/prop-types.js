import PropTypes from "prop-types";

export default {
  answer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  }),
  id: PropTypes.number.isRequired,
  checkboxChangeHandler: PropTypes.func.isRequired
};
