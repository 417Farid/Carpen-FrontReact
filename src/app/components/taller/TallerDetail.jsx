import React from "react";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from "react-router-dom";
import * as authService from '../../auth/auth.service';
import { alert_error } from "../../util/functions";

const Taller = ({ taller }) => {

     return (
          <div className="container-fluid mx-auto">
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
                    <div style={{position:'relative',overflow:'hidden',width: '100%',paddingTop:'56.25%',}}>
                         <iframe style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, width: '100%', height: '100%',}} src="https://maps.google.com/maps?q=universidad%20de%20pamplona&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" allowFullScreen></iframe>
                    </div>
                    <figcaption className="figure-caption text-end">{taller.nombre + ' - Longitud: ' + taller.longitud + " / Latitud: " + taller.latitud}</figcaption>
               </div>
          </div>
     );
}

const DetalleTaller = () => {
     const [taller, setTaller] = React.useState();
     const { id } = useParams();
     const navigate = useNavigate();

     const getTaller = async () => {
          try {
               const response = await authService.findTaller(id);
               response.json().then(value => {
                    if (parseInt(response.status) === 200) {
                         setTaller(value);
                    } else {
                         alert_error("Error!", "No se encontró ningun taller con esos datos.");
                         setTimeout(() => { navigate("/talleres") }, 2000);
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
                    <div className="container">
                         <Typography component="h2" variant="h5" color="dark" gutterBottom>
                              Información de Taller
                         </Typography>
                         <hr />
                         <div className="container-fluid">
                              {
                                   taller
                                        ? <Taller taller={taller} />
                                        : <div className="mx-auto text-center"><h1>No se encontró el taller.</h1></div>
                              }
                         </div>
                    </div>
               </ResponsiveContainer>
          </React.Fragment>
     );
}

export default DetalleTaller;