import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import DeleteForever from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';


import * as authService from "../../auth/auth.service";
import { alert_success, alert_error, generateClick, firstCharUpper } from "../../util/functions.js";

function PrograMante() {
     const [vehiculo, setVehiculo] = useState([]);
     const [marcas, setMarcas] = useState([]);
     const [lineas, setLineas] = useState([]);
     const [lineas_marca, setLineas_Marca] = useState([])

     const handleInputChange = (e) => {
          if (e.target.name === "marca") {
               let array = [];
               lineas.forEach(element => {
                    if (parseInt(e.target.value) === parseInt(element.marcaVehiculo)) {
                         array.push(element);
                    }
               });
               setLineas_Marca(array);
          }
     };

     const listarMarcas = () => {
          try {
               authService.getMarcas().then(response => {
                    if (response.error === "") {
                         setMarcas(response.rows);
                    }
               });
          } catch (error) {
               console.log(error);
          }
     }

     const listarLineas = () => {
          try {
               authService.getLineas().then(response => {
                    if (response.error === "") {
                         setLineas(response.rows);
                         setLineas_Marca(response.rows)
                    }
               });
          } catch (error) {
               console.log(error);
          }
     }

     return (
          <div className="container">
               <Typography component="h2" variant="h5" color="dark" gutterBottom>
                    Programa de Mantenimiento
               </Typography>
               <div className="container-fluid">
                    <div className="form-group py-2">
                         <label className="required">Marca del Vehiculo</label>
                         <select
                              id="marca"
                              className="form-select"
                              name="marca"
                              value={vehiculo.marca}
                              onChange={handleInputChange}
                              required
                         >
                              <option defaultValue={""} hidden value="">
                                   Marca
                              </option>
                              {(() => {
                                   if (marcas.length > 0) {
                                        return marcas.map((marca) => (
                                             <option key={marca.id} value={marca.id}>
                                                  {marca.nombre}
                                             </option>
                                        ));
                                   }
                              })()}
                         </select>
                    </div>
                    <div className="form-group py-2 ">
                         <label className="required">Linea</label>
                         <select
                              id="linea"
                              className="form-select"
                              name="linea"
                              value={vehiculo.linea}
                              onChange={handleInputChange}
                              required
                         >
                              <option defaultValue={""} hidden value="">
                                   Linea
                              </option>
                              {(() => {
                                   if (lineas_marca.length > 0) {
                                        return lineas_marca.map((linea) => (
                                             <option key={linea.id} value={linea.id}>
                                                  {linea.nombre}
                                             </option>
                                        ));
                                   }
                              })()}
                         </select>
                    </div>
                    <div className="table-responsive">
                         <table className="table table-striped table-bordered shadow">
                              <thead>
                                   <tr className="text-center">
                                        <th scope="col">Seleccion</th>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Operacion</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr className="text-center">
                                        <td><input type="checkbox" id="cbox1" value="first_checkbox"/></td>
                                        <th scope="row">1</th>
                                        <td>Cambio de Aceite</td>
                                        <td className='row-cols-2 row-cols-md-auto'>
                                             <IconButton title='Borrar Mantenimiento' style={{ color: "red" }}><DeleteForever /></IconButton>
                                        </td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
     );
}

export default PrograMante;