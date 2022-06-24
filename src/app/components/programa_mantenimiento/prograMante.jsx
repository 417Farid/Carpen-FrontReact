import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import Swal from "sweetalert2";


import * as authService from "../../auth/auth.service";

function PrograMante() {
     const navigate = useNavigate();

     const [programa, setPrograma] = useState({
          marca: "",
          linea: "",
          operacion: "",
          intervalos: [],
     });
     const [marcas, setMarcas] = useState([]);
     const [lineas, setLineas] = useState([]);
     const [lineas_marca, setLineas_Marca] = useState([]);
     const [operaciones, setOperaciones] = useState([]);
     const [intervalos, setIntervalos] = useState([]);

     const handleSubmit = async (e) => {
          e.preventDefault();
          console.log(programa);
     }

     const handleInputChange = (e) => {
          setPrograma({ ...programa, [e.target.name]: [e.target.value] })
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

     const listarOperaciones = async () => {
          try {
               const response = await authService.getOperaciones();
               if (response.error === "") {
                    setOperaciones(response.rows);
               }
          } catch (error) {
               console.log(error);
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

     const listarIntervalos = async () => {
          try {
               const response = await authService.getIntervalos();
               if (response.error === "") {
                    setIntervalos(response.rows);
               }
          } catch (error) {
               console.log(error);
          }
     };

     useEffect(() => {
          if (marcas.length === 0) {
               listarMarcas();
          }

          if (lineas.length === 0) {
               listarLineas();
          }

          if (operaciones.length === 0) {
               listarOperaciones();
          }

          if (intervalos.length === 0) {
               listarIntervalos();
          }
     }, []);

     function selectIntervalo(intervalo, index) {
          let check = document.getElementById("check-" + index);
          if (check.checked) {
               Swal.fire({
                    title: 'Seleccione la Acción',
                    input: 'select',
                    inputOptions: {
                         'I': 'Inspeccionar',
                         'C': 'Cambio o Realizar',
                         'NA': 'No Aplica'
                    },
                    showCancelButton: true,
                    inputValidator: function (value) {
                         return new Promise(function (resolve, reject) {
                              if (value !== '') {
                                   resolve();
                              } else {
                                   resolve('Usted necesita seleccionar una acción.');
                              }
                         });
                    }
               }).then(function (result) {
                    if (result.isConfirmed) {
                         programa.intervalos.push({
                              "intervalo": intervalo,
                              "accion": result.value,
                         });
                    }
               });
          } else {
               programa.intervalos.map((element, index) => {
                    if (element.intervalo === intervalo) {
                         programa.intervalos.splice(index,1);
                    }
               })
          }
     }

     return (
          <div className="container">
               <Typography component="h2" variant="h5" color="dark" gutterBottom>
                    Programa de Mantenimiento
               </Typography>
               <div className="container-fluid">
                    <form className="form-control" onSubmit={handleSubmit}>
                         <div className="row row-sm-auto">
                              <div className="form-group py-2">
                                   <label className="required">Marca del Vehiculo</label>
                                   <select
                                        id="marca"
                                        className="form-select"
                                        name="marca"
                                        value={programa.marca}
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
                                        value={programa.linea}
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
                              <div className="form-group py-2 ">
                                   <label className="required">Operaciones</label>
                                   <select
                                        id="operacion"
                                        className="form-select"
                                        name="operacion"
                                        value={programa.operacion}
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
                              <div className="table-responsive">
                                   <label className="required">Intervalos</label>
                                   <table className="table table-striped table-bordered shadow">
                                        <thead>
                                             <tr className="text-center">
                                                  <th scope="col">#</th>
                                                  <th scope="col">Intervalo</th>
                                                  <th scope="col">Seleccion</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             {
                                                  (() => {
                                                       return (
                                                            intervalos.map((intervalo, index) => (
                                                                 <tr key={index} className="text-center">
                                                                      <td>{index + 1}</td>
                                                                      <td>{intervalo.intervalo}</td>
                                                                      <td><input type="checkbox" id={"check-" + index} onClick={() => { selectIntervalo(intervalo.id, index) }} /></td>
                                                                 </tr>
                                                            ))
                                                       )
                                                  })()
                                             }
                                        </tbody>
                                   </table>
                              </div>
                         </div>
                         <div className="d-flex justify-content-center">
                              <button className="btn btn-primary btn-block my-2" type="submit">
                                   Registrar
                              </button>
                              <button type="button" className="btn btn-secondary btn-block my-2 mx-2" onClick={() => navigate(-1)}>Regresar</button>
                         </div>
                    </form>
               </div>
          </div>
     );
}

export default PrograMante;