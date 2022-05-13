import React from "react";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from "react-router-dom";
import * as authService from '../../auth/auth.service';
import { alert_error } from "../../util/functions";
import { initMap } from "../../util/google-maps";

const Taller = ({ taller }) => {

     return (
          <div className="container">
               <Typography component="h2" variant="h5" color="dark" gutterBottom>
                    Información del Taller
               </Typography>
               <hr />
               <div className="mx-auto">
                    <div className="card shadow bg-body mt-2 rounded col-12">
                         <div className="card-body">
                              <h5 className="card-title text-center mb-2">Información Básica</h5>
                              <div className="p-3 rounded shadow">
                                   <div className="mb-1"><b>Nombre: </b>{taller.nombre}</div>
                                   <div className="mb-1"><b>Direccion: </b>{taller.direccion}</div>
                                   <div className="mb-1"><b>Telefono: </b>{taller.telefono}</div>
                                   <div className="mb-1"><b>Email: </b>{taller.email}</div>
                                   <div className="mb-1"><b>Latitud: </b>{taller.latitud}</div>
                                   <div className="mb-1"><b>Longitud: </b>{taller.longitud}</div>
                              </div>
                         </div>
                    </div>
                    <div className="figure shadow p-3 mt-2 mb-0 bg-body rounded col-12">
                         <div id="google_map" className="figure-img img-fluid rounded"/>
                         <figcaption className="figure-caption text-end">{taller.nombre + ' - Longitud: ' + taller.longitud +" / Latitud: "+taller.latitud}</figcaption>
                    </div>
               </div>
               {
                    //initMap()
               }
          </div>
     );
}

const DetalleTaller = () => {
     const [taller, setTaller] = React.useState();
     const { id } = useParams();
     const navigate = useNavigate();

     const getTaller = async() => {
          try {
               const response = await authService.findTaller(id);
               response.json().then(value => {
                    if(parseInt(response.status)===200){
                         setTaller(value);
                    }else{
                         alert_error("Error!","No se encontró ningun taller con esos datos.");
                         setTimeout(()=>{navigate("/talleres")},2000);
                    }
               });
          } catch (error) {
               console.log(error);
          }
     }

     React.useInsertionEffect(() => {
          getTaller();
     }, []);

     return (
          <React.Fragment>
               <ResponsiveContainer>
                    {
                         taller
                              ? <Taller taller={taller} />
                              : <div></div>
                    }
               </ResponsiveContainer>
          </React.Fragment>
     );
}

export default DetalleTaller;