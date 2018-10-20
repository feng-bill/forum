import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyDOJhMRTb7r7MLxYwd8oH_t-LYjBuiVrOU",
    authDomain: "forum-118w.firebaseapp.com",
    databaseURL: "https://forum-118w.firebaseio.com",
    projectId: "forum-118w",
    storageBucket: "forum-118w.appspot.com",
    messagingSenderId: "155445725785",
};
firebase.initializeApp(config);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
