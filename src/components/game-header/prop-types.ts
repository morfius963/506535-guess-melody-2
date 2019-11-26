import PropTypes from "prop-types";

export default {
  mistakes: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onTimeEnd: PropTypes.func.isRequired,
  registrateTimer: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired
};
