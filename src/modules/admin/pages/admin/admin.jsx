import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import styles from './Admin.module.scss';
import AdminLogin from '../../components/admin-login/admin-login';
import PrivateRoute from '../../../utils/PrivateRoute';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import useAuth from '../../../utils/hooks/useAuth';
import userContext from '../../../utils/contexts/userContext';

const Admin = ({ match }) => {
  const { initializing, user } = useAuth();
  return (
    <Box className={styles.wrapper}>
      <Switch>
        <Route exact path={`${match.url}`} component={AdminLogin} />
        <userContext.Provider value={{ user, initializing }}>
          <PrivateRoute>
            <Route
              path={`${match.url}/dashboard`}
              component={AdminDashboard}
            />
          </PrivateRoute>
        </userContext.Provider>
      </Switch>
    </Box>
  );
};

Admin.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Admin;
