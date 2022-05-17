import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import * as authService from '../../auth/auth.service';
import { alert_error, firstCharUpper,alert_success } from '../../util/functions';

function RegistrarLinea() {
  const { id_linea,id_marca } = useParams();

  const valores_iniciales = {
    nombre: "",
    descripcion: "",
  };

  const [linea, setLinea] = useState(valores_iniciales);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const linea = upperCase();
    try {
      if (id_linea) {
        const response = await authService.updateLinea(linea, id_linea);
        if (parseInt(response.status) === 200) {
          alert_success("Exito!", "Linea actualizada correctamente.");
          setTimeout(() => { navigate(-1) }, 1500);
        } else {
          alert_error("Error!", "No se pudo actualizar la linea.");
        }
      } else {
        const response = await authService.addLinea(linea, id_marca);
          if (parseInt(response.status) === 201) {
            alert_success("Exito!", "Linea agregada correctamente.");
            setTimeout(() => { navigate(-1) }, 1500);
          } else {
            alert_error("Error!", "No se pudo agregar la linea.");
          }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id_linea) {
      authService.findLinea(id_linea).then(response => {
        if (response.error === "") {
          setLinea(response.linea);
        } else {
          alert_error("Error!", "No se encontró ninguna linea con esos datos.");
          setTimeout(() => { navigate(-1) }, 2000);
        }
      })
    }
  }, []);

  const handleInputChange = (e) => {
    setLinea({ ...linea, [e.target.name]: e.target.value });
  };

  function upperCase() {
    const valores_iniciales = {
      nombre: firstCharUpper(linea.nombre),
      descripcion: linea.descripcion,
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
                id_linea
                  ? "Editar Linea"
                  : "Registro Linea"
              }
            </Typography>
            <hr />
            <div className="container-fluid">
              <form className="form-control" onSubmit={handleSubmit}>
                <div className="row row-sm-auto">
                  <div className="form-group py-2">
                    <label>Nombre de la Linea</label>
                    <input
                      id="nombre"
                      type="text"
                      className="form-control"
                      placeholder="Nombre de la Linea"
                      name="nombre"
                      value={linea.nombre}
                      onChange={handleInputChange}
                      required
                      maxLength="50"
                    />
                  </div>
                  <div className="form-group py-2">
                    <label>Descripcion de la Linea</label>
                    <input
                      id="descripcion"
                      type="text"
                      className="form-control"
                      placeholder="Descripcion de la Linea"
                      name="descripcion"
                      value={linea.descripcion}
                      onChange={handleInputChange}
                      required
                      maxLength="100"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary btn-block my-2" type="submit">
                    {
                      id_linea
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

export default RegistrarLinea;