import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';


function RegistrarOperacion() {

  const valores_iniciales = {
    nombreOperacion: "",
    descripcionOperacion: "",
  };

  const [operacion, setOperacion] = useState(valores_iniciales);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  };

  const handleInputChange = (e) => {
    setOperacion({ ...operacion, [e.target.name]: e.target.value });
  };

  function upperCase() {
    const valores_iniciales = {
        nombreOperacion: firstCharUpper(operacion.nombreOperacion),
        descripcionOperacion: firstCharUpper(operacion.descripcionOperacion),
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
                            Registro del Repuesto
                          </Typography>
                          <hr />
                          <div className="container-fluid">
                            <form className="form-control" onSubmit={handleSubmit}>
                              <div className="row row-sm-auto">
                                <div className="form-group py-2">
                                  <label>Nombre de la Operacion</label>
                                  <input
                                    id="nombreOperacion"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de la Operacion"
                                    name="nombreOperacion"
                                    value={operacion.descripcionOperacion}
                                    onChange={handleInputChange}
                                    required
                                    maxLength="50"
                                  />
                                </div>
                                <div className="form-group py-2">
                                  <label>Descripcion de la Operacion</label>
                                  <input
                                    id="descripcionOperacion"
                                    type="text"
                                    className="form-control"
                                    placeholder="Descripcion de la Operacion"
                                    name="descripcionOperacion"
                                    value={operacion.descripcionRepuesto}
                                    onChange={handleInputChange}
                                    required
                                    maxLength="100"
                                  />
                                </div>
                              </div>
                              <div className="d-flex justify-content-center">
                                <button
                                  className="btn btn-primary btn-block my-2"
                                  type="button"
                                >
                                  Registrar
                                </button>
                                <button type="button" className="btn btn-secondary btn-block my-2 mx-2" onClick={() => navigate(-1)}>Regresar</button>
                                <button id="btn_register_ops" type="submit" hidden></button>
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

export default RegistrarOperacion;