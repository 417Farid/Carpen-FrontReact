import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponsiveContainer } from 'recharts';
import { alert_detail_vehiculo, alert_error, alert_success } from '../../util/functions';
import * as authService from '../../auth/auth.service'

export default function Card({vehiculo,id_car, list_vehiculos}) {

  const navigate = useNavigate();

  const handleDelete = async ()=>{
    try {
      console.log(vehiculo)
      const response = await authService.deleteInstanceVehiculo(id_car,vehiculo.usuarios);
      response.json().then(value=>{
        if(value.error===""){
          alert_success("Exito!",value.message);
          setTimeout(list_vehiculos,1500);
        }else{
          alert_error("Oops!",value.error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="card" style={{width: '18rem'}}>
          <img src={vehiculo.foto} className="card-img-top"/>
          <div className="card-body text-center">
            <div id='id_car' hidden>{vehiculo.id}</div>
            <h5 className="card-title fw-bold">{vehiculo.marca + ' - ' + vehiculo.modelo}</h5>
            <p className="card-text"><span className='fw-bold'>Placa: </span>{vehiculo.placa}</p>
            <p className="card-text"><span className='fw-bold'>Conductor: </span>{vehiculo.nombreConductor}</p>
            <div className='d-flex justify-content-evenly'>
              <button type="button" className="btn btn-outline-primary" onClick={async()=>{await alert_detail_vehiculo(vehiculo)}}>Ver Detalles</button>
              <button type="button" className="btn btn-outline-danger" onClick={()=>{handleDelete()}}>Eliminar</button>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </React.Fragment>
  );
};
