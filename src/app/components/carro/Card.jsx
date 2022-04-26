import * as React from 'react';
import { ResponsiveContainer } from 'recharts';

export default function Card({vehiculo, listVehiculos}) {

  
  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="card" style={{width: '18rem'}}>
          <img src={process.env.PUBLIC_URL + '/img/gallardo.jpg'} className="card-img-top"/>
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">{vehiculo.marca + ' - ' + vehiculo.modelo}</h5>
            <p className="card-text"><span className='fw-bold'>Placa: </span>{vehiculo.Placa}</p>
            <p className="card-text"><span className='fw-bold'>Conductor: </span>{vehiculo.nombreConductor}</p>
            <div className='d-flex justify-content-evenly'>
              <button type="button" classname="btn btn-outline-info">Ver Detalles</button>
              <button type="button" className="btn btn-outline-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </React.Fragment>
  );
};
