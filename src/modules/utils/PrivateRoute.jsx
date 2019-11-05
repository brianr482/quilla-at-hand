import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useSession from './hooks/useSession';

const PrivateRoute = (props) => {
  const { children } = props;
  // const { user } = useSession();
  const user = true;
  return (
    <>
      {user ? children : <Redirect to="/admin" />}
    </>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PrivateRoute;
