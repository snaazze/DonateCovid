import firebase from 'firebase'

let config =  {
        apiKey: "AIzaSyBYrLkekWEf_1tScM48YtIBWojY34MNE3k",
        authDomain: "coviddonate-f8898.firebaseapp.com",
        databaseURL: "https://coviddonate-f8898.firebaseio.com",
        projectId: "coviddonate-f8898",
        storageBucket: "coviddonate-f8898.appspot.com",
        messagingSenderId: "1010159287879",
        appId: "1:1010159287879:web:4a7a12bc9221b91a89fb62",
        measurementId: "G-NP3ZH76KBS"
};

let fire = firebase.initializeApp(config);
 export default fire;