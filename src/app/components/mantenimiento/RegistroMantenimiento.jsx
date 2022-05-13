import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';


function RegistroMantenimiento() {

  const valores_iniciales = {
    nombreMantenimiento: "",
    placaVehiculo: "",
    fechaMantenimiento: "",
    kilometrajeMantenimiento: "",
    costoMantenimiento: "",
    formaPago: "#FFFFFF",
    valor1_placa: "",
    valor2_placa: ""
  };

  const [mantenimiento, setMantenimiento] = useState(valores_iniciales);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  };

  const handleInputChange = (e) => {
    setMantenimiento({ ...mantenimiento, [e.target.name]: e.target.value });
  };

  function upperCase() {
    const valores_iniciales = {
      nombreMantenimiento: mantenimiento.nombreMantenimiento.toUpperCase(),
      placaVehiculo: mantenimiento.valor1_placa.toUpperCase() + "-" + mantenimiento.valor2_placa.toUpperCase(),
      fechaMantenimiento: mantenimiento.fechaMantenimiento,
      kilometrajeMantenimiento: mantenimiento.kilometrajeMantenimiento,
      costoMantenimiento: mantenimiento.costoMantenimiento,
      formaPago: mantenimiento.formaPago,
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
        <div className={'d-flex flex-column justify-content-center align-items-center text-center'}>
          <div className="maincontainer">
            <div className="container-fluid">
              <div className="row no-gutter">
                <div className="col-md-15 bg-light">
                  <div className="regCar d-flex align-items-center py-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-15 col-xl-15 mx-auto">
                          <Typography component="h3" variant="h3" color="dark" gutterBottom>
                            Registro del Mantenimiento
                          </Typography>
                          <hr />
                          <div className="container-fluid">
                            <form className="form-control" onSubmit={handleSubmit}>
                              <div className="row row-sm-auto">
                                <div className="form-group py-2">
                                  <label>Nombre del Mantenimiento</label>
                                  <input
                                    id="nombreMantenimiento"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del Mantenimiento"
                                    name="nombreMantenimiento"
                                    value={mantenimiento.nombreMantenimiento}
                                    onChange={handleInputChange}
                                    required
                                    maxLength="100"
                                  />
                                </div>
                                <div className="form-group py-2">
                                  <label>Placa del Vehiculo</label>
                                  <div className="input-group">
                                    <input id="placa1" required name="valor1_placa" value={mantenimiento.valor1_placa} onChange={handleInputChange} maxLength="3" type="text" className="form-control" placeholder="Placa" aria-label="Username" />
                                    <span className="input-group-text">-</span>
                                    <input id="placa2" required name="valor2_placa" value={mantenimiento.valor2_placa} onChange={handleInputChange} maxLength="3" type="text" className="form-control" placeholder="Placa" aria-label="Server" />
                                  </div>
                                </div>
                                <div className="form-group py-2">
                                  <label>Fecha de Mantenimiento</label> <br />
                                  <input
                                    id="fechaMantenimiento"
                                    type="date"
                                    className="form-control"
                                    name="fechaMantenimiento"
                                    value={mantenimiento.fechaMantenimiento}
                                    onChange={handleInputChange}
                                  />
                                </div>
                                <div className="form-group py-2">
                                  <label>Kilometraje necesario para Realizar Mantenimiento(Solo Numeros)</label>
                                  <input
                                    id="kilometrajeMantenimiento"
                                    type="text"
                                    className="form-control"
                                    placeholder="kilometraje del Mantenimiento"
                                    name="kilometrajeMantenimiento"
                                    value={mantenimiento.kilometrajeMantenimiento}
                                    onChange={handleInputChange}
                                    required
                                    maxLength="7"
                                  />
                                </div>
                                <div className="form-group py-2">
                                  <label>Costo del Mantenimiento(Solo Numeros)</label>
                                  <input
                                    id="costoMantenimiento"
                                    type="text"
                                    className="form-control"
                                    placeholder="Costo del Mantenimiento"
                                    name="costoMantenimiento"
                                    value={mantenimiento.costoMantenimiento}
                                    onChange={handleInputChange}
                                    required
                                    maxLength="10"
                                  />
                                </div>
                                <div className="form-group py-2">
                                  <label>Forma de Pago del Taller</label>
                                  <select
                                    id="formaPago"
                                    className="form-select"
                                    name="formaPago"
                                    value={mantenimiento.formaPago}
                                    onChange={handleInputChange}
                                    required
                                  >
                                    <option defaultValue={""} hidden value="">Forma de Pago</option>
                                    <option value="efectivo">Efectivo</option>
                                    <option value="transfer">Transferencia</option>
                                    <option value="credit-debit">Tarjeta de Credito o Debito</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group py-5">
                                <label>Seleccionar Vehiculo que tendra el mantenimiento</label>
                                <select
                                  id="formaPago"
                                  className="form-select"
                                  name="formaPago"
                                  required
                                >
                                  <option defaultValue={""} hidden value="">Vehiculos registrados</option>
                                  <option value="vehiculo1">FORD F150</option>
                                  <option value="vehiculo2">BUGGATI CHIRON</option>
                                  <option value="vehiculo3">MAZDA CX-30</option>
                                </select>
                              </div>

                              <div className="d-flex justify-content-center">
                                <button
                                  className="btn btn-primary btn-block my-2"
                                  type="button"
                                >
                                  Registrar
                                </button>
                                <button type="button" className="btn btn-secondary btn-block my-2 mx-2" onClick={() => navigate(-1)}>Regresar</button>
                                <button id="btn_register_man" type="submit" hidden></button>
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
          </div>
        </div>
      </ResponsiveContainer >
    </React.Fragment >
  );
}

export default RegistroMantenimiento;