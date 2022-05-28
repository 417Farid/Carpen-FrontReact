import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import * as authService from '../../auth/auth.service';
import { alert_error, alert_success} from '../../util/functions';

function RegistrarIntervalo() {
  const { id } = useParams();

  const valores_iniciales = {
    intervalo: "",
    descripcion: "",
  };

  const [intervalo, setIntervalo] = useState(valores_iniciales);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const response = await authService.updateIntervalo(intervalo, id);
        if (parseInt(response.status) === 200) {
          alert_success("Exito!", "Intervalo actualizado correctamente.");
          setTimeout(() => { navigate("/intervalos") }, 1500);
        } else {
          alert_error("Error!", "No se pudo actualizar el Intervalo.");
        }
      } else {
        const response = await authService.addIntervalo(intervalo);
        if (parseInt(response.status) === 201) {
          alert_success("Exito!", "Intervalo agregado correctamente.");
          setTimeout(() => { navigate("/intervalos") }, 1500);
        } else {
          alert_error("Error!", "No se pudo agregar el intervalo.");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setIntervalo({ ...intervalo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (id) {
      authService.findIntervalo(id).then(response => {
          if (response.error === "") {
            setIntervalo(response.intervalo);
          } else {
            alert_error("Error!", "No se encontró ningun Intervalo con esos datos.");
            setTimeout(() => { navigate(-1) }, 2000);
          }
      })
    }
  }, []);

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="container">
          <div className="container-fluid">
            <Typography component="h2" variant="h5" color="dark" gutterBottom>
              {
                id
                  ? "Editar Intervalo "
                  : "Registro Intervalo "
              }
            </Typography>
            <hr />
            <div className="container-fluid">
              <form className="form-control" onSubmit={handleSubmit}>
                <div className="row row-sm-auto">
                  <div className="form-group py-2">
                    <label className="required">Intervalo del Kilometraje</label>
                    <input
                      id="intervalo"
                      type="text"
                      className="form-control"
                      placeholder="Intervalo"
                      name="intervalo"
                      value={intervalo.intervalo}
                      onChange={handleInputChange}
                      required
                      maxLength="50"
                    />
                  </div>
                  <div className="form-group py-2">
                    <label className="required">Descripcion del Intervalo</label>
                    <input
                      id="descripcion"
                      type="text"
                      className="form-control"
                      placeholder="Descripcion del Intervalo"
                      name="descripcion"
                      value={intervalo.descripcion}
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

export default RegistrarIntervalo;