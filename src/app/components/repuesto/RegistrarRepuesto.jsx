import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import * as authService from '../../auth/auth.service';
import { alert_error, alert_success, firstCharUpper, generateClick } from '../../util/functions';

function RegistrarRepuesto() {

  const { id_repuesto, id_tipoRepuesto } = useParams();

  const valores_iniciales = {
    nombre: "",
    descripcion: "",
    marca: "",
    fabricante: "",
    foto: "",
    claseRepuesto: "",
  };

  const [repuesto, setRepuesto] = useState(valores_iniciales);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const repuesto = upperCase();
    try {
      if (id_repuesto) {
        const response = await authService.updateRepuesto(repuesto, id_repuesto);
        if (parseInt(response.status) === 200) {
          alert_success("Exito!", "Repuesto actualizado correctamente.");
          setTimeout(() => { navigate("/repuestos") }, 1500);
        } else {
          alert_error("Error!", "No se pudo actualizar el repuesto.");
        }
      } else {
        const response = await authService.addRepuesto(repuesto, id_tipoRepuesto);
        if (parseInt(response.status) === 201) {
          alert_success("Exito!", "Repuesto agregado correctamente.");
          setTimeout(() => { navigate("/repuestos") }, 1500);
        } else {
          alert_error("Error!", "No se pudo agregar el repuesto.");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setRepuesto({ ...repuesto, [e.target.name]: e.target.value });
  };

  function upperCase() {
    const valores_iniciales = {
      nombre: firstCharUpper(repuesto.nombre),
      descripcion: repuesto.descripcion,
      marca: firstCharUpper(repuesto.marca),
      fabricante: firstCharUpper(repuesto.fabricante),
      claseRepuesto: repuesto.claseRepuesto,
      foto: document.getElementById("foto").value,
    };
    return valores_iniciales;
  };

  useEffect(() => {
    if (id_repuesto) {
      authService.findRepuesto(id_repuesto).then(response => {
        if (response.error === "") {
          setRepuesto(response.repuesto);
        } else {
          alert_error("Error!", "No se encontró ningun repuesto con esos datos.");
          setTimeout(() => { navigate(-1) }, 2000);
        }
      })
    }
  }, []);

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="container">
          <Typography component="h2" variant="h5" color="dark" gutterBottom>
            {
              id_repuesto
                ? "Editar Repuesto"
                : "Registrar Repuesto"
            }
          </Typography>
          <hr />
          <div className="container-fluid">
            <form className="form-control" onSubmit={handleSubmit}>
              <div className="row row-sm-auto">
                <div className="form-group py-2">
                  <label>Nombre del Repuesto</label>
                  <input
                    id="nombre"
                    type="text"
                    className="form-control"
                    placeholder="Nombre del Repuesto"
                    name="nombre"
                    value={repuesto.nombre}
                    onChange={handleInputChange}
                    required
                    maxLength="50"
                  />
                </div>
                <div className="form-group py-2">
                  <label>Descripcion del Repuesto</label>
                  <input
                    id="descripcion"
                    type="text"
                    className="form-control"
                    placeholder="Descripcion del Repuesto"
                    name="descripcion"
                    value={repuesto.descripcion}
                    onChange={handleInputChange}
                    required
                    maxLength="100"
                  />
                </div>
                <div className="form-group py-2">
                  <label>Marca del Repuesto</label>
                  <input
                    id="marca"
                    type="text"
                    className="form-control"
                    placeholder="Marca del Repuesto"
                    name="marca"
                    value={repuesto.marca}
                    onChange={handleInputChange}
                    required
                    maxLength="30"
                  />
                </div>
                <div className="form-group py-2">
                  <label>Fabricante del Repuesto</label>
                  <input
                    id="fabricante"
                    type="text"
                    className="form-control"
                    placeholder="Fabricante del Repuesto"
                    name="fabricante"
                    value={repuesto.fabricante}
                    onChange={handleInputChange}
                    required
                    maxLength="30"
                  />
                </div>
                <div className="form-group py-2">
                  <label>Clase del Repuesto</label>
                  <select
                    id="claseRepuesto"
                    className="form-select"
                    name="claseRepuesto"
                    value={repuesto.claseRepuesto}
                    onChange={handleInputChange}
                    required
                  >
                    <option defaultValue={""} hidden value="">Clase Repuesto</option>
                    <option value="Original">Original</option>
                    <option value="Generico">Generico</option>
                    <option value="Alternativo">Alternativo</option>
                  </select>
                </div>
                <div className="form-group py-2" hidden={id_repuesto?true:false}>
                  <label>Foto del Repuesto</label>
                  <input
                    id="formFile"
                    className="form-control"
                    type="file"
                    accept="image/png, image/jpeg"
                    required
                  />
                  <input type="text" name="foto" id="foto" value={repuesto.foto}
                    onChange={handleInputChange} hidden />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary btn-block my-2" type="button" onClick={()=>{
                  if(id_repuesto){
                    generateClick();
                  }
                }}>
                  {
                    id_repuesto
                      ? "Actualizar"
                      : "Registrar"
                  }
                </button>
                <button type="button" className="btn btn-secondary btn-block my-2 mx-2" onClick={() => navigate(-1)}>Regresar</button>
                  <button id="btn_register" type="submit" hidden></button>
              </div>
            </form>
          </div>
        </div>
      </ResponsiveContainer >
    </React.Fragment >
  );
}

export default RegistrarRepuesto;