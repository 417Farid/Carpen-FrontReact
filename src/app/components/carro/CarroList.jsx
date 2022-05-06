import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
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

    const listVehiculos = async () =>{
        try {
            const user = await authService.getUser();
            const res = await authService.getVehiculos(user);
            const data = await res.json();
            setVehiculos(data.vehiculo);
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuscar = ()=>{
        let placa = String(document.getElementById("buscarVehiculo").value).trim().toUpperCase();
        let cars;
        vehiculos.forEach(vehiculo => {
            if(vehiculo.fields.placa===placa){
                console.log(vehiculo.fields.placa+":----")
                
                setVehiculos([vehiculo]);
            }     
        });
        return null;
    }

    useEffect(()=>{
        listVehiculos();
    },[]);
    
    return (
        <div>
            <Typography component="h2" variant="h5" color="dark" gutterBottom>
                Mis Vehiculos
            </Typography>
            {
                (()=>{
                    if(vehiculos.length!==0){
                        return (
                            <nav className="navbar navbar-light bg-light">
                                <div className="container-fluid">
                                <button type='button' onClick={()=>{navigate('/home/agregar_vehiculo')}} className='btn btn-primary m-2'>Agregar Vehiculo</button>
                                    <form className="d-flex">
                                        <input id='buscarVehiculo' className="form-control me-2" type="search" placeholder="Buscar Vehiculo" aria-label="Search"/>
                                        <button className="btn btn-success" onClick={handleBuscar} type="button">Search</button>
                                    </form>
                                </div>
                            </nav>
                        )
                    }
                })()
            }
            <hr/>
            {
                (()=>{
                    if(vehiculos.length===0){
                        return (<NoCar/>);
                    }else{
                        return (
                            <Grid container spacing={{ xs: 1, sm: 2 ,md: 4 }} columns={{ xs: 1, sm: 2, md: 3}}>
                                {vehiculos.map((vehiculo) => (
                                    <Grid key={vehiculo.pk} item xs={1}>
                                        <Card key={vehiculo.pk} vehiculo={vehiculo.fields} id_car={vehiculo.pk} list_vehiculos={listVehiculos}/>
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