import firebase from 'firebase'
import firebase from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD3UE6mM0P0LVeC-8QY1C7N8pK3OeMIYe8",
  authDomain: "ninja-chat-9a50d.firebaseapp.com",
  databaseURL: "https://ninja-chat-9a50d.firebaseio.com",
  projectId: "ninja-chat-9a50d",
  storageBucket: "ninja-chat-9a50d.appspot.com",
  messagingSenderId: "694503512305",
  appId: "1:694503512305:web:cbafbeae896df6a9aab150"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
