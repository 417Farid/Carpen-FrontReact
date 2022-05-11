import React, { useEffect } from "react";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import * as authService from '../../auth/auth.service';

const Vehiculo = ({ vehiculo }) => {

     return (
          <div className="container">
               <Typography component="h2" variant="h5" color="dark" gutterBottom>
                    Información del Vehiculo
               </Typography>
               <hr />
               <div className="row row-cols-sm-2 row-cols-1 mx-auto">
                    <figure className="figure shadow p-3 mt-2 mb-0 bg-body rounded col-xs-12 col-sm-6">
                         <img src={vehiculo.foto} className="figure-img img-fluid rounded" alt="vehiculo" />
                         <figcaption className="figure-caption text-end">{vehiculo.marca + ' - ' + vehiculo.modelo}</figcaption>
                    </figure>
                    <div className="card shadow bg-body mt-2 rounded col-xs-12 col-sm-6">
                         <div className="card-body">
                              <h5 className="card-title text-center mb-2">Información Básica</h5>
                              <div className="p-3 rounded shadow">
                                   <div className="mb-1"><b>Marca: </b>{vehiculo.marca}</div>
                                   <div className="mb-1"><b>Modelo: </b>{vehiculo.modelo}</div>
                                   <div className="mb-1"><b>Linea: </b>{vehiculo.linea}</div>
                                   <div className="mb-1 d-flex">
                                        <div className="my-auto"><b>Color: </b>{vehiculo.color}</div>
                                        <input type="color" disabled value={vehiculo.color} className="mx-2 form-control form-control-color" id="exampleColorInput" title="Choose your color" />
                                   </div>
                                   <div className="mb-1"><b>Placa: </b>{vehiculo.placa}</div>
                                   <div className="mb-1"><b>Tipo Combustible: </b>{vehiculo.tipoCombustible}</div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="card shadow mt-2 p-3 bg-body rounded">
                    <div className="card-body">
                         <h5 className="card-title text-center">Información Avanzada</h5>
                         <div className="mt-2 row row-cols-sm-2 row-cols-1 mx-auto">
                              <div className="p-3 rounded shadow col-xs-12 col-sm-6 mt-2">
                                   <div><b>Número Serie: </b>{vehiculo.numeroSerie}</div>
                                   <div><b>Número Motor: </b>{vehiculo.numeroMotor}</div>
                                   <div><b>Número Chasís: </b>{vehiculo.numeroChasis}</div>
                                   <div><b>Kilometraje Actual: </b>{vehiculo.kilometrajeActual}</div>
                                   <div><b>Kilometraje Último Mantenimiento: </b>{vehiculo.kilometrajeUltimoMantenimiento}</div>
                              </div>
                              <div className="p-3 rounded shadow col-xs-12 col-sm-6 mt-2">
                                   <div><b>Conductor: </b>{vehiculo.nombreConductor}</div>
                                   <div><b>Fecha Soat: </b>{vehiculo.fechaSoat}</div>
                                   <div><b>Fecha Técnico Mécanica: </b>{vehiculo.fechaTecnicoMecanica}</div>
                                   <div><b>Fecha Matricula: </b>{vehiculo.fechaMatricula}</div>
                                   <div><b>Fecha Registro: </b>{vehiculo.fechaRegistro}</div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

const DetalleVehiculo = () => {
     const [vehiculo, setVehiculo] = React.useState();
     const { id } = useParams();

     const getVehiculo = () => {
          try {
               authService.findVehiculo(id).then(response => {
                    response.json().then(value => {
                         setVehiculo(value);
                    });
               });
          } catch (error) {
               console.log(error);
          }
     }

     React.useInsertionEffect(() => {
          getVehiculo();
     }, []);

     return (
          <React.Fragment>
               <ResponsiveContainer>
                    {
                         vehiculo
                              ? <Vehiculo vehiculo={vehiculo} />
                              : <div></div>
                    }
               </ResponsiveContainer>
          </React.Fragment>
     );
}

export default DetalleVehiculo;