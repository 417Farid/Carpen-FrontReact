import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Card from './Card'
import NoCar from './NoCar';

import * as authService from "../../auth/auth.service";

function CarroList() {
    const [vehiculos, setVehiculos] = useState([]);
    const navigate = useNavigate();

    const listVehiculos = async () => {
        try {
            const user = await authService.getUser();
            const res = await authService.getVehiculos(user);
            const data = await res.json();
            setVehiculos(data.vehiculo);
        } catch (error) {
            console.log(error);
        }
    };

    /*const [busqueda, setBusqueda] = useState({
        value: "",
        vehiculos: [],
    });*/

    const handleBuscar = ()=> {
        let placa = String(document.getElementById("buscarVehiculo").value).trim().toUpperCase();
        vehiculos.forEach(vehiculo => {
            if(vehiculo.fields.placa===placa){
                navigate("/home/detalle_vehiculo/"+vehiculo.pk);
            }     
        });
        return null;
        /*e.persist();
        setBusqueda({ ...busqueda, [e.target.name]: [e.target.value] })
        filtrarVehiculos();*/
    }

    /*const filtrarVehiculos = () => {
        var search = vehiculos.filter(item => {
            if (item.fields.placa.toString().includes(busqueda.value) ||
                item.fields.marca.toString().includes(busqueda.value) ||
                item.fields.modelo.toString().includes(busqueda.modelo)) {
                return item;
            }
        });
        setBusqueda({ vehiculos: search });
    }*/

    useEffect(() => {
        if (vehiculos.length === 0) {
            listVehiculos();
        }
    }, []);

    return (
        <div>
            <Typography component="h2" variant="h5" color="dark" gutterBottom>
                Mis Vehiculos
            </Typography>
            {
                (() => {
                    if (vehiculos.length !== 0) {
                        return (
                            <nav className="navbar navbar-light bg-light">
                                <div className="container-fluid">
                                    <button type='button' onClick={() => { navigate('/home/agregar_vehiculo') }} className='btn btn-primary m-2'>Agregar Vehiculo</button>
                                    <form className="d-flex">
                                        <input id='buscarVehiculo' className="form-control me-2" type="search" placeholder="Buscar Vehiculo Placa" aria-label="Buscar" maxLength="10" />
                                        <button className="btn btn-success" onClick={()=>{handleBuscar()}} type="button">Buscar</button>
                                    </form>
                                </div>
                            </nav>
                        )
                    }
                })()
            }
            <hr />
            {
                (() => {
                    if (vehiculos.length === 0) {
                        return (<NoCar />);
                    } else {
                        return (
                            <Grid container spacing={{ xs: 1, sm: 2, md: 4 }} columns={{ xs: 1, sm: 2, md: 3 }}>
                                {vehiculos.map((vehiculo) => (
                                    <Grid key={vehiculo.pk} item xs={1}>
                                        <Card key={vehiculo.pk} vehiculo={vehiculo.fields} id_car={vehiculo.pk} list_vehiculos={listVehiculos} />
                                    </Grid>
                                ))}
                            </Grid>
                        );
                    }
                })()
            }
        </div>
    );
};

export default CarroList;