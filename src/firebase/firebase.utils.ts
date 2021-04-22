import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBdUqo4ngdczCp91Jg1i5VWkxpTYhmlQOQ",
  authDomain: "crwn-db-df39d.firebaseapp.com",
  projectId: "crwn-db-df39d",
  storageBucket: "crwn-db-df39d.appspot.com",
  messagingSenderId: "361279639065",
  appId: "1:361279639065:web:0b58023b8e2a9d4a126488",
  measurementId: "G-Q27RKWL393"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

