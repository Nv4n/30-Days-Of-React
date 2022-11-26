import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import level from './level0';
import level2JSX from './level2';
import level3JSX from './level3';
import reportWebVitals from './reportWebVitals';

// const level0 = level();
const level2 = level2JSX();
const level3 = level3JSX();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {level2}
    {level3}
    {/* {level0} */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
