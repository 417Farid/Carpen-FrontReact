import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NoRepuesto() {
    const navigate = useNavigate();
    return (
        <div className={'d-flex flex-column justify-content-center align-items-center py-5'}>
            <img className={'mb-5 mt-5'} src={process.env.PUBLIC_URL + '/img/noRepuesto.png'} alt="No Repuesto" height="200px" />
            <h1 className={'mb-5 text-center'}>No tienes ningun repuesto registrado!</h1>
            <button type="button" className="btn btn-primary "  onClick={() => { navigate('/home/agregar_repuesto') }}>Registrar</button>
        </div>
    );
};