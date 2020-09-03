import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAKEDws_-trCNbDXNIXTa0C4Bq5voh6RMM',
  authDomain: 'login-auth-e184c.firebaseapp.com',
  databaseURL: 'https://login-auth-e184c.firebaseio.com',
  projectId: 'login-auth-e184c',
  storageBucket: 'login-auth-e184c.appspot.com',
  messagingSenderId: '112215824695',
  appId: '1:112215824695:web:46e6c861ecbdce99a162b2',
  measurementId: 'G-3R4HZF0V7R',
}

const fire = firebase.initializeApp(firebaseConfig)
export default fire
