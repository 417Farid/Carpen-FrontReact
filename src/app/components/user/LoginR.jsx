import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../../../index.css";

import {alert_success,alert_error, verContraseña} from "../../util/functions.js";

import * as UserServer from './UserServer';
import { Image } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();

  const valores_iniciales = {
    email: "",
    password: "",
  };
  
  const [user, setUser] = useState(valores_iniciales);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuario = upperCase();
      const user_conected = await UserServer.userConected(usuario)
      const data = await user_conected.json();
      if(data.user.error==="vacio"){
        alert_error('Error',data.user.message);
      }else{
        alert_success('Éxito!','Bienvenido(a) '+data.user.nombre+" "+data.user.apellido).then(()=>{
          navigate('/home');
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  function upperCase(){
    const valores_iniciales = {
      email: user.email.toUpperCase(),
      password: user.password,
    };
    return valores_iniciales;
  };

  return (
    <div className="maincontainer">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image"></div>
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4 text-center">C A R P E N</h3>
                    <p className="text-muted mb-4 text-center">
                      Ingresa tu Correo y Contraseña.
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          id="inputEmail"
                          type="email"
                          placeholder="Direccion de Correo Electronico"
                          autoFocus=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          name="email" value={user.email} onChange={handleInputChange} required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="inputPassword"
                          type="password"
                          placeholder="Contraseña"
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          name="password" value={user.password} onChange={handleInputChange} required
                        />
                      </div>
                      <div className="form-check">
                        <input
                          id="customCheck1"
                          type="checkbox"
                          className="form-check-input"
                        />
                        <label htmlFor="customCheck1" className="form-check-label">
                          Recordarme
                        </label>
                      </div>
                      <div className="d-grid gap-2 mt-2">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Login
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                          onClick={() => navigate(`/sign_up`)}
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;