import React from 'react';
import firebase from '../../../firebase';

const useAuth = () => {
  const [state, setState] = React.useState(() => {
    const user = firebase.auth().currentUser;

    return { initializing: true, user };
  });
  function onChange(user) {
    setState({ initializing: false, user });
  }

  React.useEffect(() => {
    // listen for auth state changes


    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, [state.user, state.initializing]);

  return state;
};

export default useAuth;
