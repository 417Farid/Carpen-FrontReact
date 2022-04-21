import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Swal from "sweetalert2";
import "../../index.css";

import * as UserServer from "./UserServer";

function RegistroUsuario() {
  const navigate = useNavigate();

  /*const valores_iniciales = {
    nombre: "Farid",
    apellido: "Duarte",
    tipoDocumento: "C.C",
    numeroDocumento: 1009876897,
    ciudad: "Cucuta",
    email: "farid@gmail.com",
    password: "farid123",
  };*/

  //const [user, setUser] = useState(valores_iniciales);
  const [user, setUser] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserServer.userRegister(user).then(() => {
          alert("Usuario Creado con éxito.", "Bienvenido "+user.nombre+" "+user.apellido+".");
          navigate("/");
        }).catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Alertas Bonitas
  const alert = (success,message)=>{
    Swal.fire(
      success,
      message,
      'success',
    );
  };

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
                    <h3 className="display-4 text-center">SIGN UP</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>Nombres</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nombres"
                          name="nombre"
                          value={user.nombre}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Apellidos</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apellidos"
                          name="apellido"
                          value={user.apellido}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Tipo de Documento</label>
                        <select
                          className="form-select"
                          name="tipoDocumento"
                          value={user.tipoDocumento}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="C.C">C.C</option>
                          <option value="T.I">T.I</option>
                          <option value="C.E">C.E</option>
                          <option value="PP">PP</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Número Documento</label>
                        <input
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
                          type="submit"
                          className="btn btn-primary btn-block my-2"
                        >
                          Sign Up
                        </button>
                      </div>
                      <p className="forgot-password text-right">
                        Already registered{" "}
                        <a type="button" href="/">
                          sign in?
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
