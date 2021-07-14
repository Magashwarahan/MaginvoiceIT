import firebase from "firebase/app"
import "firebase/firestore" ;

var firebaseConfig = {
    apiKey: "AIzaSyAcS2EnNJcnCySEHPn7VhkBHgYteTZ0aaE",
    authDomain: "invoice-vue-d6246.firebaseapp.com",
    projectId: "invoice-vue-d6246",
    storageBucket: "invoice-vue-d6246.appspot.com",
    messagingSenderId: "913215207757",
    appId: "1:913215207757:web:7de6415e70de666ba09f04"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()