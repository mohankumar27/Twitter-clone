import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgHJQHxbyQWrYZcj2sd1uxqbRogEIvlYk",
  authDomain: "twitter-clone-c0b5d.firebaseapp.com",
  databaseURL: "https://twitter-clone-c0b5d.firebaseio.com",
  projectId: "twitter-clone-c0b5d",
  storageBucket: "twitter-clone-c0b5d.appspot.com",
  messagingSenderId: "301741130202",
  appId: "1:301741130202:web:5bd5789b1fa89e169b80e3",
  measurementId: "G-3BB19RV99K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
