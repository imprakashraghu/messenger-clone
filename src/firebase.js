import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // firebase configuration
    {/** Your Firebase Config Stuff Right Here*/}
});

const db = firebaseApp.firestore();

export default db;
