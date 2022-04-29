import { useNavigate } from 'react-router-dom';
import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../../../index.css";
import {alert_login,alert_error} from "../../util/functions";
import * as authService from '../../auth/auth.service.js';

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
      const response = await authService.sign_in(usuario);
      if(response.token===""){
        alert_error('Error',response.user.message);
      }else{
        await authService.userConected(response.token).then(()=>{
          alert_login('Éxito!','Bienvenido(a)');
          setTimeout(()=>navigate("/home"),2000);
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
                      <div className="row row-cols-2 justify-content-evenly mt-4">
                        <button
                          type="submit"
                          className="col-5 btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Entrar
                        </button>
                        <button
                          type="button"
                          className="col-5 col-sm-5 btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                          onClick={() => navigate(`/sign_up`)}
                        >
                          Registrarse
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
