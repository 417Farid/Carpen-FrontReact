import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ResponsiveContainer } from 'recharts';
import NoRepuesto from './NoRepuesto';

import IconButton from '@mui/material/IconButton';
import DeleteForever from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Typography from '@mui/material/Typography';
import * as authService from "../../auth/auth.service";
import PageviewIcon from '@mui/icons-material/Pageview';
import { alert_error, alert_success } from '../../util/functions';


const Repuesto = ({ repuesto, listRepuestos, count, id_repuesto}) => {
  const {id_tipoRepuesto} = useParams();
  const navigate = useNavigate();

  const deleteTaller = async () => {
    /*try {
      const response = await authService.deleteTaller(id_repuesto);
      if (parseInt(response.status) === 200) {
        alert_success("Exito!", "Repuesto eliminado correctamente!");
        setTimeout(() => { listRepuestos() }, 2000)
      } else {
        alert_error("Error!", "No se pudo eliminar el Repuesto.");
      }
    } catch (error) {
      console.log(error);
    }*/
  }

  return (
    <tr key={repuesto.id} className="text-center">
      <th scope="row">{count}</th>
      <td>{repuesto.nombre}</td>
      <td>{repuesto.marca}</td>
      <td>{repuesto.fabricante}</td>
      <td>{repuesto.claseRepuesto}</td>
      <td className='row-cols-2 row-cols-md-auto'>
        <IconButton onClick={() => { navigate("/tiposRepuesto/"+id_tipoRepuesto+"/ver_repuestos/editar_repuesto/" + id_repuesto) }} title='Editar Repuesto' style={{ color: "blue" }}><EditIcon /></IconButton>
        <IconButton onClick={() => { navigate("/tiposRepuesto/"+id_tipoRepuesto+"/ver_repuestos/repuesto/" + id_repuesto) }} title='Ver Repuesto' style={{ color: "grey" }}><PageviewIcon /></IconButton>
        <IconButton onClick={() => { deleteTaller() }} title='Borrar Repuesto' style={{ color: "red" }}><DeleteForever /></IconButton>
      </td>
    </tr>
  );
}


function RepuestoList() {
  const {id_tipoRepuesto,id_taller} = useParams();
  const [repuestos, setRepuestos] = useState([]);
  const navigate = useNavigate();

  const listRepuestos = async () => {
    try {
      const response = await authService.getRepuestos();
      if (response.error === "") {
        setRepuestos(response.rows);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRepuestos = ()=>{
    try {
      authService.getRepuestos_Tipo(id_tipoRepuesto).then(response => {
        if (response.error === "") {
          setRepuestos(response.repuestos);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleBuscar = () => {
    let nombre = document.getElementById("buscarRespuestos").value;
    repuestos.forEach(taller => {
      if (repuestos.nombre === nombre) {
        navigate("/repuestos/ver_repuestos/" + taller.id);
      }
    });
    return null;
  }

  useEffect(() => {
    if (id_tipoRepuesto) {
      getRepuestos();
    } else {
      if (repuestos.length === 0) {
        listRepuestos();
      }
    }
  }, [])

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="container">
          <Typography component="h2" variant="h5" color="dark" gutterBottom>
            Lista de Repuestos
          </Typography>
          {
            (() => {
              if (repuestos.length !== 0) {
                return (
                  <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                      <button type='button' onClick={() => { navigate('/tiposRepuesto/'+id_tipoRepuesto+'/ver_repuestos/agregar_repuesto') }} className='btn btn-primary m-2'>Agregar Repuesto</button>
                      <form className="d-flex">
                        <input id='buscarRepuestos' className="form-control me-2" type="search" placeholder="Buscar Repuesto Nombre" aria-label="Buscar" />
                        <button className="btn btn-success" onClick={handleBuscar} type="button">Buscar</button>
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
                if (repuestos.length === 0) {
                  return (<NoRepuesto />)
                } else {
                  return (
                    <div className="table-responsive">
                      <table className="table table-striped table-bordered shadow">
                        <thead>
                          <tr className='text-center'>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Fabricante</th>
                            <th scope='col'>Clase</th>
                            <th scope='col'>Opciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            (() => {
                              if(id_tipoRepuesto){
                                return (
                                  repuestos.map((repuesto, index) => (
                                    <Repuesto key={repuesto.pk} repuesto={repuesto.fields} id_repuesto={repuesto.pk} listRepuestos={getRepuestos} count={index + 1} />
                                  ))
                                )
                              }else{
                                return (
                                  repuestos.map((repuesto, index) => (
                                    <Repuesto key={repuesto.id} repuesto={repuesto} listRepuestos={listRepuestos} count={index + 1} />
                                  ))
                                )
                              }
                            })()
                          }
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

export default RepuestoList