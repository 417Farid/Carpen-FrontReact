import React, { useState } from "react";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from "react-router-dom";
import * as authService from '../../auth/auth.service';
import { alert_error } from "../../util/functions";

const Mantenimiento = ({ mantenimiento }) => {
     const navigate = useNavigate();

     const [vehiculo, setVehiculo] = useState();
     const [taller, setTaller] = React.useState();

     const getVehiculo = () => {
          try {
               authService.findVehiculo(mantenimiento.vehiculo).then(response => {
                    response.json().then(value => {
                         if (parseInt(response.status) === 200) {
                              setVehiculo(value);
                         } else {
                              alert_error("Error!", "No se pudo encontrar el vehiculo.");
                              setTimeout(() => { navigate(-1) }, 2000);
                         }
                    });
               });
          } catch (error) {
               console.log(error);
          }
     }

     const getTaller = async () => {
          try {
               const response = await authService.findTaller(mantenimiento.taller);
               response.json().then(value => {
                    if (parseInt(response.status) === 200) {
                         setTaller(value);
                    } else {
                         alert_error("Error!", "No se encontró ningun taller con esos datos.");
                         setTimeout(() => { navigate(-1) }, 2000);
                    }
               });
          } catch (error) {
               console.log(error);
          }
     }

     React.useInsertionEffect(() => {
          getVehiculo();
          getTaller();
     }, []);

     return (
          <div className="container-fluid">
               <div className="row row-cols-sm-2 row-cols-1 mx-auto">
                    <div className="card shadow bg-body mt-2 rounded col-xs-12 col-sm-6">
                         <div className="card-body">
                              <h5 className="card-title text-center mb-2">Mantenimiento</h5>
                              <div className="p-3 rounded shadow">
                                   <div className="mb-1"><b>Kilometraje para el Mantenimiento: </b>{mantenimiento.kilometraje}</div>
                                   <div className="mb-1"><b>Fecha: </b>{mantenimiento.fecha}</div>
                                   <div className="mb-1"><b>Costo: </b>{mantenimiento.costo}</div>
                                   <div className="mb-1"><b>Forma de Pago: </b>{mantenimiento.formaPago}</div>
                              </div>
                         </div>
                         {
                              taller
                                   ?
                                   <div className="card-body">
                                        <h5 className="card-title text-center mb-2">Taller</h5>
                                        <div className="p-3 rounded shadow">
                                             <div className="mb-1"><b>Nombre: </b>{taller.nombre}</div>
                                             <div className="mb-1"><b>Direccion: </b>{taller.direccion}</div>
                                             <div className="mb-1"><b>Telefono: </b>{taller.telefono}</div>
                                             <div className="mb-1"><b>Email: </b>{taller.email}</div>
                                        </div>
                                   </div>
                                   :
                                   <></>
                         }
                    </div>
                    {
                         vehiculo
                              ?
                              <div className="card shadow mt-2 p-3 bg-body rounded">
                                   <div className="card-body">
                                        <h5 className="card-title text-center mb-2">Vehiculo</h5>
                                        <div className="p-3 rounded shadow">
                                             <div><b>Número Serie: </b>{vehiculo.numeroSerie}</div>
                                             <div><b>Número Motor: </b>{vehiculo.numeroMotor}</div>
                                             <div><b>Número Chasís: </b>{vehiculo.numeroChasis}</div>
                                             <div><b>Kilometraje Actual: </b>{vehiculo.kilometrajeActual}</div>
                                             <div><b>Kilometraje Último Mantenimiento: </b>{vehiculo.kilometrajeUltimoMantenimiento}</div>
                                        </div>
                                   </div>
                                   <figure className="figure shadow p-3 mb-0 bg-body rounded col-xs-12 col-sm-auto">
                                        <img src={vehiculo.foto} className="figure-img img-fluid rounded" alt="vehiculo" />
                                   </figure>
                              </div>
                              :
                              <></>
                    }
               </div>
          </div>
     );
}

const DetalleMantenimiento = () => {
     const { id_mant } = useParams();
     const [mantenimiento, setMantenimiento] = useState();
     const navigate = useNavigate();

     const getMantenimiento = () => {
          try {
               authService.findMantenimiento(id_mant).then(response => {
                    if (response.error === "") {
                         setMantenimiento(response.mantenimiento);
                    } else {
                         alert_error("Error!", "No se encontró ningun mantenimiento con esos datos.");
                         setTimeout(() => { navigate(-1) }, 2000);
                    }
               });
          } catch (error) {
               console.log(error);
          }
     }

     React.useInsertionEffect(() => {
          getMantenimiento();
     }, []);

     return (
          <div className="container">
               <Typography component="h2" variant="h5" color="dark" gutterBottom>
                    Información del Mantenimiento
               </Typography>
               <hr />
               <div className="container-fluid">
                    {
                         mantenimiento
                              ? <Mantenimiento mantenimiento={mantenimiento} />
                              : <div className="mx-auto text-center"><h1>No se encontró el mantenimiento.</h1></div>
                    }
               </div>
          </div>
     );
}

export default DetalleMantenimiento;