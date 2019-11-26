import PropTypes from "prop-types";

export default {
  time: PropTypes.number.isRequired,
  onTimeEnd: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  registrateTimer: PropTypes.func.isRequired
};
