import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function NoMantenimiento() {
    const navigate = useNavigate();
    const {id_car} = useParams();
    return (
        <div className={'d-flex flex-column justify-content-center align-items-center py-5'}>
            <img className={'mb-5 mt-5'} src={process.env.PUBLIC_URL + '/img/noMantenimiento.png'} alt="No Car" height="100px" />
            <h2 className={'mb-5 text-center'}>No tienes ningun mantenimiento registrado!</h2>
            <button type="button" className="btn btn-primary " onClick={() => { navigate('/home/vehiculo/'+id_car+'/mantenimientos/agregar_mantenimiento') }}>Agregar</button>
        </div>
    );
};