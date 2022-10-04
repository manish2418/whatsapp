import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDntwE1Yf8tTtZJxD-1mINrZY5Xt0vvOkc",
  authDomain: "whatsapp-clone-1b734.firebaseapp.com",
  projectId: "whatsapp-clone-1b734",
  storageBucket: "whatsapp-clone-1b734.appspot.com",
  messagingSenderId: "132946951599",
  appId: "1:132946951599:web:1f74639b30704ca66cc35a",
  measurementId: "G-JY353DCSNN"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
