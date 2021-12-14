import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYAfnaDY-a96_8PvGIPQeHpowi9njNg-w",
  authDomain: "coder-app-8131d.firebaseapp.com",
  projectId: "coder-app-8131d",
  storageBucket: "coder-app-8131d.appspot.com",
  messagingSenderId: "685969016316",
  appId: "1:685969016316:web:1ab5e10ddef1afbb78de79",
  measurementId: "G-LW6K5ZQPN2"
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
