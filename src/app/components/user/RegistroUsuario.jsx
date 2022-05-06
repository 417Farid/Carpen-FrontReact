import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {alert_success,alert_error,verificarCamposRegister} from "../../util/functions.js";
import { createUserFirebase } from "../../util/firebase.js";
import "../../../index.css";

import * as authService from "../../auth/auth.service";

function RegistroUsuario() {
  const navigate = useNavigate();

  const valores_iniciales = {
    first_name: "",
    last_name: "",
    tipoDocumento: "",
    numeroDocumento: "",
    ciudad: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState(valores_iniciales);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuario = upperCase();
      const request = await authService.sign_up(usuario);
      await request.json().then((value)=>{
        if(value.error===''){
          createUserFirebase(usuario.email,usuario.password);
          alert_success("Usuario Creado con éxito.", "Bienvenido "+usuario.first_name+" "+usuario.last_name+".");
          navigate("/");
        }else{ 
          alert_error(value.error, value.message); 
        }
      });        
    } catch(error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value});
  };

  function upperCase(){
    const valores_iniciales = {
      first_name: firstCharUpper(user.first_name),
      last_name: firstCharUpper(user.last_name),
      tipoDocumento: user.tipoDocumento.toUpperCase(),
      numeroDocumento: user.numeroDocumento,
      ciudad: firstCharUpper(user.ciudad),
      email: user.email.toUpperCase(),
      password: user.password,
    };
    return valores_iniciales;
  };

  function firstCharUpper(cadena){
    let array = cadena.split(" ");
    let word = "";
    cadena = "";
    for (let i = 0; i < array.length;i++){
      for (let j = 0; j < array[i].length; j++) {
        if(j===0){
          word += array[i].charAt(j).toUpperCase();
        }else{
          word += array[i].charAt(j);
        }
      }
      cadena += word;
      word = "";
      if((i+1)<array.length){
        cadena += " ";
      }
    }
    return cadena;
  }

  return (
    <div className="maincontainer">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image"></div>
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4 text-center">Registrarse</h3>
                    <form onSubmit={handleSubmit} >
                      <div className="form-group">
                        <label>Nombres</label>
                        <input
                          id="nombre"
                          type="text"
                          className="form-control"
                          placeholder="Nombres"
                          name="first_name"
                          value={user.first_name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Apellidos</label>
                        <input
                          id="apellido"
                          type="text"
                          className="form-control"
                          placeholder="Apellidos"
                          name="last_name"
                          value={user.last_name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Tipo de Documento</label>
                        <select
                          id="tipoDocumento"
                          className="form-select"
                          name="tipoDocumento"
                          value={user.tipoDocumento}
                          onChange={handleInputChange}
                          required
                        >
                          <option defaultValue={""} hidden value="">Tipo</option>
                          <option value="C.C">C.C</option>
                          <option value="C.E">C.E</option>
                          <option value="PP">PP</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Número Documento</label>
                        <input
                          id="numeroDocumento"
                          type="number"
                          className="form-control"
                          placeholder="Documento"
                          name="numeroDocumento"
                          value={user.numeroDocumento}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Ciudad</label>
                        <input
                          id="ciudad"
                          type="text"
                          className="form-control"
                          placeholder="Ciudad"
                          name="ciudad"
                          value={user.ciudad}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          value={user.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Contraseña</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          placeholder="Contraseña"
                          name="password"
                          value={user.password}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          id="btn_register_user"
                          type="button"
                          className="btn btn-primary btn-block my-2"
                          onClick={()=>{verificarCamposRegister()}}
                        >
                          Registrarse
                        </button>
                      </div>
                      <p className="forgot-password text-right">
                        Already registered{" "}
                        <a type="button" href="/">
                          iniciar sesión?
                        </a>
                      </p>
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
}

export default RegistroUsuario;
