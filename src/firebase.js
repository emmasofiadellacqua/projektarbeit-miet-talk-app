import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp ({
    apiKey: "AIzaSyBCrrgskhYC-HJ4v-foopRzVdr8AAkhF1I",
    authDomain: "miet-talk.firebaseapp.com",
    projectId: "miet-talk",
    storageBucket: "miet-talk.appspot.com",
    messagingSenderId: "253245663409",
    appId: "1:253245663409:web:2ccfb8b8d3906c28f91a90",
    measurementId: "G-K0422YKW1R"
});

export default app;
