import * as React from 'react';
import { ResponsiveContainer } from 'recharts';
import { alert_error, alert_success } from '../../util/functions';
import * as authService from '../../auth/auth.service'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export default function Card({ vehiculo, id_car, list_vehiculos }) {

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      Swal.fire({
        title: 'Está usted seguro?',
        text: "Esta acción no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          authService.deleteInstanceVehiculo(id_car, vehiculo).then(value=>{
            if (value.error === "") {
              alert_success("Exito!", value.message);
              setTimeout(list_vehiculos, 1500);
            } else {
              alert_error("Oops!", value.error);
            }
          });
        }
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="card shadow" style={{ width: '18rem' }}>
          <img src={vehiculo.foto} className="card-img-top" style={{ height: '30vh', width: '100%', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title fw-bold text-center">{vehiculo.marca + ' - ' + vehiculo.modelo}</h5>
            <p className="card-text"><span className='fw-bold mx-3'>Placa: </span>{vehiculo.placa}</p>
            <p className="card-text"><span className='fw-bold mx-3'>Conductor: </span>{vehiculo.nombreConductor}</p>
            <div className='d-flex justify-content-evenly'>
              <button type="button" className="btn btn-outline-primary" onClick={()=>{navigate("/home/detalle_vehiculo/"+id_car)}}>Ver Detalles</button>
              <button type="button" className="btn btn-outline-danger" onClick={() => { handleDelete() }}>Eliminar</button>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </React.Fragment>
  );
};
