import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBNtV0QfZDM-rpMqJXz7srudNH2g7U3oS4",
  authDomain: "photolib-1afa8.firebaseapp.com",
  projectId: "photolib-1afa8",
  storageBucket: "photolib-1afa8.appspot.com",
  messagingSenderId: "755987924975",
  appId: "1:755987924975:web:5bbcd9293b97830c07d81a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };