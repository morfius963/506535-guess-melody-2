import * as React from "react";
import {Route, Redirect} from "react-router-dom";

interface Props {
  path: string,
  isAuthorizationRequired: boolean,
  renderCmp: () => React.ReactElement
}

const PrivateRoute = ({path, renderCmp, isAuthorizationRequired}: Props) => (
  <Route
    path={path}
    exact
    render={() => (
      isAuthorizationRequired
        ? <Redirect to="/auth" />
        : renderCmp()
    )}
  />
);

export default PrivateRoute;
