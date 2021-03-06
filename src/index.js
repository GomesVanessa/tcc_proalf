import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Normalize} from 'styled-normalize';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <>
    <Normalize /> 
    <GlobalStyles /> 
    <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
