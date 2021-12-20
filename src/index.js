import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Providers} from "./providers/providers"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { addDoc, collection, getFirestore } from 'firebase/firestore';

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

// const data = [
//   {
//     name: "Tarantino",
//     price: 200,
//     stock: 10,
//     id: '1',
//     category: 'Peliculas',
//     img: '/assets/tarantino-movie.png',
//     count: 0
// },
// {
//     name: "Bruce Lee",
//     price: 1000,
//     stock: 20,
//     id: '11',
//     category: 'Peliculas',
//     img: '/assets/bruce-movie.png',
//     count: 0
// },
// {
//     name: "Pulp Fiction",
//     price: 200,
//     stock: 14,
//     id: '12',
//     category: 'Peliculas',
//     img: '/assets/pulp-movie.jpg',
//     count: 0
// },
// {
//     name: 'Coder',
//     price: 300,
//     stock: 4,
//     id: '2',
//     category: 'Programacion',
//     img: '/assets/dev-program.png',
//     count: 0
// },
// {
//     name: 'Peaky Blinders',
//     price: 700,
//     stock: 6,
//     id: '3',
//     category: 'Series',
//     img: '/assets/peaky-series.png',
//     count: 0
// },
// {
//     name: 'Stranger Things',
//     price: 700,
//     stock: 6,
//     id: '9',
//     category: 'Series',
//     img: '/assets/stranger-series.jpg',
//     count: 0
// },
// {
//     name: 'Breaking Bad',
//     price: 900,
//     stock: 10,
//     id: '10',
//     category: 'Series',
//     img: '/assets/breaking-series.jpg',
//     count: 0
// },
// {
//     name: 'Play Station',
//     price: 80,
//     stock: 20,
//     id: '4',
//     category:'Gamer',
//     img: '/assets/play-gamer.png',
//     count: 0
// },
// {
//     name: 'Mortal Kombat',
//     price: 808,
//     stock: 10,
//     id: '7',
//     category:'Gamer',
//     img: '/assets/mortal-gamer.png',
//     count: 0
// },
// {
//     name: 'Street Fighter',
//     price: 808,
//     stock: 10,
//     id: '8',
//     category:'Gamer',
//     img: '/assets/street-gamer.png',
//     count: 0
// },
// {
//     name: 'Coder Rex',
//     price: 600,
//     stock: 8,
//     id: '5',
//     category: 'Programacion',
//     img: '/assets/dev-program3.png',
//     count: 0
// },
// {
//     name: 'Coder Evolution',
//     price: 800,
//     stock: 8,
//     id: '6',
//     category: 'Programacion',
//     img: '/assets/dev-program1.png',
//     count: 0
// }
// ]
// const db = getFirestore()
// const ref = collection(db, "products")

// data.map((product)=> addDoc(ref, product))


ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
