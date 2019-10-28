import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import ReactRouterPropTypes from "react-router-prop-types";
import styles from "./Admin.module.scss";
import AdminLogin from "../../components/admin-login/admin-login";
import PrivateRoute from "../../../utils/PrivateRoute";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

const Admin = ({ match }) => (
  <Box className={styles.wrapper}>
    <Switch>
      <Route exact path={`${match.url}`} component={AdminLogin} />
      <PrivateRoute>
        <Route
          path={`${match.url}/dashboard`}
          component={AdminDashboard}
        />
      </PrivateRoute>
    </Switch>
  </Box>
);

Admin.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default Admin;
