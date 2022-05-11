import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NoCar() {
    const navigate = useNavigate();
    return (
        <div className={'d-flex flex-column justify-content-center align-items-center'}>
            <img className={'mb-5 mt-5'} src={process.env.PUBLIC_URL + '/img/nocar-img.png'} alt="No Car" height="200px" />
            <h1 className={'mb-5 text-center'}>No tienes ningun vehiculo en tu lista!</h1>
            <button type="button" className="btn btn-primary" onClick={() => { navigate('/home/agregar_vehiculo') }}>Agregar</button>
        </div>
    );
};
