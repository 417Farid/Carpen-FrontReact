import React, { useEffect, useState } from "react";
import { ResponsiveContainer } from 'recharts';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from "react-router-dom";
import * as authService from '../../auth/auth.service';
import { alert_error, alert_success, firstCharUpper } from '../../util/functions';

function RegistroTaller() {
  const { id } = useParams();

  const valores_iniciales = {
    nombre: "",
    latitud: "",
    longitud: "",
    direccion: "",
    telefono: "",
    paginaWeb: "",
    email: "",
  }

  const navigate = useNavigate();
  const [taller, setTaller] = useState(valores_iniciales);

  async function handleSubmit(e) {
    e.preventDefault();
    const taller = upperCase();
    try {
      if (id) {
        const response = await authService.updateTaller(taller, id);
        if (parseInt(response.status) === 200) {
          alert_success("Exito!", "Taller actualizado correctamente.");
          setTimeout(() => { navigate("/talleres") }, 1500);
        } else {
          alert_error("Error!", "No se pudo actualizar el taller.");
        }
      } else {
        const response = await authService.addTaller(taller);
        if (parseInt(response.status) === 200) {
          alert_success("Exito!", "Taller agregado correctamente.");
          setTimeout(() => { navigate("/talleres") }, 1500);
        } else {
          alert_error("Error!", "No se pudo agregar el taller.");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  function upperCase() {
    const valores_iniciales = {
      nombre: firstCharUpper(taller.nombre),
      latitud: taller.latitud,
      longitud: taller.longitud,
      direccion: taller.direccion,
      telefono: taller.telefono,
      paginaWeb: taller.paginaWeb,
      email: taller.email.toUpperCase(),
    }
    return valores_iniciales;
  }

  const handleInputChange = (e) => {
    setTaller({ ...taller, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (id) {
      authService.findTaller(id).then(response => {
        response.json().then(value => {
          if (parseInt(response.status) === 200) {
            setTaller(value);
          } else {
            alert_error("Error!", "No se encontró ningun taller con esos datos.");
            setTimeout(() => { navigate("/talleres") }, 2000);
          }
        });
      })
    }
  }, []);

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="container">
          <Typography component="h2" variant="h5" color="dark" gutterBottom>
            Registro del Taller
          </Typography>
          <hr />
          <div className="container-fluid">
            <form className="form-control" onSubmit={handleSubmit} >
              <div className="row row-sm-auto row-cols-md-2">
                <div className="form-group py-2">
                  <label className="required">Nombre del Taller </label>
                  <input
                    id="nombre"
                    type="text"
                    className="form-control"
                    placeholder="Nombre del Taller"
                    name="nombre"
                    value={taller.nombre}
                    onChange={handleInputChange}
                    required
                    maxLength="128"
                  />
                </div>
                <div className="form-group py-2">
                  <label className="required">Latitud de su Ubicacion</label>
                  <input
                    id="latitud"
                    type="number"
                    className="form-control"
                    placeholder="Latitud"
                    name="latitud"
                    value={taller.latitud}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group py-2 ">
                  <label className="required">Longitud de su Ubicacion</label>
                  <input
                    id="longitud"
                    type="number"
                    className="form-control"
                    placeholder="Longitud"
                    name="longitud"
                    value={taller.longitud}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group py-2">
                  <label className="required">Direccion del Taller</label>
                  <input
                    id="direccion"
                    type="text"
                    className="form-control"
                    placeholder="Direccion"
                    name="direccion"
                    value={taller.direccion}
                    onChange={handleInputChange}
                    required
                    maxLength="255"
                  />
                </div>
                <div className="form-group py-2">
                  <label>Telefono del Taller</label>
                  <input
                    id="telefono"
                    type="tel"
                    className="form-control"
                    placeholder="Telefono"
                    name="telefono"
                    value={taller.telefono}
                    onChange={handleInputChange}
                    maxLength="15"
                  />
                </div>
                <div className="form-group py-2">
                  <label>Pagina Web (Link o Url)</label>
                  <input
                    id="paginaWeb"
                    type="url"
                    className="form-control"
                    placeholder="Pagina Web"
                    name="paginaWeb"
                    value={taller.paginaWeb}
                    onChange={handleInputChange}
                    maxLength="255"
                  />
                </div>
                <div className="form-group py-2">
                  <label>Email de Contacto</label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={taller.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary btn-block my-2">
                  {
                    id ? "Actualizar" : "Registrar"
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

export default RegistroTaller