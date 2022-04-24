import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import LoginR from './app/components/user/LoginR';
import RegistroUsuario from './app/components/user/RegistroUsuario';

import Dashboard from './app/components/home/Dashboard';

import CarroList from './app/components/carro/CarroList';
import RegistroCarro from './app/components/carro/RegistroCarro';

import TallerList from './app/components/taller/TallerList.jsx';
import RegistroTaller from './app/components/taller/RegistroTaller';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <div>
      <Routes>
        <Route exact path='/' element={<LoginR/>}/>
        <Route path='/sign_up' element={<RegistroUsuario/>}/>
        <Route path='/home' element={<Dashboard/>}/>
      </Routes>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
