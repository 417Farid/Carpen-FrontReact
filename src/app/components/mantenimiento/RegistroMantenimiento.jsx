import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import {firstCharUpper} from '../../util/functions';


function RegistroMantenimiento() {
  const  {id} = useParams();

  const valores_iniciales = {
    nombre: "",
    placa: "",
    fechaMantenimiento: "",
    kilometrajeMantenimiento: "",
    costo: "",
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
      nombre: firstCharUpper(mantenimiento.nombre),
      placa: mantenimiento.valor1_placa.toUpperCase() + "-" + mantenimiento.valor2_placa.toUpperCase(),
      fechaMantenimiento: mantenimiento.fechaMantenimiento,
      kilometrajeMantenimiento: mantenimiento.kilometrajeMantenimiento,
      costo: mantenimiento.costo,
      formaPago: mantenimiento.formaPago,
    };
    return valores_iniciales;
  };

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="container">
          <Typography component="h2" variant="h5" color="dark" gutterBottom>
            {
              id
              ? "Editar Mantenimiento"
              : "Registro del Mantenimiento"
            }
          </Typography>
          <hr />
          <div className="container-fluid">
            <form className="form-control" onSubmit={handleSubmit}>
              <div className="row row-sm-auto">
                <div className="form-group py-2">
                  <label>Nombre del Mantenimiento</label>
                  <input
                    id="nombre"
                    type="text"
                    className="form-control"
                    placeholder="Nombre del Mantenimiento"
                    name="nombre"
                    value={mantenimiento.nombre}
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
                  <label>Kilometraje necesario para Realizar Mantenimiento</label>
                  <input
                    id="kilometrajeMantenimiento"
                    type="number"
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
                  <label>Costo del Mantenimiento</label>
                  <input
                    id="costo"
                    type="number"
                    className="form-control"
                    placeholder="Costo del Mantenimiento"
                    name="costo"
                    value={mantenimiento.costo}
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
                  id="vehiculo"
                  className="form-select"
                  name="vehiculo"
                  required
                >
                  <option defaultValue={""} hidden value="">Vehiculos registrados</option>
                  <option value="vehiculo1">FORD F150</option>
                  <option value="vehiculo2">BUGGATI CHIRON</option>
                </select>
              </div>

              <div className="d-flex justify-content-center">
                <button className="btn btn-primary btn-block my-2" type="submit">
                  {id
                    ? "Actualizar"
                    : "Registrar"
                  }
                </button>
                <button type="button" className="btn btn-secondary btn-block my-2 mx-2" onClick={() => navigate(-1)}>Regresar</button>
              </div>
            </form>
          </div>
        </div>
      </ResponsiveContainer >
    </React.Fragment >
  );
}

export default RegistroMantenimiento;