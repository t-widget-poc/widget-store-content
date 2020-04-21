import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "***",
    authDomain: "***",
    databaseURL: "https://widget-demo-miniprogram.firebaseio.com",
    projectId: "***",
    storageBucket: "***",
    messagingSenderId: "***",
    appId: "***"
}

firebase.initializeApp(config)

export default firebase