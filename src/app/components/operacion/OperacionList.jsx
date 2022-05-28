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
    const [opera, setOpera] = useState({
        id: "",
        nombre: "",
        descripcion: "",
    });

    useEffect(() => {
        if (operacion.operacion) {
            authService.findOperacion(operacion.operacion).then(response => {
                if (response.error === "") {
                    setOpera(response.operacion);
                }
            });
        } else {
            setOpera(operacion);
        }
    }, [])

    return (
        <tr className='text-center' key={opera.id}>
            <th scope="col">{count}</th>
            <td scope="col">{opera.nombre}</td>
            <td scope="col">{opera.descripcion}</td>
            <td scope='col'>
                <IconButton onClick={() => { navigate("/operaciones/editar_operacion/" + opera.id) }} title='Editar Operacion' style={{ color: "blue" }}><EditIcon /></IconButton>
                <IconButton onClick={() => { navigate("/operaciones/ver_operacion/" + opera.id) }} title='Ver Operacion' style={{ color: "green" }}><RemoveRedEyeIcon /></IconButton>
                <IconButton title='Borrar Operacion' style={{ color: "red" }}><DeleteForever /></IconButton>
            </td>
        </tr>
    );
}

function OperacionList() {
    const { id_taller } = useParams();

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

    const getOperaciones = async () => {
        try {
            authService.getOperaciones_Taller(id_taller).then(response => {
                if (response.error === "") {
                    setOperaciones(response.operaciones);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleBuscar = () => {
    }

    useEffect(() => {
        if (id_taller) {
            getOperaciones();
        } else {
            if (operaciones.length === 0) {
                listOperaciones();
            }
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
                                                <input id='buscarOperacion' className="form-control me-2" type="search" placeholder="Buscar Operacion Nombre" aria-label="Buscar" />
                                                <button className="btn btn-success" onClick={handleBuscar} type="button">Buscar</button>
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
                                                        <th scope="col">Opciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(() => {
                                                        return (
                                                            operaciones.map((operacion, index) => (
                                                                <Operacion key={operacion.id} operacion={operacion} listOperaciones={id_taller ? getOperaciones : listOperaciones} count={index + 1} />
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