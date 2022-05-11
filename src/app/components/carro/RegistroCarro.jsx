import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';

import * as authService from "../../auth/auth.service";
import { alert_success, alert_error } from "../../util/functions.js";
import { cargarImagen, eliminarImagen } from "../../util/firebase";



function RegistroCarro() {

  const valores_iniciales = {
    placa: "",
    marca: "",
    modelo: "",
    linea: "",
    color: "#FFFFFF",
    numeroSerie: "",
    numeroChasis: "",
    numeroMotor: "",
    tipoCombustible: "",
    kilometrajeActual: "",
    kilometrajeUltimoMantenimiento: "",
    nombreConductor: "",
    foto: "",
    fechaSoat: "",
    fechaTecnicoMecanica: "",
    fechaMatricula: "",
    valor1_placa: "",
    valor2_placa: ""
  };

  const [vehiculo, setVehiculo] = useState(valores_iniciales);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const carro = upperCase();
    try {
      if (carro.foto !== undefined && carro.foto !== "" && carro.foto !== "") {
        const request = await authService.addVehiculo(carro);
        await request.json().then((value) => {
          if (value.error === '') {
            authService.anexaVehiculoToUser(value.vehiculo).then(() => {
              alert_success("Exito!", value.message);
              navigate("/home");
            });
          } else {
            alert_error(value.error, value.message);
            eliminarImagen(carro.foto, "vehiculos");
          }
        });
      } else {
        alert_error("Oops!...", "No se pudo agregar el vehiculo.");
      }
    } catch (error) {
      console.log(error);
      eliminarImagen(carro.foto, "vehiculos");
    }
  };

  const handleInputChange = (e) => {
    setVehiculo({ ...vehiculo, [e.target.name]: e.target.value });
  };

  function upperCase() {
    const valores_iniciales = {
      placa: vehiculo.valor1_placa.toUpperCase()+"-"+vehiculo.valor2_placa.toUpperCase(),
      marca: firstCharUpper(vehiculo.marca),
      modelo: vehiculo.modelo,
      linea: firstCharUpper(vehiculo.linea),
      color: vehiculo.color,
      numeroSerie: String(vehiculo.numeroSerie).toUpperCase(),
      numeroChasis: String(vehiculo.numeroChasis).toUpperCase(),
      numeroMotor: String(vehiculo.numeroMotor).toUpperCase(),
      tipoCombustible: vehiculo.tipoCombustible,
      kilometrajeActual: vehiculo.kilometrajeActual,
      kilometrajeUltimoMantenimiento: vehiculo.kilometrajeUltimoMantenimiento,
      nombreConductor: firstCharUpper(vehiculo.nombreConductor),
      foto: document.getElementById("foto").value,
      fechaSoat: vehiculo.fechaSoat,
      fechaTecnicoMecanica: vehiculo.fechaTecnicoMecanica,
      fechaMatricula: vehiculo.fechaMatricula,
    };
    return valores_iniciales;
  };

  function firstCharUpper(cadena) {
    let array = cadena.split(" ");
    let word = "";
    cadena = "";
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (j === 0) {
          word += array[i].charAt(j).toUpperCase();
        } else {
          word += array[i].charAt(j);
        }
      }
      cadena += word;
      word = "";
      if ((i + 1) < array.length) {
        cadena += " ";
      }
    }
    return cadena;
  }

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="container">
          <Typography component="h2" variant="h5" color="dark" gutterBottom>
            Registro del Vehiculo
          </Typography>
          <hr />
          <div className="container-fluid">
            <form className="form-control" onSubmit={handleSubmit} >
              <div className="row row-sm-auto row-cols-md-2">
                <div className="">
                  <div className="form-group py-2">
                    <label>Placa del Vehiculo</label>
                    <div className="input-group">
                      <input id="placa1" required name="valor1_placa" value={vehiculo.valor1_placa} onChange={handleInputChange} maxLength="4" type="text" className="form-control" placeholder="Placa" aria-label="Username" />
                      <span className="input-group-text">-</span>
                      <input id="placa2" required name="valor2_placa" value={vehiculo.valor2_placa} onChange={handleInputChange} maxLength="4" type="text" className="form-control" placeholder="Placa" aria-label="Server" />
                    </div>
                  </div>
                  <div className="form-group py-2">
                    <label>Marca del Vehiculo</label>
                    <input
                      id="marca"
                      type="text"
                      className="form-control"
                      placeholder="Marca"
                      name="marca"
                      value={vehiculo.marca}
                      onChange={handleInputChange}
                      required
                      maxLength="30"
                    />
                  </div>
                  <div className="form-group py-2">
                    <label>Modelo</label>
                    <input
                      id="modelo"
                      type="text"
                      className="form-control"
                      placeholder="Modelo"
                      name="modelo"
                      value={vehiculo.modelo}
                      onChange={handleInputChange}
                      required
                      maxLength="30"
                    />
                  </div>
                  <div className="form-group py-2 ">
                    <label>Linea</label>
                    <input
                      id="linea"
                      type="text"
                      className="form-control"
                      placeholder="Linea"
                      name="linea"
                      value={vehiculo.linea}
                      onChange={handleInputChange}
                      required
                      maxLength="30"
                    />
                  </div>
                  <div className="form-group py-2">
                    <label>Color</label>
                    <input
                      id="color"
                      type="color"
                      className="form-control"
                      placeholder="Color"
                      name="color"
                      value={vehiculo.color}
                      onChange={handleInputChange}
                      required
                      maxLength="30"
                    />
                  </div>
                  <div className="form-group py-2">
                    <label>Numero de Serie</label>
                    <input
                      id="num-serie"
                      type="text"
                      className="form-control"
                      placeholder="Numero de Serie"
                      name="numeroSerie"
                      value={vehiculo.numeroSerie}
                      onChange={handleInputChange}
                      required
                      maxLength="17"
                      minLength="17"
                    />
                  </div>
                  <div className="form-group py-2">
                    <label>Numero de Chasis</label>
                    <input
                      id="num-chasis"
                      type="text"
                      className="form-control"
                      placeholder="Numero de Chasis"
                      name="numeroChasis"
                      value={vehiculo.numeroChasis}
                      onChange={handleInputChange}
                      required
                      maxLength="17"
                      minLength="17"
                    />
                  </div>
                  <div className="form-group py-2">
                    <label>Numero de Motor</label>
                    <input
                      id="num-motor"
                      type="text"
                      className="form-control"
                      placeholder="Numero de Motor"
                      name="numeroMotor"
                      value={vehiculo.numeroMotor}
                      onChange={handleInputChange}
                      required
                      maxLength="20"
                    />
                  </div>
                </div>

                <div>
                  <div className="form-group py-2">
                    <label>Tipo de Combustible</label>
                    <select
                      id="tipoCombustible"
                      className="form-select"
                      name="tipoCombustible"
                      value={vehiculo.tipoCombustible}
                      onChange={handleInputChange}
                      required
                    >
                      <option defaultValue={""} hidden value="">Tipo de Combustible</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Gasolina">Gasolina</option>
                    </select>
                  </div>
                  <div className="form-group py-2">
                    <label>Kilometraje Actual del Vehiculo</label>
                    <input
                      id="kilometraje-actual"
                      type="number"
                      className="form-control"
                      placeholder="Kilometraje Actual del Vehiculo"
                      name="kilometrajeActual"
                      value={vehiculo.kilometrajeActual}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group py-2">
                    <label>Kilometraje del Ultimo Mantenimiento</label>
                    <input
                      id="kilometraje-ultiMantenimiento"
                      type="number"
                      className="form-control"
                      placeholder="Kilometraje del Ultimo Mantenimiento"
                      name="kilometrajeUltimoMantenimiento"
                      value={vehiculo.kilometrajeUltimoMantenimiento}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group py-2">
                    <label>Nombre del Conductor</label>
                    <input
                      id="nom-conductor"
                      type="text"
                      className="form-control"
                      placeholder="Nombre del Conductor"
                      name="nombreConductor"
                      value={vehiculo.nombreConductor}
                      onChange={handleInputChange}
                      required
                      maxLength="100"
                    />
                  </div>
                  <div className="form-group py-2">
                    <label>Foto del Vehiculo</label>
                    <input
                      id="formFile"
                      className="form-control"
                      type="file"
                      accept="image/png, image/jpeg"
                      required
                    />
                    <input type="text" name="foto" id="foto" value={vehiculo.foto}
                      onChange={handleInputChange} hidden />
                  </div>
                  <div className="form-group py-2">
                    <label>Fecha de SOAT:</label> <br />
                    <input
                      id="fecha-soat"
                      type="date"
                      className="form-control"
                      name="fechaSoat"
                      value={vehiculo.fechaSoat}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group py-2">
                    <label>Fecha de Tecnico Mecanica:</label> <br />
                    <input
                      id="fecha-soat"
                      type="date"
                      className="form-control"
                      name="fechaTecnicoMecanica"
                      value={vehiculo.fechaTecnicoMecanica}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group py-2">
                    <label>Fecha de Matricula:</label> <br />
                    <input
                      id="fecha-soat"
                      type="date"
                      className="form-control"
                      name="fechaMatricula"
                      value={vehiculo.fechaMatricula}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary btn-block my-2"
                  type="button"
                  onClick={() => { cargarImagen("vehiculos") }}
                >
                  Registrar
                </button>
                <button type="button" className="btn btn-secondary btn-block my-2 mx-2" onClick={() => navigate(-1)}>Regresar</button>
                <button id="btn_register_car" type="submit" hidden></button>
              </div>
            </form>
          </div>
        </div>
      </ResponsiveContainer >
    </React.Fragment >
  );
}

export default RegistroCarro;