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
import NoTipoRepuesto from './NoTipoRepuesto';

import * as authService from "../../auth/auth.service";

const TipoRepuesto = ({ tipoRepuesto, listTipoRepuestos, count }) => {
    const navigate = useNavigate();

    return (
        <tr className='text-center' key={tipoRepuesto.id}>
            <th scope="col">{count}</th>
            <td scope="col">{tipoRepuesto.nombre}</td>
            <td scope="col">{tipoRepuesto.descripcion}</td>
            <td scope='col'>
                <IconButton onClick={() => { navigate("/tiposRepuesto/editar_tipoRepuesto/" + tipoRepuesto.id) }} title='Editar Tipo Repuesto' style={{ color: "blue" }}><EditIcon /></IconButton>
                <IconButton onClick={() => { navigate("/tiposRepuesto/"+tipoRepuesto.id+"/ver_repuestos/") }} title='Ver Repuestos' style={{ color: "green" }}><RemoveRedEyeIcon /></IconButton>
                <IconButton title='Borrar Tipo Repuesto' style={{ color: "red" }}><DeleteForever /></IconButton>
            </td>
        </tr>
    );
}

function TiposRepuestoList() {
    const [tiposRepuesto, setTipoRepuesto] = useState([]);
    const navigate = useNavigate();

    const listTiposRepuesto = async () => {
        try {
            const response = await authService.getTiposRepuesto();
            if (response.error === "") {
                setTipoRepuesto(response.rows);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuscar = () => {
    }

    useEffect(() => {
        if (tiposRepuesto.length === 0) {
            listTiposRepuesto();
        }
    }, []);

    return (
        <React.Fragment>
            <ResponsiveContainer>
                <div className="container">
                    <Typography component="h2" variant="h5" color="dark" gutterBottom>
                        Tipos de Repuesto
                    </Typography>
                    {
                        (() => {
                            if (tiposRepuesto.length !== 0) {
                                return (
                                    <nav className="navbar navbar-light bg-light">
                                        <div className="container-fluid">
                                            <button type='button' onClick={() => { navigate('/tiposRepuesto/agregar_tipoRepuesto') }} className='btn btn-primary m-2'>Agregar Tipo</button>
                                            <form className="d-flex">
                                                <input id='buscarTipoRepuesto' className="form-control me-2" type="search" placeholder="Buscar Tipo Nombre" aria-label="Buscar" />
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
                                if (tiposRepuesto.length === 0) {
                                    return (<NoTipoRepuesto />)
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
                                                            tiposRepuesto.map((tipoRepuesto, index) => (
                                                                <TipoRepuesto key={tipoRepuesto.id} tipoRepuesto={tipoRepuesto} listTipoRepuestos={listTiposRepuesto} count={index + 1} />
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

export default TiposRepuestoList;