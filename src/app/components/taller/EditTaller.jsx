import React from "react";
import { ResponsiveContainer } from 'recharts';



function EditarTaller() {
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
                          <h3 className="display-2 text-center py-5">Editar Taller</h3>
                          <form>
                            <div className="form-group py-2">   
                              <label>Nombre del Taller</label>
                              <input
                                id="nomTaller"
                                type="text"
                                className="form-control"
                                placeholder="CENTRO DE SERVICIOS AUTOMOTRIZ LAS BANDERAS"
                                name="nomTaller"
                                required
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Latitud de su Ubicacion</label>
                              <input
                                id="latitud"
                                type="text"
                                className="form-control"
                                placeholder="+90° norte"
                                name="latitud"
                                required
                              />
                            </div>
                            <div className="form-group py-2 ">
                              <label>Longuitud de su Ubicacion</label>
                              <input
                                id="longuitud"
                                type="text"
                                className="form-control"
                                placeholder="+180° Este"
                                name="longuitud"
                                required
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Direccion del Taller</label>
                              <input
                                id="direccionT"
                                type="text"
                                className="form-control"
                                placeholder="Av. 3 Este #No. 2-52"
                                name="direccionT"
                                required
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Telefono del Taller</label>
                              <input
                                id="telefonoT"
                                type="number"
                                className="form-control"
                                placeholder="3508938179"
                                name="telefonoT"
                                required
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Pagina Web (Link o Url)</label>
                              <input
                                id="paginaWeb"
                                type="number"
                                className="form-control"
                                placeholder="https://centro-de-servicios-automotriz-las-banderas.negocio.site/"
                                name="paginaWeb"
                              />
                            </div>
                            <div className="form-group py-2">
                              <label>Email de Contacto</label>
                              <input
                                id="emailT"
                                type="number"
                                className="form-control"
                                placeholder="banderas@gmail.com"
                                name="emailT"
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <button
                                id=""
                                className="btn btn-primary btn-block my-2"
                              >
                                Editar
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

export default EditarTaller