import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
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

const Mantenimiento = ({ mantenimiento, listMantenimientos, count,id_mant }) => {
    const navigate = useNavigate();
    const {id_car} = useParams();

    const deleteMantenimiento = async () => {
        try {
            const response = await authService.deleteMantenimiento(id_mant);
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
        <tr key={id_mant} className="text-center">
            <th scope="row">{count}</th>
            <td>{mantenimiento.nombre}</td>
            <td>{mantenimiento.direccion}</td>
            <td>{mantenimiento.telefono}</td>
            <td>{mantenimiento.email}</td>
            <td className='row-cols-2 row-cols-md-auto'>
                <IconButton onClick={() => { navigate("/home/vehiculo/"+id_car+"/mantenimientos/editar_mantenimiento/" + id_mant) }} title='Editar Mantenimiento' style={{ color: "blue" }}><EditIcon /></IconButton>
                <IconButton onClick={() => { navigate("/home/vehiculo/"+id_car+"/mantenimientos/ver_mantenimiento/" + id_mant) }} title='Ver Mantenimiento' style={{ color: "grey" }}><PageviewIcon /></IconButton>
                <IconButton onClick={() => { deleteMantenimiento() }} title='Borrar Mantenimiento' style={{ color: "red" }}><DeleteForever /></IconButton>
            </td>
        </tr>
    );
}

function MantenimientoList() {
    const { id_car } = useParams();
    const [mantenimientos, setMantenimientos] = useState([]);

    const navigate = useNavigate();

    const getMantenimientos = async () => {
        try {
            authService.getMantenimientos_Vehiculo(id_car).then(response => {
                if (response.error === "") {
                    setMantenimientos(response.mantenimientos);
                    console.log(mantenimientos);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleBuscar = () => {
    }

    useEffect(() => {
        if (id_car) {
            getMantenimientos();
        }
    }, []);

    return (
        <React.Fragment>
            <ResponsiveContainer>
                <div className="container">
                    <Typography component="h2" variant="h5" color="dark" gutterBottom>
                        Mantenimientos del Vehiculo
                    </Typography>
                    {
                        (() => {
                            if (mantenimientos.length !== 0) {
                                return (
                                    <nav className="navbar navbar-light bg-light">
                                        <div className="container-fluid">
                                            <button type='button' onClick={() => { navigate('/home/vehiculo/'+id_car+'/mantenimientos/agregar_mantenimiento') }} className='btn btn-primary m-2'>Agregar Mantenimiento</button>
                                            <form className="d-flex">
                                                <input id='buscarMantenimiento' className="form-control me-2" type="search" placeholder="Buscar Mantenimiento Nombre" aria-label="Buscar" />
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
                                if (mantenimientos.length === 0) {
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
                                                    {
                                                        (() => {
                                                            return (
                                                                mantenimientos.map((mantenimiento, index) => (
                                                                    <Mantenimiento key={mantenimiento.pk} id_mant={mantenimiento.pk} mantenimiento={mantenimiento.fields} listMantenimientos={getMantenimientos} count={index + 1} />
                                                                ))
                                                            )
                                                        })()
                                                    }
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