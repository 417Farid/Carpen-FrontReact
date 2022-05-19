import React from "react";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from "react-router-dom";
import * as authService from '../../auth/auth.service';
import { alert_error } from "../../util/functions";

const Repuesto = ({ repuesto }) => {
     const {id_tipoRepuesto} = useParams();
     const [tipoRepuesto, setTipoRepuesto] = React.useState({ nombre: "" });
     
     const getTipoRepuesto = () => {
          try {
               authService.findTipoRepuesto(id_tipoRepuesto).then(response => {
                    if (response.error === "") {
                         setTipoRepuesto(response.tipoRepuesto);
                    }
               });
          } catch (error) {
               console.log(error)
          }
     }

     React.useEffect(() => {
          getTipoRepuesto();
     }, []);

     return (
          <div className="container-fluid">
               <div className="row row-cols-sm-2 row-cols-1 mx-auto">
                    <div className="figure shadow p-3 mt-2 mb-0 bg-body rounded col-xs-12 col-sm-6 text-center">
                         <img src={repuesto.foto} className="figure-img img-fluid rounded" alt="vehiculo" />
                         <figcaption className="figure-caption text-end">{repuesto.nombre}</figcaption>
                    </div>
                    <div className="card shadow bg-body mt-2 rounded col-xs-12 col-sm-6">
                         <div className="card-body">
                              <h5 className="card-title text-center mb-2">Información Básica</h5>
                              <div className="p-3 rounded shadow">
                                   <div className="mb-1"><b>Nombre del Repuesto: </b>{repuesto.nombre}</div>
                                   <div className="mb-1"><b>Descripcion del Repuesto: </b>{repuesto.descripcion}</div>
                                   <div className="mb-1"><b>Marca del Repuesto: </b>{repuesto.marca}</div>
                                   <div className="mb-1"><b>Fabricante del Repuesto: </b>{repuesto.fabricante}</div>
                                   <div className="mb-1"><b>Clase del Repuesto: </b>{repuesto.claseRepuesto}</div>
                                   <div className="mb-1"><b>Tipo del Repuesto: </b>{tipoRepuesto.nombre}</div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

const DetalleRepuesto = () => {
     const [repuesto, setRepuesto] = React.useState();
     const { id_repuesto } = useParams();

     const getRepuesto = () => {
          try {
               authService.findRepuesto(id_repuesto).then(response => {
                    if (response.error === "") {
                         setRepuesto(response.repuesto);
                    } else {
                         alert_error("Error!", "No se pudo encontrar el repuesto.")
                    }
               });
          } catch (error) {
               console.log(error);
          }
     }

     React.useInsertionEffect(() => {
          getRepuesto();
     }, []);

     return (
          <React.Fragment>
               <ResponsiveContainer>
                    <div className="container">
                         <Typography component="h2" variant="h5" color="dark" gutterBottom>
                              Información del Repuesto
                         </Typography>
                         <hr />
                         {
                              repuesto
                                   ? <Repuesto repuesto={repuesto} />
                                   : <div className="mx-auto text-center"><h1>No se encontró el Repuesto.</h1></div>
                         }
                    </div>
               </ResponsiveContainer>
          </React.Fragment>
     );
}

export default DetalleRepuesto;