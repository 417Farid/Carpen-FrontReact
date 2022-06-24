import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ResponsiveContainer } from 'recharts';
import Typography from '@mui/material/Typography';
import NoOperacion from '../operacion/NoOperacion';

import * as authService from "../../auth/auth.service";
import { alert_error, alert_success } from '../../util/functions';

const TallerOperacion = () => {
     const { id_taller } = useParams();

     const [tallerOperacion, setTallerOperacion] = useState({
          operacion: "",
          taller: "",
          costo: "",
     });
     const [operaciones, setOperaciones] = useState([]);
     const navigate = useNavigate();

     const handleSubmit = async (e) => {
          e.preventDefault();
          tallerOperacion.taller=id_taller;
          try {
               authService.addTallerOperacion(tallerOperacion).then(response=>{
                    if (parseInt(response.status)===201) {
                         alert_success("Exito!", "Operacion agregada correctamente al taller.");
                         setTimeout(() => { navigate(-1)}, 1500);
                    }else{
                         alert_error("Error!", "No se pudo agregar la operacion al taller.");
                    }
               });
          } catch (error) {
               console.log(error);
          }
     }

     const listOperaciones = async () => {
          try {
               const response = await authService.getOperaciones();
               if (response.error === "") {
                    let array = response.rows;
                    authService.getOperaciones_Taller(id_taller).then(response=>{
                         response.operaciones.forEach(element => {
                              for (let index = 0; index < array.length; index++) {
                                   if(element.operacion===array[index].id){
                                        array.splice(index,1);
                                   }
                              }
                         });
                         setOperaciones(array);
                    });
               }
          } catch (error) {
               console.log(error);
          }
     };

     const handleInputChange = (e) => {
          setTallerOperacion({ ...tallerOperacion, [e.target.name]: e.target.value });
          document.getElementById("costo_tallerOperacion").hidden=false;
     };

     useEffect(() => {
          if (operaciones.length === 0) {
               listOperaciones();
          }
     }, []);

     return (
          <React.Fragment>
               <ResponsiveContainer>
                    <div className="container">
                         <Typography component="h2" variant="h5" color="dark" gutterBottom>
                              Operaciones Disponibles
                         </Typography>
                         <hr />
                         <div className="container-fluid">
                              <form className="form-control" onSubmit={handleSubmit}>
                                   <div className="row row-sm-auto">
                                        <div className="form-group py-2 ">
                                             <label className="required">Operaciones</label>
                                             <select
                                                  id="operacion"
                                                  className="form-select"
                                                  name="operacion"
                                                  value={tallerOperacion.operacion}
                                                  onChange={handleInputChange}
                                                  required
                                             >
                                                  <option defaultValue={""} hidden value="">
                                                       Operacion
                                                  </option>
                                                  {(() => {
                                                       if (operaciones.length > 0) {
                                                            return operaciones.map((operacion) => (
                                                                 <option key={operacion.id} value={operacion.id}>
                                                                      {operacion.nombre}
                                                                 </option>
                                                            ));
                                                       }
                                                  })()}
                                             </select>
                                        </div>
                                        <div id='costo_tallerOperacion' className="form-group py-2" hidden>
                                             <label className="required">Costo</label>
                                             <input
                                                  id="costo"
                                                  type="number"
                                                  className="form-control"
                                                  placeholder="Costo"
                                                  name="costo"
                                                  value={tallerOperacion.costo}
                                                  onChange={handleInputChange}
                                                  required
                                             />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                             <button className="btn btn-primary btn-block my-2" type="submit">Guardar</button>
                                             <button type="button" className="btn btn-secondary btn-block my-2 mx-2" onClick={() => navigate(-1)}>Regresar</button>
                                        </div>
                                   </div>
                              </form>
                         </div>
                    </div>
               </ResponsiveContainer >
          </React.Fragment >
     )
}

export default TallerOperacion;