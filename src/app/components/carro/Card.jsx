import * as React from 'react';
import { ResponsiveContainer } from 'recharts';
import DeleteForever from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import PageviewIcon from '@mui/icons-material/Pageview';
import IconButton from '@mui/material/IconButton';
import { alert_error, alert_success } from '../../util/functions';
import * as authService from '../../auth/auth.service'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export default function Card({ vehiculo, id_car, list_vehiculos }) {

  const navigate = useNavigate();

  const [marca, setMarca] = React.useState({ nombre: "" });
  const [linea, setLinea] = React.useState({ nombre: "" });

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
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          authService.deleteInstanceVehiculo(id_car, vehiculo).then(response => {
            response.json().then(value => {
              if (value.error === "") {
                alert_success("Exito!", value.message);
                setTimeout(() => { list_vehiculos() }, 1500);
              } else {
                alert_error("Oops!", value.error);
              }
            });
          });
        }
      })
    } catch (error) {
      console.log(error);
    }
  };

  const getMarca = () => {
    try {
      authService.findMarca(vehiculo.marca).then(response => {
        if (response.error === "") {
          setMarca(response.marca);
        }
      });
    } catch (error) {
      console.log(error)
    }
  }

  const getLinea = () => {
    try {
      authService.findLinea(vehiculo.linea).then(response => {
        if (response.error === "") {
          setLinea(response.linea);
        }
      });
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getMarca();
    getLinea();
  }, [])

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="card shadow" style={{ width: '18rem' }}>
          <img src={vehiculo.foto} className="card-img-top" style={{ height: '30vh', width: '100%', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title fw-bold text-center">{marca.nombre + ' - ' + linea.nombre}</h5>
            <p className="card-text"><span className='fw-bold mx-3'>Placa: </span>{vehiculo.placa}</p>
            <p className="card-text"><span className='fw-bold mx-3'>Modelo: </span>{vehiculo.modelo}</p>
            <p className="card-text"><span className='fw-bold mx-3'>Conductor: </span>{vehiculo.nombreConductor}</p>
            <div className='d-flex justify-content-evenly'>
              <IconButton onClick={() => { navigate("/home/editar_vehiculo/" + id_car) }} title='Editar Vehiculo' style={{ color: "blue" }}><EditIcon /></IconButton>
              <IconButton onClick={() => { navigate("/home/detalle_vehiculo/" + id_car) }} title='Ver Vehiculo' style={{ color: "grey" }}><PageviewIcon /></IconButton>
              <IconButton onClick={() => { navigate("/home/vehiculo/"+id_car+"/mantenimientos") }} title='Ver Mantenimientos' style={{ color: "green" }}><CarRepairIcon /></IconButton>
              <IconButton onClick={() => { handleDelete() }} title='Borrar Vehiculo' style={{ color: "red" }}><DeleteForever /></IconButton>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </React.Fragment>
  );
};
