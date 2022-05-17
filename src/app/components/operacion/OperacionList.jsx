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
import NoOperacion from './NoOperacion';

import * as authService from "../../auth/auth.service";

const Operacion = ({ operacion, listOperaciones, count }) => {
    const navigate = useNavigate();

    return (
        <tr className='text-center' key={operacion.id}>
            <th scope="col">{count}</th>
            <td scope="col">{operacion.nombre}</td>
            <td scope="col">{operacion.descripcion}</td>
            <td scope='col'>
                <IconButton onClick={() => { navigate("/operaciones/editar_operacion/" + operacion.id) }} title='Editar Operacion' style={{ color: "blue" }}><EditIcon /></IconButton>
                <IconButton onClick={() => { navigate("/operaciones/ver_operacion/" + operacion.id) }} title='Ver Operacion' style={{ color: "green" }}><RemoveRedEyeIcon /></IconButton>
                <IconButton title='Borrar Operacion' style={{ color: "red" }}><DeleteForever /></IconButton>
            </td>
        </tr>
    );
}

function OperacionList() {
    const [operaciones, setOperaciones] = useState([]);
    const navigate = useNavigate();

    const listOperaciones = async () => {
        try {
            const response = await authService.getOperaciones();
            if (response.error === "") {
                setOperaciones(response.rows);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuscar = () => {
    }

    useEffect(() => {
        if (operaciones.length === 0) {
            listOperaciones();
        }
    }, []);

    return (
        <React.Fragment>
            <ResponsiveContainer>
                <div className="container">
                    <Typography component="h2" variant="h5" color="dark" gutterBottom>
                        Operaciones Disponibles
                    </Typography>
                    {
                        (() => {
                            if (operaciones.length !== 0) {
                                return (
                                    <nav className="navbar navbar-light bg-light">
                                        <div className="container-fluid">
                                            <button type='button' onClick={() => { navigate('/operaciones/agregar_operacion') }} className='btn btn-primary m-2'>Agregar Operacion</button>
                                            <form className="d-flex">
                                                <input id='buscarOperacion' className="form-control me-2" type="search" placeholder="Buscar Operacion Nombre" aria-label="Search" />
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
                                if (operaciones.length === 0) {
                                    return (<NoOperacion />)
                                } else {
                                    return (
                                        <div className="table-responsive">
                                            <table className="table table-bordered shadow">
                                                <thead>
                                                    <tr className='text-center'>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Nombre</th>
                                                        <th scope="col">Descripcion</th>
                                                        <th scope="col">Operacion</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(() => {
                                                        return (
                                                            operaciones.map((operacion, index) => (
                                                                <Operacion key={operacion.id} operacion={operacion} listOperaciones={listOperaciones} count={index + 1} />
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

export default OperacionList;