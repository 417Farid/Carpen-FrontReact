import React from "react";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from "react-router-dom";
import * as authService from '../../auth/auth.service';
import { alert_error } from "../../util/functions";

const repuesto = ({ repuesto }) => {

     return (
          <div className="container">
               <Typography component="h2" variant="h5" color="dark" gutterBottom>
                    Información del Repuesto
               </Typography>
               <hr />
               <div className="row row-cols-sm-2 row-cols-1 mx-auto">
                    <div className="figure shadow p-3 mt-2 mb-0 bg-body rounded col-xs-12 col-sm-6">
                         <img src={repuesto.fotoRepuesto} className="figure-img img-fluid rounded" alt="vehiculo"/>
                         <figcaption className="figure-caption text-end">{repuesto.nombreRepuesto}</figcaption>
                    </div>
                    <div className="card shadow bg-body mt-2 rounded col-xs-12 col-sm-6">
                         <div className="card-body">
                              <h5 className="card-title text-center mb-2">Información Básica</h5>
                              <div className="p-3 rounded shadow">
                                   <div className="mb-1"><b>Nombre del Repuesto: </b>{repuesto.nombreRepuesto}</div>
                                   <div className="mb-1"><b>Descripcsion del Repuesto: </b>{repuesto.descripcionRepuesto}</div>
                                   <div className="mb-1"><b>Marca del Repuesto: </b>{repuesto.marcaRepuesto}</div>
                                   <div className="mb-1"><b>Fabricante del Repuesto: </b>{repuesto.fabricanteRepuesto}</div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

const DetalleRepuesto = () => {
}

export default DetalleRepuesto;