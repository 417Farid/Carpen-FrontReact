import React from "react";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from "react-router-dom";
import * as authService from '../../auth/auth.service';
import { alert_error } from "../../util/functions";

const Intervalo = ({ id_intervalo, id, count }) => {
     const [intervalo, setIntervalo] = React.useState([]);

     function getIntervalo() {
          try {
               authService.getIntervalo(id_intervalo).then(response => {
                    if (response.error === "") {
                         setIntervalo(response.intervalo);
                    }
               });
          } catch (error) {
               console.log(error);
          }
     }

     React.useInsertionEffect(() => {
          getIntervalo();
     }, []);

     return (
          <tr key={id} className="text-center">
               <td scope="row">{count}</td>
               <td scope="col">{intervalo.intervalo}</td>
               <td scope="col">{intervalo.descripcion}</td>
          </tr>
     );
}

const Operacion = ({ operacion }) => {

     const [intervalos, setIntervalos] = React.useState([]);
     const [linea, setLinea] = React.useState({
          nombre: "",
          descripcion: "",
     });

     function getIntervalos() {
          try {
               authService.getIntervalos_Operacion(operacion.id).then(response => {
                    if (response.error === "") {
                         setIntervalos(response.intervalos);
                    }
               });
          } catch (error) {
               console.log(error);
          }
     }

     function getLinea() {
          try {
               authService.findLinea(operacion.lineaVehiculo).then(response => {
                    if (response.error === "") {
                         setLinea(response.linea);
                    }
               });
          } catch (error) {
               console.log(error);
          }
     }

     React.useInsertionEffect(() => {
          getIntervalos();
          getLinea();
     }, []);

     return (
          <div className="container-fluid">
               <div className="row row-cols-sm-2 row-cols-1 mx-auto">
                    <div className="card shadow bg-body mt-2 rounded col-xs-12 col-sm-6">
                         <div className="card-body">
                              <h5 className="card-title text-center">Operacion</h5>
                              <div className="card p-3 rounded shadow mb-2">
                                   <div className="card-text mb-1"><b>Nombre: </b>{operacion.nombre}</div>
                                   <div className="card-text"><b>Descripcion: </b>{operacion.descripcion}</div>
                              </div>
                         </div>
                    </div>
                    <div className="card shadow bg-body mt-2 rounded col-xs-12 col-sm-6">
                         <div className="card-body">
                              <h5 className="card-title text-center mb-2">Linea</h5>
                              <div className="card p-3 rounded shadow">
                                   <div className="card-text mb-1"><b>Nombre: </b>{linea.nombre}</div>
                                   <div className="card-text"><b>Descripcion: </b>{linea.descripcion}</div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="card shadow mt-2 p-2 bg-body rounded">
                    <div className="card-body">
                         <h5 className="card-title text-center">Intervalos</h5>
                         <div className="mt-2 row mx-auto">
                              {
                                   (() => {
                                        if (intervalos.length === 0) {
                                             return (<h2>No se encontraron intervalos.</h2>)
                                        } else {
                                             return (
                                                  <div className="table-responsive">
                                                       <table className="table table-striped table-bordered shadow">
                                                            <thead>
                                                                 <tr className='text-center'>
                                                                      <th scope="col">#</th>
                                                                      <th scope="col">{"Intervalo (KM)"}</th>
                                                                      <th scope="col">Descripcion</th>
                                                                 </tr>
                                                            </thead>
                                                            <tbody>
                                                                 {(() => {
                                                                      return (
                                                                           intervalos.map((intervalo, index) => (
                                                                                <Intervalo key={intervalo.pk} id_intervalo={intervalo.fields.intervaloKilometraje} id={intervalo.pk} count={index + 1} />
                                                                           ))
                                                                      )
                                                                 })()}
                                                            </tbody>
                                                       </table>
                                                  </div>
                                             )
                                        }
                                   })()
                              }
                         </div>
                    </div>
               </div>
          </div>
     );
}

const DetalleOperacion = () => {
     const [operacion, setOperacion] = React.useState();
     const { id } = useParams();
     const navigate = useNavigate();

     const getOperacion = async () => {
          try {
               const response = await authService.findOperacion(id);
               if (response.error === "") {
                    setOperacion(response.operacion);
               } else {
                    alert_error("Error!", "No se encontró ninguna operacion con esos datos.");
                    setTimeout(() => { navigate(-1) }, 2000);
               }
          } catch (error) {
               console.log(error);
          }
     }

     React.useInsertionEffect(() => {
          getOperacion();
     }, []);

     return (
          <div className="container">
               <Typography component="h2" variant="h5" color="dark" gutterBottom>
                    Información de la Operacion
               </Typography>
               <hr />
               <div className="container-fluid">
                    {
                         operacion
                              ? <Operacion operacion={operacion} />
                              : <div className="mx-auto text-center"><h1>No se encontró la operacion.</h1></div>
                    }
               </div>
          </div>
     );
}

export default DetalleOperacion;