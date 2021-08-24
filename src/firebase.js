import firebase from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyA0nJ7d3Xl2Fq-YciCy1gG6doMk8Qvx5f0",
    authDomain: "clone-yt1.firebaseapp.com",
    projectId: "clone-yt1",
    storageBucket: "clone-yt1.appspot.com",
    messagingSenderId: "998974803384",
    appId: "1:998974803384:web:e53e2e439ac8c280ff134d"
};
firebase.initializeApp(firebaseConfig);

export default firebase.auth();