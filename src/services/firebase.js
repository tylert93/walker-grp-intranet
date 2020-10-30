import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// WG-Intranet Firebase app's configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXHkuZc0YmPR5y0NBwqRH8Wwf-l6tUFWs",
    authDomain: "wg-intranet.firebaseapp.com",
    databaseURL: "https://wg-intranet.firebaseio.com",
    projectId: "wg-intranet",
    storageBucket: "wg-intranet.appspot.com",
    messagingSenderId: "903789272172",
    appId: "1:903789272172:web:7cb9dab73e6596a9480c49",
    measurementId: "G-2MQK2BQFN3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase