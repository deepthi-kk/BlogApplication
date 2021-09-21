import firebase from "firebase";
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDgwfHGH5Cwu_IqjNSZNSqZmbhgaaCBP88",
    authDomain: "facebook-cone-e426c.firebaseapp.com",
    databaseURL: "https://facebook-cone-e426c.firebaseio.com",
    projectId: "facebook-cone-e426c",
    storageBucket: "facebook-cone-e426c.appspot.com",
    messagingSenderId: "648508353737",
    appId: "1:648508353737:web:a26c463df92f42c10f3118",
    measurementId: "G-N1S9FM7W0R"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth, provider};
  export default db;