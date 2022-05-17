import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NoLinea() {
    const navigate = useNavigate();
    return (
        <div className={'d-flex flex-column justify-content-center align-items-center'}>
            <img className={'mb-5 mt-5'} src={process.env.PUBLIC_URL + '/img/noCar-img.png'} alt="No Linea" height="100px" />
            <h2 className={'mb-5 text-center'}>No tienes ninguna linea en tu lista!</h2>
            <button type="button" className="btn btn-primary" onClick={() => { navigate('/lineas/agregar_linea') }}>Agregar</button>
        </div>
    );
};
