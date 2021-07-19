import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBCrrgskhYC-HJ4v-foopRzVdr8AAkhF1I",
    authDomain: "miet-talk.firebaseapp.com",
    projectId: "miet-talk",
    storageBucket: "miet-talk.appspot.com",
    messagingSenderId: "253245663409",
    appId: "1:253245663409:web:86fd892553198289f91a90",
    measurementId: "G-BBXVSVJ9YB"
};

firebase.initializeApp(config);
const db=firebase.firestore();

export default db;
