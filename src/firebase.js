import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import env from './environment/enviroment';

firebase.initializeApp(env.firebase);

export default firebase;
