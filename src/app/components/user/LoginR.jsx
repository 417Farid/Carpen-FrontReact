import { useNavigate } from 'react-router-dom';
import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../../../index.css";
import {alert_login,alert_error} from "../../util/functions";
import { sign_in_firebase } from "../../util/firebase.js";
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
      if(response.user.token===""||response.user.token==="undefined"){
        alert_error('Error',response.user.message);
      }else{
        await authService.userConected(response).then(()=>{
          sign_in_firebase(usuario.email,usuario.password);
          alert_login('Éxito!','Bienvenido(a) '+response.user.first_name+" "+response.user.last_name);
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
                          id="password"
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
                          onClick={()=>{
                            let password = document.getElementById("password");
                            let checkbox = document.getElementById("customCheck1");
                            if(checkbox.checked===true){
                              password.setAttribute("type", "text")
                            }else{
                              password.setAttribute("type", "password")
                            }
                          }}
                        />
                        <label htmlFor="customCheck1" className="form-check-label">
                          Mostrar Contraseña
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
