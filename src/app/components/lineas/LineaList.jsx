import React, { useEffect, useState } from 'react'
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import DeleteForever from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import * as authService from "../../auth/auth.service";
import { alert_error, alert_success } from '../../util/functions';
import NoLinea from './NoLinea';

const Linea = ({ linea, lineaList,id_linea, count }) => {
  const { id_marca } = useParams();
  const navigate = useNavigate();

  const deleteLinea = async () => {
    /*try {
      const response = await authService.deleteMarca(marca.id);
      if(parseInt(response.status)===200){
        alert_success("Exito!", "Marca eliminado correctamente!");
        setTimeout(()=>{listMarcas()},2000)
      }else{
        alert_error("Error!","No se pudo eliminar la marca.");
      }
    } catch (error) {
      console.log(error);
    }*/
  }

  return (
    <tr key={linea.id} className="text-center">
      <th scope="row">{count}</th>
      <td>{linea.nombre}</td>
      <td>{linea.descripcion}</td>
      <td className='row-cols-2 row-cols-md-auto'>
        <IconButton onClick={() => { navigate("/marcas/"+id_marca+"/editar_linea/" + id_linea) }} title='Editar Linea' style={{ color: "blue" }}><EditIcon /></IconButton>
        <IconButton onClick={() => { deleteLinea() }} title='Borrar Marca' style={{ color: "red" }}><DeleteForever /></IconButton>
      </td>
    </tr>
  );
}

function LineaList() {
  const { id_marca } = useParams();

  const navigate = useNavigate();

  const [lineas, setLineas] = useState([]);

  const listLineas = async () => {
    try {
      authService.getLineas().then(response => {
        if (response.error === "") {
          setLineas(response.rows);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getLineas = async () => {
    try {
      authService.getLineas_Marca(id_marca).then(response => {
        if (response.error === "") {
          setLineas(response.lineas);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id_marca) {
      getLineas();
    } else {
      if (lineas.length === 0) {
        listLineas();
      }
    }
  }, [])

  const handleBuscar = () => {
    /*let nombre = document.getElementById("buscarLinea").value;
    lineas.forEach(linea => {
      if (linea.nombre === nombre) {
        navigate("/marcas/"+id_marca+"/ver_linea/" + linea.id);
      }
    });
    return null;*/
  }

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="container">
          <Typography component="h2" variant="h5" color="dark" gutterBottom>
            Lista de Lineas
          </Typography>
          {
            (() => {
              if (lineas.length !== 0) {
                return (
                  <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                      <button type='button' onClick={() => { navigate('/marcas/'+id_marca+'/agregar_linea') }} className='btn btn-primary m-2'>Agregar Linea</button>
                      <form className="d-flex">
                        <input id='buscarLinea' className="form-control me-2" type="search" placeholder="Buscar Linea Nombre" aria-label="Search" />
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
                if (lineas.length === 0) {
                  return (<NoLinea />)
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
                            if (id_marca) {
                              return (
                                lineas.map((linea, index) => (
                                  <Linea key={linea.pk} linea={linea.fields} listMarcas={listLineas} id_linea={linea.pk} count={index + 1} />
                                ))
                              )
                            } else {
                              return (
                                lineas.map((linea, index) => (
                                  <Linea key={linea.id} linea={linea} listMarcas={listLineas} count={index + 1} />
                                ))
                              )
                            }
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

export default LineaList;