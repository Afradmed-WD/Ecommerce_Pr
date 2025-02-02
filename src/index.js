import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Partilas/login';
import Contact from './Partilas/contact';
import SIGN_UP from './Partilas/sign_up';
import Home from './Partilas/home';
import Menu from './Partilas/menu';
import Detail from './Partilas/DetailProduct';
//import store from './Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
    <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/sign" element={<SIGN_UP/>}/>
          <Route path="/detail" element={<Detail/>}/>
        </Routes>
        </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
