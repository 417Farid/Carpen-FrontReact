import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NoTaller() {
    const navigate = useNavigate();
    return (
        <div className={'d-flex flex-column justify-content-center align-items-center'}>
            <img className={'mb-5 mt-5'} src={process.env.PUBLIC_URL + '/img/garaje-64.png'} alt="No Taller" height="100px" />
            <h2 className={'mb-5 text-center'}>No se ha encontrado ningun taller!</h2>
            <button type="button" className="btn btn-primary" onClick={() => { navigate('/talleres/agregar_taller') }}>Agregar</button>
        </div>
    );
};
