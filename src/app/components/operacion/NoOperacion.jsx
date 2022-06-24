import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function NoOperacion() {
    const {id_taller} = useParams();
    const navigate = useNavigate();
    return (
        <div className={'d-flex flex-column justify-content-center align-items-center py-5'}>
            <img className={'mb-5 mt-5'} src={process.env.PUBLIC_URL + '/img/noOperacion.png'} alt="No Operacion" height="100px" />
            <h2 className={'mb-5 text-center'}>No tienes ninguna operacion registrada!</h2>
            <button type="button" className="btn btn-primary " onClick={() => { id_taller?navigate('/talleres/'+id_taller+'/agregar_operaciones'):navigate('/operaciones/agregar_operacion') }}>Registrar</button>
        </div>
    );
};