import PropTypes from "prop-types";

export default {
  time: PropTypes.number.isRequired,
  onTimeEnd: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
  maxMistakes: PropTypes.number.isRequired,
};
