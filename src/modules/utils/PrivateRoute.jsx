import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";

const isUserAuthenticated = true;

const PrivateRoute = props => (
  <Fragment>
    {isUserAuthenticated ? props.children : <Redirect to="/admin" />}
  </Fragment>
);

export default PrivateRoute;
