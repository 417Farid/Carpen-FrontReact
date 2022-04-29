import * as React from 'react';
import { ResponsiveContainer } from 'recharts';
import { alert_detail_vehiculo } from '../../util/functions';

export default function Card({vehiculo}) {

  
  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="card" style={{width: '18rem'}}>
          <img src={vehiculo.foto} className="card-img-top"/>
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">{vehiculo.marca + ' - ' + vehiculo.modelo}</h5>
            <p className="card-text"><span className='fw-bold'>Placa: </span>{vehiculo.placa}</p>
            <p className="card-text"><span className='fw-bold'>Conductor: </span>{vehiculo.nombreConductor}</p>
            <div className='d-flex justify-content-evenly'>
              <button type="button" className="btn btn-outline-primary" onClick={async()=>{await alert_detail_vehiculo(vehiculo)}}>Ver Detalles</button>
              <button type="button" className="btn btn-outline-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </React.Fragment>
  );
};
