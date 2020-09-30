import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBiwQwFcN5ozbOy6t0cJzzjCbaMtnWp8uE",
    authDomain: "whatsapp-clone-d1223.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-d1223.firebaseio.com",
    projectId: "whatsapp-clone-d1223",
    storageBucket: "whatsapp-clone-d1223.appspot.com",
    messagingSenderId: "1093206704650",
    appId: "1:1093206704650:web:29ee3ae584a7ed856395f3"
  };

 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider};
  export default db;