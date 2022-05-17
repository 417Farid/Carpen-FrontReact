import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NoMarca() {
    const navigate = useNavigate();
    return (
        <div className={'d-flex flex-column justify-content-center align-items-center'}>
            <img className={'mb-5 mt-5'} src={process.env.PUBLIC_URL + '/img/nocar-img.png'} alt="No Car" height="100px" />
            <h2 className={'mb-5 text-center'}>No tienes ninguna marca en tu lista!</h2>
            <button type="button" className="btn btn-primary" onClick={() => { navigate('/marcas/agregar_marca') }}>Agregar</button>
        </div>
    );
};
