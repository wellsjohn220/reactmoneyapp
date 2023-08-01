import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAVDyKTcf8a3-ItzGg_nL9bkjeXSykNKw0",
  authDomain: "money01082023.firebaseapp.com",
  projectId: "money01082023",
  storageBucket: "money01082023.appspot.com",
  messagingSenderId: "820028667183",
  appId: "1:820028667183:web:e1a1aeafeab7545c715dda"
};

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  export { projectFirestore, projectAuth }