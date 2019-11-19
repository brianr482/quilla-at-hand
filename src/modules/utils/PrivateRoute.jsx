import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from './hooks/useAuth';

const PrivateRoute = (props) => {
  const { children } = props;
  const { initializing, user } = useAuth();

  if (!initializing) {
    return (
      <>
        {user ? children : <Redirect to="/admin" />}
      </>
    );
  }
  return null;
};
PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default PrivateRoute;
