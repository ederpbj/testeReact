import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyByOuxsAqVORH1BhNFkOfTmu2-KhybMYQs",
    authDomain: "projeto-teste-cceff.firebaseapp.com",
    databaseURL: "https://projeto-teste-cceff.firebaseio.com",
    projectId: "projeto-teste-cceff",
    storageBucket: "projeto-teste-cceff.appspot.com",
    messagingSenderId: "105683966485",
    appId: "1:105683966485:web:e875aa024ae96846"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;