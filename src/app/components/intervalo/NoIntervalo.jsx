import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NoIntervalo() {
    const navigate = useNavigate();
    return (
        <div className={'d-flex flex-column justify-content-center align-items-center py-5'}>
            <img className={'mb-5 mt-5'} src={process.env.PUBLIC_URL + '/img/NoIntervalo.jpeg'} alt="No Intervalo" height="150px" />
            <h2 className={'mb-5 text-center'}>No tienes Intervalo registrado!</h2>
            <button type="button" className="btn btn-primary " onClick={() => { navigate('/intervalo/agregar_intervalo') }}>Registrar</button>
        </div>
    );
};