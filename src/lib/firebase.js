import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here i want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
    apiKey: 'AIzaSyABl5ELUxHrUpyVJmrNuv9K6gFu0qPGaY4',
    authDomain: 'instagram-clone-4cdd8.firebaseapp.com',
    projectId: 'instagram-clone-4cdd8',
    storageBucket: 'instagram-clone-4cdd8.appspot.com',
    messagingSenderId: '195360402012',
    appId: '1:195360402012:web:74289913afc7a3c3cad499'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//here is where i want to call the seed file (only ONCE!)
// seedDatabase(firebase);

export { firebase, FieldValue };