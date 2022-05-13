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

function OperacionList() {
    const [operacion, setOperacion] = useState([]);
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
                                    Operaciones Disponibles
                                </Typography>
                                <hr />
                                <form>
                                    <div className="form-group py-5">
                                        <table class="table align-items-center ">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Nombre</th>
                                                    <th scope="col">Descripcion</th>
                                                    <th scope="col">Operacion</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Cambio de Llanta</td>
                                                    <td>Llanta delantera sera cambiada 255/50</td>
                                                    <IconButton title='Editar Operacion' style={{ color: "blue" }}><EditIcon /></IconButton>
                                                    <IconButton title='Ver Operacion' style={{ color: "green" }}><RemoveRedEyeIcon /></IconButton>
                                                    <IconButton title='Borrar Operacion' style={{ color: "red" }}><DeleteForever /></IconButton>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Cambio de Pomo Renault logan</td>
                                                    <td>Sera cambiado por daños irreparables</td>
                                                    <IconButton title='Editar Operacion' style={{ color: "blue" }}><EditIcon /></IconButton>
                                                    <IconButton title='Ver Operacion' style={{ color: "green" }}><RemoveRedEyeIcon /></IconButton>
                                                    <IconButton title='Borrar Operacion' style={{ color: "red" }}><DeleteForever /></IconButton>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Cambio de rejilla de aire acondicionado</td>
                                                    <td>Sera cambiado por daños irreparables</td>
                                                    <IconButton title='Editar Operacion' style={{ color: "blue" }}><EditIcon /></IconButton>
                                                    <IconButton title='Ver Operacion' style={{ color: "green" }}><RemoveRedEyeIcon /></IconButton>
                                                    <IconButton title='Borrar Operacion' style={{ color: "red" }}><DeleteForever /></IconButton>
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

export default OperacionList;