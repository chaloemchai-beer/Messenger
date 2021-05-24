import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAu_bMRFfqEJd3x7H67zxoApDo6UfMc3PE",
    authDomain: "messenger-7f6c5.firebaseapp.com",
    projectId: "messenger-7f6c5",
    storageBucket: "messenger-7f6c5.appspot.com",
    messagingSenderId: "419927064169",
    appId: "1:419927064169:web:515a1f2e22a1be0ea12cf8",
    measurementId: "G-LMDL4XH8SJ"
})

const db = firebaseApp.firestore()

export default db