import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ResponsiveContainer } from 'recharts';

import IconButton from '@mui/material/IconButton';
import DeleteForever from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Typography from '@mui/material/Typography';

function RepuestoList() {
    const [mantenimientos, setMantenimientos] = useState([]);
    const navigate = useNavigate();

    const listVehiculos = async () =>{
    };

    const handleBuscar = ()=>{
    }

    useEffect(()=>{
    },[]);

    return (
        <React.Fragment>
            <ResponsiveContainer>
                <div className="maincontainer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-15 col-xl-15 mx-auto justify-content-center align-items-center text-center py-5">
                                <Typography component="h3" variant="h3" color="dark" gutterBottom>
                                    Repuestos Disponibles
                                </Typography>
                                <hr />
                                <form>
                                    <div className="form-group py-5">
                                        <table class="table align-items-center ">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Foto</th>
                                                    <th scope="col">Nombre</th>
                                                    <th scope="col">Marca</th>
                                                    <th scope="col">Fabricante</th>
                                                    <th scope="col">Operacion</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>
                                                        <img class="img-thumbnail" src="/img/pomo.png" width="115" alt=""/>
                                                    </td>
                                                    <td>Pomo Compatible con Renault logan y Sandero</td>
                                                    <td>Plasticos ZGX</td>
                                                    <td>China</td>
                                                    <IconButton title='Borrar Repuesto' style={{ color: "red" }}><DeleteForever /></IconButton>
                                                    <IconButton title='Editar Repuesto' style={{ color: "blue" }}><EditIcon /></IconButton>
                                                    <IconButton title='Ver Respuesto' style={{ color: "green" }}><RemoveRedEyeIcon /></IconButton>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>
                                                        <img class="img-thumbnail" src="/img/rejilla.png" width="115" alt="" />
                                                    </td>
                                                    <td>Rejilla Aire de Renault logan y Sandero</td>
                                                    <td>Plasticos ZGX</td>
                                                    <td>China</td>
                                                    <IconButton title='Borrar Repuesto' style={{ color: "red" }}><DeleteForever /></IconButton>
                                                    <IconButton title='Editar Repuesto' style={{ color: "blue" }}><EditIcon /></IconButton>
                                                    <IconButton title='Ver Respuesto' style={{ color: "green" }}><RemoveRedEyeIcon /></IconButton>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>
                                                        <img class="img-thumbnail" src="/img/emblemas.png" width="115" alt="" />
                                                    </td>
                                                    <td>Emblema Volkswagen sedanes</td>
                                                    <td>Volkswagen</td>
                                                    <td>Volkswagen China</td>
                                                    <IconButton title='Borrar Repuesto' style={{ color: "red" }}><DeleteForever /></IconButton>
                                                    <IconButton title='Editar Repuesto' style={{ color: "blue" }}><EditIcon /></IconButton>
                                                    <IconButton title='Ver Respuesto' style={{ color: "green" }}><RemoveRedEyeIcon /></IconButton>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </ResponsiveContainer >
        </React.Fragment >
    )
};

export default RepuestoList;