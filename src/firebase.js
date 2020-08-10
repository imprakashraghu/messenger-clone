import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // firebase configuration
    apiKey: "AIzaSyCpdkXMpLUsVFZPyhqzBqKU9CBNekmsCBw",
    authDomain: "messenger-clone-5a287.firebaseapp.com",
    databaseURL: "https://messenger-clone-5a287.firebaseio.com",
    projectId: "messenger-clone-5a287",
    storageBucket: "messenger-clone-5a287.appspot.com",
    messagingSenderId: "763873964684",
    appId: "1:763873964684:web:1aed46dc6b9521a93481a9",
    measurementId: "G-K7T8VBT4GE"
});

const db = firebaseApp.firestore();

export default db;