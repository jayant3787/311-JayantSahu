import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import User from './components/User'
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    {/* <User name="Pooja sahu" /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
