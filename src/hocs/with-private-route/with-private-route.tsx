import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({renderCmp, isAuthorizationRequired, rest}) => (
  <Route
    {...rest}
    render={(props) => (
      isAuthorizationRequired
        ? <Redirect to="/auth" />
        : renderCmp(props)
    )}
  />
);

PrivateRoute.propTypes = {
  renderCmp: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  rest: PropTypes.object
};

export default PrivateRoute;
