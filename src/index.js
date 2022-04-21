import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import LoginR from './components/user/LoginR';
import LoginForm from './components/user/LoginForm';
import RegistroUsuario from './components/user/RegistroUsuario';

import CarroList from './components/carro/CarroList';
import RegistroCarro from './components/carro/RegistroCarro';

import TallerList from './components/taller/TallerList.jsx';
import RegistroTaller from './components/taller/RegistroTaller';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <div>
      <Routes>
        <Route exact path='/' element={<LoginR/>}/>
        <Route path='/sign_up' element={<RegistroUsuario/>}/>
      </Routes>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
