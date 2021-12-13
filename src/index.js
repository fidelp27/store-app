import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAKBBU16LIhsrrLmDeZKdAtkeTxaqawLVA',
  authDomain: 'ccba-bc5f1.firebaseapp.com',
  projectId: 'ccba-bc5f1',
  storageBucket: 'ccba-bc5f1.appspot.com',
  messagingSenderId: '487584352194',
  appId: '1:487584352194:web:c9638b3c5cb44bfa8df85b',
}

// Initialize Firebase
initializeApp(firebaseConfig)


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
