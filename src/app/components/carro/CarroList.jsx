import React from 'react'
import { Button } from 'react-bootstrap'
import Grid from '@mui/material/Grid';
import Card from './Card'

function CarroList() {
    return (
        <Grid container spacing={{ xs: 1, sm: 2 ,md: 4 }} columns={{ xs: 1, sm: 2, md: 3}}>
            <Grid item xs={1}>
                <Card />
            </Grid>
            <Grid item xs={1}>
                <Card />
            </Grid>
            <Grid item xs={1}>
                <Card />
            </Grid>
            <Grid item xs={1}>
                <Card />
            </Grid>
            <Grid item xs={1}>
                <Card />
            </Grid>
            <Grid item xs={1}>
                <Card />
            </Grid>
        </Grid>
    );
};

export default CarroList;