import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import env from './environment/environment';

firebase.initializeApp(env.firebase);

export default firebase;