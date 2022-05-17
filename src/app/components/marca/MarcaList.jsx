import React, { useEffect, useState } from 'react'
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import DeleteForever from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HandymanIcon from '@mui/icons-material/Handyman';
import PageviewIcon from '@mui/icons-material/Pageview';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NoMarca from './NoMarca';
import { useNavigate } from 'react-router-dom';
import * as authService from "../../auth/auth.service";
import { alert_error, alert_success } from '../../util/functions';

const Marca = ({ marca, listMarcas,count}) => {
  const navigate = useNavigate();
  const deleteMarca = async()=>{
    /*try {
      const response = await authService.deleteMarca(marca.id);
      if(parseInt(response.status)===200){
        alert_success("Exito!", "Marca eliminada correctamente!");
        setTimeout(()=>{listMarcas()},2000)
      }else{
        alert_error("Error!","No se pudo eliminar la marca.");
      }
    } catch (error) {
      console.log(error);
    }*/
  }

  return (
    <tr key={marca.id} className="text-center">
      <th scope="row">{count}</th>
      <td>{marca.nombre}</td>
      <td>{marca.descripcion}</td>
      <td className='row-cols-1 row-cols-md-auto'>
        <IconButton onClick={()=>{navigate("/marcas/editar_marca/"+marca.id)}} title='Editar Marca' style={{ color: "blue" }}><EditIcon /></IconButton>
        <IconButton onClick={()=>{navigate("/marcas/"+marca.id+"/ver_lineas")}} title='Ver Lineas' style={{ color: "grey" }}><PageviewIcon /></IconButton>
        <IconButton onClick={()=>{deleteMarca()}} title='Borrar Marca' style={{ color: "red" }}><DeleteForever /></IconButton>
      </td>
    </tr>
  );
}

function MarcaList() {
  const navigate = useNavigate();

  const [marcas, setMarcas] = useState([]);

  const listMarcas = async () => {
    try {
      try {
        authService.getMarcas().then(response => {
          if (response.error === "") {
            setMarcas(response.rows);
          }
        });
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (marcas.length === 0) {
      listMarcas();
    }
  }, [])

  const handleBuscar = () => {
    let nombre = document.getElementById("buscarMarca").value;
    marcas.forEach(marca => {
        if(marca.nombre===nombre){
            navigate("/marcas/ver_marca/"+marca.id);
        }     
    });
    return null;
  }

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="container">
          <Typography component="h2" variant="h5" color="dark" gutterBottom>
            Lista de Marcas
          </Typography>
          {
            (() => {
              if (marcas.length !== 0) {
                return (
                  <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                      <button type='button' onClick={() => { navigate('/marcas/agregar_marca') }} className='btn btn-primary m-2'>Agregar Marca</button>
                      <form className="d-flex">
                        <input id='buscarMarca' className="form-control me-2" type="search" placeholder="Buscar Taller Nombre" aria-label="Search" />
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
                if (marcas.length === 0) {
                  return (<NoMarca />)
                } else {
                  return (
                    <div className="table-responsive">
                      <table className="table table-striped table-bordered shadow">
                        <thead>
                          <tr className='text-center'>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Opciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(() => {
                            return (
                              marcas.map((marca,index) => (       
                                <Marca key={marca.id} marca={marca} listMarcas={listMarcas} count={index+1}/>
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

export default MarcaList;