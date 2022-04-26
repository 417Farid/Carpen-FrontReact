import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginR from './app/components/user/LoginR';
import RegistroUsuario from './app/components/user/RegistroUsuario';

import Dashboard from './app/components/home/Dashboard';
import NotFound from './app/components/home/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <div>
      <Routes>
        <Route exact path='/' element={<LoginR/>}/>
        <Route exact path='/sign_up' element={<RegistroUsuario/>}/>
        <Route exact path='/home' element={<Dashboard/>}/>
        <Route exact path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  </BrowserRouter>
);