import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import IconButton from '@mui/material/IconButton';
import DeleteForever from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

import * as authService from '../../auth/auth.service';

const UserItem = ({ usuario, count }) => {

     return (
          <tr key={usuario.id} className='text-center'>
               <td>{count}</td>
               <td>{usuario.first_name + " " + usuario.last_name}</td>
               <td>{usuario.tipoDocumento + " - " + usuario.numeroDocumento}</td>
               <td>{usuario.email}</td>
               <td>{usuario.ciudad}</td>
               <td scope='col'>
                    <IconButton title='Editar Usuario' style={{ color: "blue" }}><EditIcon /></IconButton>
                    <IconButton title='Borrar Usuario' style={{ color: "red" }}><DeleteForever /></IconButton>
               </td>
          </tr>
     );
}

function ListaUsuarios() {
     const [usuarios, setUsuarios] = React.useState([]);
     const [cantUsers, setCantUsers] = React.useState(0);

     const listUsuarios = () => {
          try {
               authService.user_list().then(response => {
                    if (response.error === "") {
                         setUsuarios(response.rows);
                         setCantUsers(response.total);
                    }
               });
          } catch (error) {
               console.log(error);
          }
     }

     React.useEffect(() => {
          listUsuarios();
     }, []);

     return (
          <table id="example" className="table table-striped table-bordered shadow">
               <thead>
                    <tr className='text-center'>
                         <th>#</th>
                         <th>Nombre</th>
                         <th>Documento</th>
                         <th>Correo</th>
                         <th>Ciudad</th>
                         <th>Opciones</th>
                    </tr>
               </thead>
               <tbody>
                    {(() => {
                         return (
                              usuarios.map((usuario, index) => (
                                   <UserItem key={usuario.id} usuario={usuario} count={index + 1} />
                              ))
                         )
                    })()}
               </tbody>
          </table>
     );
}

export default ListaUsuarios;