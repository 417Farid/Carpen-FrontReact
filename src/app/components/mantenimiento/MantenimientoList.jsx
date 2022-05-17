import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ResponsiveContainer } from 'recharts';
import IconButton from '@mui/material/IconButton';
import DeleteForever from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';
import Typography from '@mui/material/Typography';
import * as authService from "../../auth/auth.service";
import { alert_success, alert_error } from '../../util/functions';
import NoMantenimiento from './NoMantenimiento';

const Mantenimiento = ({ mantenimiento, listMantenimientos, count }) => {
    const navigate = useNavigate();

    const deleteMantenimiento = async () => {
        try {
            const response = await authService.deleteMantenimiento(mantenimiento.id);
            if (parseInt(response.status) === 200) {
                alert_success("Exito!", "Mantenimiento eliminado correctamente!");
                setTimeout(() => { listMantenimientos() }, 2000)
            } else {
                alert_error("Error!", "No se pudo eliminar el mantenimiento.");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        /*<tr key={mantenimiento.id} className="text-center">
            <th scope="row">{count}</th>
            <td>{mantenimiento.nombre}</td>
            <td>{mantenimiento.direccion}</td>
            <td>{mantenimiento.telefono}</td>
            <td>{mantenimiento.email}</td>
            <td className='row-cols-2 row-cols-md-auto'>
                <IconButton onClick={() => { navigate("/mantenimientos/editar_mantenimiento/" + mantenimiento.id) }} title='Editar Mantenimiento' style={{ color: "blue" }}><EditIcon /></IconButton>
                <IconButton onClick={() => { navigate("/mantenimientos/ver_mantenimiento/" + mantenimiento.id) }} title='Ver Mantenimiento' style={{ color: "grey" }}><PageviewIcon /></IconButton>
                <IconButton onClick={() => { deleteMantenimiento() }} title='Borrar Mantenimiento' style={{ color: "red" }}><DeleteForever /></IconButton>
            </td>
        </tr>*/
        <tr className="text-center">
            <th scope="row">1</th>
            <td>2000</td>
            <td>Cambio Aceite</td>
            <td>30000</td>
            <td>Cambio de Aceite</td>
            <td className='row-cols-2 row-cols-md-auto'>
                <IconButton onClick={() => { navigate("/mantenimientos/editar_mantenimiento/" + 1) }} title='Editar Mantenimiento' style={{ color: "blue" }}><EditIcon /></IconButton>
                <IconButton title='Ver Mantenimiento' style={{ color: "grey" }}><PageviewIcon /></IconButton>
                <IconButton onClick={() => { deleteMantenimiento() }} title='Borrar Mantenimiento' style={{ color: "red" }}><DeleteForever /></IconButton>
            </td>
        </tr>
    );
}

function MantenimientoList() {

    const [mantenimientos, setMantenimientos] = useState([]);

    const navigate = useNavigate();

    const listMantenimientos = async () => {
    };

    const handleBuscar = () => {
    }

    useEffect(() => {
    }, []);

    return (
        <React.Fragment>
            <ResponsiveContainer>
                <div className="container">
                    <Typography component="h2" variant="h5" color="dark" gutterBottom>
                        Programa de Mantenimientos
                    </Typography>
                    {
                        (() => {
                            if (mantenimientos.length === 0) {
                                return (
                                    <nav className="navbar navbar-light bg-light">
                                        <div className="container-fluid">
                                            <button type='button' onClick={() => { navigate('/mantenimientos/agregar_mantenimiento') }} className='btn btn-primary m-2'>Agregar Mantenimiento</button>
                                            <form className="d-flex">
                                                <input id='buscarTaller' className="form-control me-2" type="search" placeholder="Buscar Mantenimiento Nombre" aria-label="Search" />
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
                                if (mantenimientos.length !== 0) {
                                    return (<NoMantenimiento />)
                                } else {
                                    return (
                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered shadow">
                                                <thead>
                                                    <tr className='text-center'>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Kilometraje</th>
                                                        <th scope="col">Nombre</th>
                                                        <th scope="col">Precio del Mantenimiento</th>
                                                        <th scope="col">Operacion</th>
                                                        <th scope="col">Opciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <Mantenimiento/>
                                                    {/*(() => {
                                                        return (
                                                            mantenimientos.map((mantenimiento, index) => (
                                                                <Mantenimiento key={mantenimiento.id} mantenimiento={mantenimiento} listMantenimientos={listMantenimientos} count={index + 1} />
                                                            ))
                                                        )
                                                    })()*/}
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

export default MantenimientoList;