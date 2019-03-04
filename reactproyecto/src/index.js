import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
	apiKey: "AIzaSyBG6E6x0sgwUQS-Ha-N44KcfCq6Or-glBA",
    authDomain: "reactproyecto-2d67b.firebaseapp.com",
    databaseURL: "https://reactproyecto-2d67b.firebaseio.com",
    projectId: "reactproyecto-2d67b",
    storageBucket: "reactproyecto-2d67b.appspot.com",
    messagingSenderId: "369631687965"	
});

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
