import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import * as authService from '../../auth/auth.service';
import { alert_error, firstCharUpper,alert_success } from '../../util/functions';

function RegistrarMarca() {
  const { id } = useParams();

  const valores_iniciales = {
    nombre: "",
    descripcion: "",
  };

  const [marca, setMarca] = useState(valores_iniciales);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const marca = upperCase();
    try {
      if (id) {
        const response = await authService.updateMarca(marca, id);
        if (parseInt(response.status) === 200) {
          alert_success("Exito!", "Marca actualizada correctamente.");
          setTimeout(() => { navigate("/marcas") }, 1500);
        } else {
          alert_error("Error!", "No se pudo actualizar la marca.");
        }
      } else {
        const response = await authService.addMarca(marca);
          if (parseInt(response.status) === 201) {
            alert_success("Exito!", "Marca agregada correctamente.");
            setTimeout(() => { navigate("/marcas") }, 1500);
          } else {
            alert_error("Error!", "No se pudo agregar la marca.");
          }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setMarca({ ...marca, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (id) {
      authService.findMarca(id).then(response => {
        if (response.error === "") {
          setMarca(response.marca);
        } else {
          alert_error("Error!", "No se encontró ninguna marca con esos datos.");
          setTimeout(() => { navigate("/marcas") }, 2000);
        }
      })
    }
  }, []);

  function upperCase() {
    const valores_iniciales = {
      nombre: firstCharUpper(marca.nombre.toLowerCase()),
      descripcion: marca.descripcion,
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
                  ? "Editar Marca"
                  : "Registro Marca"
              }
            </Typography>
            <hr />
            <div className="container-fluid">
              <form className="form-control" onSubmit={handleSubmit}>
                <div className="row row-sm-auto">
                  <div className="form-group py-2">
                    <label className="required">Nombre de la Marca</label>
                    <input
                      id="nombre"
                      type="text"
                      className="form-control"
                      placeholder="Nombre de la Marca"
                      name="nombre"
                      value={marca.nombre}
                      onChange={handleInputChange}
                      required
                      maxLength="100"
                    />
                  </div>
                  <div className="form-group py-2">
                    <label className="required">Descripcion de la Marca</label>
                    <input
                      id="descripcion"
                      type="text"
                      className="form-control"
                      placeholder="Descripcion de la Marca"
                      name="descripcion"
                      value={marca.descripcion}
                      onChange={handleInputChange}
                      maxLength="200"
                      required
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

export default RegistrarMarca;