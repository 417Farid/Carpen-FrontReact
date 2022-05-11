import React, { useEffect, useState } from 'react'
import { ResponsiveContainer } from 'recharts';
import DeleteForever from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';import AssignmentTurnedIn from '@mui/icons-material/AssignmentTurnedIn';
import HandymanIcon from '@mui/icons-material/Handyman';
import PageviewIcon from '@mui/icons-material/Pageview';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import NoTaller from './NoTaller';
import * as authService from "../../auth/auth.service";
import { alert_error, alert_success } from '../../util/functions';

const Taller = ({ taller, listTalleres,count}) => {
  const navigate = useNavigate();

  const deleteTaller = async()=>{
    try {
      const response = await authService.deleteTaller(taller.id);
      if(parseInt(response.status)===200){
        alert_success("Exito!", "Taller eliminado correctamente!");
        setTimeout(()=>{listTalleres()},2000)
      }else{
        alert_error("Error!","No se pudo eliminar el taller.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <tr key={taller.id}>
      <th scope="row">{count}</th>
      <td>{taller.nombre}</td>
      <td>{taller.direccion}</td>
      <td>{taller.telefono}</td>
      <td>{taller.email}</td>
      <td>
        <IconButton onClick={()=>{navigate("/talleres/editar_taller")}} title='Editar Taller' style={{ color: "blue" }}><EditIcon /></IconButton>
        <IconButton onClick={()=>{navigate("/talleres/ver_taller")}} title='Ver Taller' style={{ color: "grey" }}><PageviewIcon /></IconButton>
        <IconButton title='Añadir Mantenimiento' style={{ color: "green" }}><AssignmentTurnedIn /></IconButton>
        <IconButton title='Añadir Repuesto' style={{ color: "orange" }}><HandymanIcon /></IconButton>
        <IconButton onClick={()=>{deleteTaller()}} title='Borrar Taller' style={{ color: "red" }}><DeleteForever /></IconButton>
      </td>
    </tr>
  );
}

function TallerList() {
  const navigate = useNavigate();
  const [talleres, setTalleres] = useState([]);

  const listTalleres = async () => {
    try {
      const response = await authService.getTalleres();
      response.json().then(value=>{
        if(parseInt(response.status)===200){
          setTalleres(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (talleres.length === 0) {
      listTalleres();
    }
  }, [])

  const handleBuscar = () => {
    /*let nombre = document.getElementById("buscarTaller").value;
    talleres.forEach(taller => {
        if(taller.fields.nombre===nombre){
            navigate("/home/detalle_taller/"+taller.id);
        }     
    });
    return null;*/
  }

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="container">
          <Typography component="h2" variant="h5" color="dark" gutterBottom>
            Lista de Talleres
          </Typography>
          {
            (() => {
              if (talleres.length !== 0) {
                return (
                  <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                      <button type='button' onClick={() => { navigate('/talleres/agregar_taller') }} className='btn btn-primary m-2'>Agregar Taller</button>
                      <form className="d-flex">
                        <input id='buscarTaller' className="form-control me-2" type="search" placeholder="Buscar Taller Nombre" aria-label="Search" />
                        <button className="btn btn-success" onClick={handleBuscar} type="button">Search</button>
                      </form>
                    </div>
                  </nav>
                )
              }
            })()
          }
          <hr />
          <div className='container-fluid'>
            {
              (() => {
                if (talleres.length === 0) {
                  return (<NoTaller />)
                } else {
                  return (
                    <div className="table-responsive">
                      <table className="table table-striped table-bordered shadow">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Direccion</th>
                            <th scope='col'>Telefono</th>
                            <th scope='col'>Email</th>
                            <th scope="col">Opciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(() => {
                            let count = 0
                            return (
                              talleres.map((taller) => (       
                                <Taller key={taller.id} taller={taller} listTalleres={listTalleres} count={count+1}/>
                              ))
                            )
                          })()}
                        </tbody>
                      </table>
                    </div>
                  )
                }
              })()
            }
          </div>
        </div>
      </ResponsiveContainer >
    </React.Fragment >
  );
}

export default TallerList