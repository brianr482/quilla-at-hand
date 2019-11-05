import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import env from './environment/enviroment';

firebase.initializeApp(env.firebase);

export default firebase;
