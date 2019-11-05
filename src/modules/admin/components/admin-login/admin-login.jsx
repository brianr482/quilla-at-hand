import React from 'react';
import {
  Box,
  Container,
  CircularProgress,
  Paper,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import useAuth from '../../../utils/hooks/useAuth';
import firebase from '../../../../firebase';
import LoginForm from './form/form';
import styles from './admin-login.module.scss';
import ToastNotification from '../../../utils/ToastNotification';

const AdminLogin = () => {
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const { user } = useAuth();
  const login = async (values) => {
    setError();
    setLoading(true);
    try {
      await firebase.auth()
        .signInWithEmailAndPassword(values.email, values.password);
      setLoading(false);
    } catch (err) {
      if (
        err.code.endsWith('user-not-found')
        || err.code.endsWith('wrong-password')
      ) {
        setError('Credenciales invalidas');
      }
      setLoading(false);
    }
  };
  return (
    <Box className={styles['wrapper-filter']}>
      {error && <ToastNotification message={error} />}
      <Box className={styles.wrapper}>
        <Container className={styles.login} maxWidth="sm">
          <Paper className={styles.paper}>
            {user && <Redirect to="/dashboard" />}
            {loading && (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height={1}
              >
                <CircularProgress />
              </Box>
            )}
            {!loading && !false && !user && (
              <LoginForm onLogin={login} />
            )}
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default AdminLogin;
