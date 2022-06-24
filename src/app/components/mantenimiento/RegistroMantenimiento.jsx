import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import { alert_error, alert_success } from '../../util/functions';
import * as authService from '../../auth/auth.service';

function RegistroMantenimiento() {
  const { id_mant, id_car } = useParams();

  const valores_iniciales = {
    nombre: "",
    placaVehiculo: "",
    kilometraje: "",
    costo: "",
    formaPago: "",
    taller: "",
  };

  const [mantenimiento, setMantenimiento] = useState(valores_iniciales);
  const [talleres, setTalleres] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let mantenimiento = upperCase();
      if(id_mant){
        authService.updateMantenimiento(mantenimiento, id_mant).then(response=>{
          if (parseInt(response.status) === 200) {
            alert_success("Exito!", "Mantenimiento actualizado correctamente.");
            setTimeout(() => { navigate("/home/vehiculo/"+id_car+"/mantenimientos") }, 1500);
          } else {
            alert_error("Error!", "No se pudo actualizar el mantenimiento.");
          }
        });
      }else{
        authService.addMantenimiento(mantenimiento).then(response=>{
          if(parseInt(response.status)===201){
            alert_success("Exito!", "Mantenimiento creado correctamente.");
            setTimeout(() => { navigate("/home/vehiculo/"+id_car+"/mantenimientos") }, 1500);
          }else{
            alert_error("Error!", "No se pudo agregar el mantenimiento.");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getVehiculo = () => {
    try {
      authService.findVehiculo(id_car).then(response => {
        if (parseInt(response.status) === 200) {
          response.json().then(vehiculo=>{
            setMantenimiento({...mantenimiento, "placaVehiculo": vehiculo.placa});
          });
        } else {
          console.log("No se encontró el vehiculo.")
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  const getTalleres = async () => {
    try {
      const response = await authService.getTalleres();
      response.json().then(value=>{
        if(parseInt(response.status)===200){
          setTalleres(value.rows);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    if (id_mant) {
      authService.findMantenimiento(id_mant).then(response => {
          if (response.error === "") {
            setMantenimiento(response.mantenimiento);
          } else {
            alert_error("Error!", "No se encontró ningun mantenimiento con esos datos.");
            setTimeout(() => { navigate(-1) }, 2000);
          }
      })
    }else{
      getVehiculo();
    }
    getTalleres();
  },[]);

  const handleInputChange = (e) => {
    setMantenimiento({ ...mantenimiento, [e.target.name]: e.target.value });
  };

  function upperCase() {
    const valores_iniciales = {
      placaVehiculo: mantenimiento.placaVehiculo,
      kilometraje: mantenimiento.kilometraje,
      costo: mantenimiento.costo,
      formaPago: mantenimiento.formaPago,
      taller: mantenimiento.taller,
      vehiculo: id_car,
    };
    return valores_iniciales;
  };

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="container">
          <Typography component="h2" variant="h5" color="dark" gutterBottom>
            {
              id_mant
                ? "Editar Mantenimiento"
                : "Registro del Mantenimiento"
            }
          </Typography>
          <hr />
          <div className="container-fluid">
            <form className="form-control" onSubmit={handleSubmit}>
              <div className="row row-sm-auto">
                <div className="form-group py-2">
                  <label className="required">Placa del Vehiculo</label>
                  <input disabled id="placaVehiculo" required name="placaVehiculo" value={mantenimiento.placaVehiculo} onChange={handleInputChange} maxLength="8" type="text" className="form-control" placeholder="Placa" aria-label="placa" />
                </div>
                <div className="form-group py-2">
                  <label className="required">Kilometraje necesario para Realizar Mantenimiento</label>
                  <input
                    id="kilometraje"
                    type="number"
                    className="form-control"
                    placeholder="Kilometraje del Mantenimiento"
                    name="kilometraje"
                    value={mantenimiento.kilometraje}
                    onChange={handleInputChange}
                    required
                    maxLength="7"
                  />
                </div>
                <div className="form-group py-2">
                  <label className="required">Costo del Mantenimiento</label>
                  <input
                    id="costo"
                    type="number"
                    className="form-control"
                    placeholder="Costo del Mantenimiento"
                    name="costo"
                    value={mantenimiento.costo}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group py-2">
                  <label className="required">Forma de Pago</label>
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
              <div className="form-group py-2">
                <label className="required">Seleccionar Taller</label>
                <select
                  id="taller"
                  className="form-select"
                  name="taller"
                  value={mantenimiento.taller}
                  onChange={handleInputChange}
                  required
                >
                  <option defaultValue={""} hidden value="">Talleres</option>
                  {
                    talleres.map((taller)=>(
                      <option key={taller.id} value={taller.id}>{taller.nombre}</option>
                    ))
                  }
                </select>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary btn-block my-2" type="submit">
                  {id_mant
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