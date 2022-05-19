import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ResponsiveContainer } from 'recharts';
import IconButton from '@mui/material/IconButton';
import DeleteForever from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Typography from '@mui/material/Typography';  
import NoIntervalo from './NoIntervalo';

import * as authService from "../../auth/auth.service";

const Intervalo = ({ intervalo, listIntervalos, count }) => {
    const navigate = useNavigate();

    return (
        <tr className='text-center' key={intervalo.id}>
            <th scope="col">{count}</th>
            <td scope="col">{intervalo.intervalo}</td>
            <td scope="col">{intervalo.descripcion}</td>
            <td scope='col'>
                <IconButton onClick={() => { navigate("/intervalos/editar_intervalo/" + intervalo.id) }} title='Editar Intervalo' style={{ color: "blue" }}><EditIcon /></IconButton>
                <IconButton onClick={() => { navigate("/intervalos/ver_intervalo/" + intervalo.id) }} title='Ver Intervalo' style={{ color: "green" }}><RemoveRedEyeIcon /></IconButton>
                <IconButton title='Borrar Intervalo' style={{ color: "red" }}><DeleteForever /></IconButton>
            </td>
        </tr>
    );
}

function IntervaloList() {
    const [intervalos, setIntervalos] = useState([]);
    const navigate = useNavigate();

    const IntervaloList = async () => {
        try {
            const response = await authService.getIntervalos();
            if (response.error === "") {
                setIntervalos(response.rows);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuscar = () => {
    }

    useEffect(() => {
        if (intervalos.length === 0) {
            listIntervalos();
        }
    }, []);

    return (
        <React.Fragment>
            <ResponsiveContainer>
                <div className="container">
                    <Typography component="h2" variant="h5" color="dark" gutterBottom>
                        Intervalos Disponibles
                    </Typography>
                    {
                        (() => {
                            if (intervalos.length !== 0) {
                                return (
                                    <nav className="navbar navbar-light bg-light">
                                        <div className="container-fluid">
                                            <button type='button' onClick={() => { navigate('/intervalos/agregar_intervalo') }} className='btn btn-primary m-2'>Agregar Intervalo</button>
                                            <form className="d-flex">
                                                <input id='buscarIntervalos' className="form-control me-2" type="search" placeholder="Buscar Intervalo" aria-label="Search" />
                                                <button className="btn btn-success" onClick={handleBuscar} type="button">Search</button>
                                            </form>
                                        </div>
                                    </nav>
                                )
                            }
                        })()
                    }
                    <hr />
                    <div className="container-fluid">
                        {
                            (() => {
                                if (intervalos.length === 0) {
                                    return (<NoIntervalo />)
                                } else {
                                    return (
                                        <div className="table-responsive">
                                            <table className="table table-bordered shadow">
                                                <thead>
                                                    <tr className='text-center'>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Intervalo</th>
                                                        <th scope="col">Descripcion</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(() => {
                                                        return (
                                                            intervalos.map((intervalo, index) => (
                                                                <Intervalo key={intervalo.id} operacion={intervalo} listOperaciones={listIntervalos} count={index + 1} />
                                                            ))
                                                        )
                                                    })()}
                                                </tbody>
                                            </table>
                                        </div>
                                    )
                                }
                            })()
                        }
                    </div>
                </div>
            </ResponsiveContainer >
        </React.Fragment >
    )
};

export default IntervaloList;