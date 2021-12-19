import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { productList } from './data/productsList';

const firebaseConfig = {
  apiKey: "AIzaSyCAm3seBeNv6zbg8ntt59xBYZCoLj8o0M8",
  authDomain: "libremercado-f4b94.firebaseapp.com",
  projectId: "libremercado-f4b94",
  storageBucket: "libremercado-f4b94.appspot.com",
  messagingSenderId: "717532883824",
  appId: "1:717532883824:web:429b885d912f8f27603db5",
  measurementId: "G-5ZQ010K7JP"
};

initializeApp(firebaseConfig);

// const db = getFirestore();
// const ref = collection(db, 'products');

// productList.map((product) => addDoc(ref,product));

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
