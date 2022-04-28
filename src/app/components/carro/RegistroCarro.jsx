import React from "react";
import { ResponsiveContainer } from 'recharts';



function RegistroCarro() {
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
                        <div className="col-lg-10 col-xl-15 mx-auto">
                          <h3 className="display-2 text-center">Registro de Vehiculo</h3>
                          <form>
                            <div className="form-group py-2">
                              <label>Marca del Vehiculo</label>
                              <select
                                id="marcaVehiculo"
                                className="form-select"
                                name="marcaVehiculo"
                                required
                              >
                                <option defaultValue={""} hidden value="">Marcas</option>
                                <option value="Rolls">Rolls Royce</option>
                                <option value="Lamborghini">Lamborghini</option>
                                <option value="Ferrari">Ferrari</option>
                                <option value="Renault">Renault</option>
                                <option value="Renault">Mercedes Benz</option>
                              </select>
                            </div>
                            <div className="form-group py-2">
                              <label>Modelo</label>
                              <input
                                id="modelo"
                                type="text"
                                className="form-control"
                                placeholder="Modelo"
                                name="modelo"
                                required
                              />
                            </div>
                            <div className="form-group py-2 ">
                              <label>Linea</label>
                              <input
                                id="linea"
                                type="text"
                                className="form-control"
                                placeholder="linea"
                                name="linea"
                                required
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Color</label>
                              <input
                                id="color"
                                type="text"
                                className="form-control"
                                placeholder="Color"
                                name="color"
                                required
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Numero de Serie</label>
                              <input
                                id="num-serie"
                                type="number"
                                className="form-control"
                                placeholder="Numero de Serie"
                                name="num-serie"
                                required
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Numero de Chasis</label>
                              <input
                                id="num-chasis"
                                type="number"
                                className="form-control"
                                placeholder="Numero de Chasis"
                                name="num-chasis"
                                required
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Numero de Motor</label>
                              <input
                                id="num-motor"
                                type="number"
                                className="form-control"
                                placeholder="Numero de Motor"
                                name="num-motor"
                                required
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Tipo de Combustible</label>
                              <select
                                id="tipoCombustible"
                                className="form-select"
                                name="tipoCombustible"
                                required
                              >
                                <option defaultValue={""} hidden value="">Tipo de Combustible</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Gasolina">Gasolina</option>
                              </select>
                            </div>
                            <div className="form-group py-2">
                              <label>Kilometraje Actual del Vehiculo</label>
                              <input
                                id="kilometraje-actual"
                                type="number"
                                className="form-control"
                                placeholder="Kilometraje Actual del Vehiculo"
                                name="kilometraje-actual"
                                required
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Kilometraje del Ultimo Mantenimiento</label>
                              <input
                                id="kilometraje-ultiMantenimiento"
                                type="number"
                                className="form-control"
                                placeholder="Kilometraje del Ultimo Mantenimiento"
                                name="kilometraje-ultiMantenimiento"
                                required
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Nombre del Conductor</label>
                              <input
                                id="nom-conductor"
                                type="text"
                                className="form-control"
                                placeholder="Nombre del Conductor"
                                name="nom-conductor"
                                required
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Foto del Conductor</label>
                              <input
                                id="formFile"
                                className="form-control"
                                type="file"
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Fecha de SOAT:</label> <br />
                              <input 
                              id="fecha-soat" 
                              type="date" 
                              className="form-control"
                              name="fecha-soat"
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Fecha de Tecnico Mecanica:</label> <br />
                              <input 
                              id="fecha-soat" 
                              type="date" 
                              className="form-control"
                              name="fecha-soat"
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Fecha de Matricula:</label> <br />
                              <input 
                              id="fecha-soat" 
                              type="date" 
                              className="form-control"
                              name="fecha-soat"
                              />
                            </div>

                            <div className="d-flex justify-content-center">
                              <button
                                id=""
                                className="btn btn-primary btn-block my-2"
                              >
                                Registrar
                              </button>
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
        </div >
      </ResponsiveContainer >
    </React.Fragment >
  );
}

export default RegistroCarro