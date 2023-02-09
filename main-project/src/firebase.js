// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
//   messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID



    // apiKey: "AIzaSyCzD1-SPXEnh3F7rUtkk2gPCcGEylSgrvc",
    // authDomain: "second-development-392ba.firebaseapp.com",
    // projectId: "second-development-392ba",
    // storageBucket: "second-development-392ba.appspot.com",
    // messagingSenderId: "219158392486",
    // appId: "1:219158392486:web:9fc4e1fd9f6ed7c7e50e67"

    apiKey: "AIzaSyA1LkAZlEukAxw7GamHdBmOR0GY5UBir4A",
    authDomain: "bloodfinder-development.firebaseapp.com",
    projectId: "bloodfinder-development",
    storageBucket: "bloodfinder-development.appspot.com",
    messagingSenderId: "441678585804",
    appId: "441678585804:web:f84fb9a01d2fa7ca038769"
  };

 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);
// export default app;

const auth=getAuth(app);
export{auth,app};