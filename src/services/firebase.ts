import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC8u_a1PDEh-82q2jSMBhFE9eEIbWcvEqo",
  authDomain: "frontend-challenge-2b58a.firebaseapp.com",
  databaseURL: "https://frontend-challenge-2b58a-default-rtdb.firebaseio.com",
  projectId: "frontend-challenge-2b58a",
  storageBucket: "frontend-challenge-2b58a.appspot.com",
  messagingSenderId: "395810138520",
  appId: "1:395810138520:web:847310cd62b2d88675a3ed"
};

firebase.initializeApp(firebaseConfig);
/**
 * Importar os serviços que serao utilizados do Firebase 
 */
const auth = firebase.auth();
const database = firebase.database();

export {firebase, auth, database}