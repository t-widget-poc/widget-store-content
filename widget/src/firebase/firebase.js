import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCha6Xc8JnngcLpKZK_NGYPohq4ZjU1ZZ4",
    authDomain: "widget-demo-miniprogram.firebaseapp.com",
    databaseURL: "https://widget-demo-miniprogram.firebaseio.com",
    projectId: "widget-demo-miniprogram",
    storageBucket: "widget-demo-miniprogram.appspot.com",
    messagingSenderId: "797424423203",
    appId: "1:797424423203:web:d7074c80dbaf4a84c7fc96"
}

firebase.initializeApp(config)

export default firebase