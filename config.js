// import { firebase } from '@firebase/app';
import * as firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4cfssNpxruHdoKDihyEnUhDw23rjB7HI",
  authDomain: "own-app-9e5cf.firebaseapp.com",
  projectId: "own-app-9e5cf",
  storageBucket: "own-app-9e5cf.appspot.com",
  messagingSenderId: "763975863660",
  appId: "1:763975863660:web:43fcb95cad57a03bf9b749"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
