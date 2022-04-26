import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import { ResponsiveContainer } from 'recharts';

import Card from './Card'
import NoCar from './NoCar';

import * as authService from "../../auth/auth.service";

function CarroList() {
    const [vehiculos, setVehiculos] = useState([]);

    const listVehiculos = async () =>{
        try {
            const res = await authService.getVehiculos();
            const data = await res.json();
            setVehiculos(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listVehiculos();
    }, []);

    /*const isNull= ()=>{
        
    }*/
    
    return (
        <div>
            {
                (()=>{
                    if(vehiculos.length===0){
                        return (<NoCar/>);
                    }else{
                        return (
                            <Grid container spacing={{ xs: 1, sm: 2 ,md: 4 }} columns={{ xs: 1, sm: 2, md: 3}}>
                                {vehiculos.map((vehiculo) => (
                                    <Grid item xs={1}>
                                        <Card key={vehiculo.id} vehiculo={vehiculo} listVehiculos={listVehiculos}/>
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