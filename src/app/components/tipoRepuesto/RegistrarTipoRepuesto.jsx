import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import * as authService from '../../auth/auth.service';
import { alert_error, alert_success, firstCharUpper } from '../../util/functions';

function RegistrarTipoRepuesto() {
  const { id_tipoRepuesto } = useParams();

  const valores_iniciales = {
    nombre: "",
    descripcion: "",
  };

  const [tipoRepuesto, setTipoRepuesto] = useState(valores_iniciales);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tipoRepuesto = upperCase();
    try {
      if (id_tipoRepuesto) {
        const response = await authService.updateTipoRepuesto(tipoRepuesto, id_tipoRepuesto);
        if (parseInt(response.status) === 200) {
          alert_success("Exito!", "Tipo actualizado correctamente.");
          setTimeout(() => { navigate("/tiposRepuesto") }, 1500);
        } else {
          alert_error("Error!", "No se pudo actualizar el tipo.");
        }
      } else {
        const response = await authService.addTipoRepuesto(tipoRepuesto);
        if (parseInt(response.status) === 201) {
          alert_success("Exito!", "Tipo agregado correctamente.");
          setTimeout(() => { navigate("/tiposRepuesto") }, 1500);
        } else {
          alert_error("Error!", "No se pudo agregar el tipo.");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setTipoRepuesto({ ...tipoRepuesto, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (id_tipoRepuesto) {
      authService.findTipoRepuesto(id_tipoRepuesto).then(response => {
          if (response.error === "") {
            setTipoRepuesto(response.tipoRepuesto);
          } else {
            alert_error("Error!", "No se encontró ningun tipo con esos datos.");
            setTimeout(() => { navigate(-1) }, 2000);
          }
      })
    }
  }, []);

  function upperCase() {
    const valores_iniciales = {
      nombre: firstCharUpper(tipoRepuesto.nombre),
      descripcion: tipoRepuesto.descripcion,
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
                id_tipoRepuesto
                  ? "Editar Tipo Repuesto"
                  : "Registro Tipo Repuesto"
              }
            </Typography>
            <hr />
            <div className="container-fluid">
              <form className="form-control" onSubmit={handleSubmit}>
                <div className="row row-sm-auto">
                  <div className="form-group py-2">
                    <label>Nombre del Tipo Repuesto</label>
                    <input
                      id="nombre"
                      type="text"
                      className="form-control"
                      placeholder="Nombre del Tipo"
                      name="nombre"
                      value={tipoRepuesto.nombre}
                      onChange={handleInputChange}
                      required
                      maxLength="50"
                    />
                  </div>
                  <div className="form-group py-2">
                    <label>Descripcion del Tipo Repuesto</label>
                    <input
                      id="descripcion"
                      type="text"
                      className="form-control"
                      placeholder="Descripcion del Tipo"
                      name="descripcion"
                      value={tipoRepuesto.descripcion}
                      onChange={handleInputChange}
                      required
                      maxLength="254"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary btn-block my-2" type="submit">
                    {
                      id_tipoRepuesto
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

export default RegistrarTipoRepuesto;