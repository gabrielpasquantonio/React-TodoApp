import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJYYcsU8i7bICedHNt7oG1FVL4X9LfhH0",
    authDomain: "todoapp-5aa6c.firebaseapp.com",
    projectId: "todoapp-5aa6c",
    storageBucket: "todoapp-5aa6c.appspot.com",
    messagingSenderId: "142534822149",
    appId: "1:142534822149:web:9ea52806d9f5a933facf6c",
    measurementId: "G-77K34P53NK"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db