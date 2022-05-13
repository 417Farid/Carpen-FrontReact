import React from "react";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from "react-router-dom";
import * as authService from '../../auth/auth.service';
import { alert_error } from "../../util/functions";

const mantenimiento = ({ mantenimiento }) => {

     return (
          <div className="container">
               <Typography component="h2" variant="h5" color="dark" gutterBottom>
                    Información del Mantenimiento
               </Typography>
               <hr />
               <div className="row row-cols-sm-2 row-cols-1 mx-auto">
                    <div className="figure shadow p-3 mt-2 mb-0 bg-body rounded col-xs-12 col-sm-6">
                         <div id="map" className="figure-img img-fluid rounded"/>
                         <figcaption className="figure-caption text-end">{mantenimiento.nombreMantenimiento}</figcaption>
                    </div>
                    <div className="card shadow bg-body mt-2 rounded col-xs-12 col-sm-6">
                         <div className="card-body">
                              <h5 className="card-title text-center mb-2">Información Básica</h5>
                              <div className="p-3 rounded shadow">
                                   <div className="mb-1"><b>Nombre del Mantenimiento: </b>{mantenimiento.nombreMantenimiento}</div>
                                   <div className="mb-1"><b>Placa del Vehiculo: </b>{mantenimiento.placaVehiculo}</div>
                                   <div className="mb-1"><b>Fecha de Mantenimiento: </b>{mantenimiento.fechaMantenimiento}</div>
                                   <div className="mb-1"><b>Kilometraje para el Mantenimiento: </b>{mantenimiento.kilometrajeMantenimiento}</div>
                                   <div className="mb-1"><b>Costo del Mantenimiento: </b>{mantenimiento.costoMantenimiento}</div>
                                   <div className="mb-1"><b>Forma de Pago: </b>{mantenimiento.formaPago}</div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

const DetalleMantenimiento = () => {
}

export default DetalleMantenimiento;