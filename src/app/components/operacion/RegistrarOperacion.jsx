import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import * as authService from '../../auth/auth.service';
import { alert_error, alert_success, firstCharUpper } from '../../util/functions';

function RegistrarOperacion() {
  const { id } = useParams();

  const valores_iniciales = {
    nombre: "",
    descripcion: "",
  };

  const [operacion, setOperacion] = useState(valores_iniciales);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const operacion = upperCase();
    try {
      if (id) {
        const response = await authService.updateOperacion(operacion, id);
        if (parseInt(response.status) === 200) {
          alert_success("Exito!", "Operacion actualizada correctamente.");
          setTimeout(() => { navigate("/operaciones") }, 1500);
        } else {
          alert_error("Error!", "No se pudo actualizar la operacion.");
        }
      } else {
        const response = await authService.addOperacion(operacion);
        if (parseInt(response.status) === 201) {
          alert_success("Exito!", "Operacion agregada correctamente.");
          setTimeout(() => { navigate("/operaciones") }, 1500);
        } else {
          alert_error("Error!", "No se pudo agregar la operacion.");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setOperacion({ ...operacion, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (id) {
      authService.findOperacion(id).then(response => {
        if (response.error === "") {
          setOperacion(response.operacion);
        } else {
          alert_error("Error!", "No se encontró ninguna Operacion con esos datos.");
          setTimeout(() => { navigate(-1) }, 2000);
        }
      })
    }
  }, []);

  function upperCase() {
    const valores_iniciales = {
      nombre: firstCharUpper(operacion.nombre),
      descripcion: operacion.descripcion,
    };
    return valores_iniciales;
  };

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="container">
          <div className="container-fluid">
            <Typography component="h2" variant="h5" color="dark" gutterBottom>
              {
                id
                  ? "Editar Operación Mantenimiento"
                  : "Registro Operación Mantenimiento"
              }
            </Typography>
            <hr />
            <div className="container-fluid">
              <form className="form-control" onSubmit={handleSubmit}>
                <div className="row row-sm-auto">
                  <div className="form-group py-2">
                    <label className="required">Nombre de la Operacion</label>
                    <input
                      id="nombre"
                      type="text"
                      className="form-control"
                      placeholder="Nombre de la Operacion"
                      name="nombre"
                      value={operacion.nombre}
                      onChange={handleInputChange}
                      required
                      maxLength="50"
                    />
                  </div>
                  <div className="form-group py-2">
                    <label className="required">Descripcion de la Operacion</label>
                    <input
                      id="descripcion"
                      type="text"
                      className="form-control"
                      placeholder="Descripcion de la Operacion"
                      name="descripcion"
                      value={operacion.descripcion}
                      onChange={handleInputChange}
                      required
                      maxLength="100"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary btn-block my-2" type="submit">
                    {
                      id
                        ? "Actualizar"
                        : "Registrar"
                    }
                  </button>
                  <button type="button" className="btn btn-secondary btn-block my-2 mx-2" onClick={() => navigate(-1)}>Regresar</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </ResponsiveContainer >
    </React.Fragment >
  );
}

export default RegistrarOperacion;