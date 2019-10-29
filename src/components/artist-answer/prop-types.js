import PropTypes from "prop-types";

export default {
  answer: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired
  })
};
