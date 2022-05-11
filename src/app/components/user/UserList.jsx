import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import * as authService from '../../auth/auth.service';

const UserItem = ({usuario,count}) => {
     return (
          <tr key={usuario.id}>
               <td>{count}</td>
               <td>{usuario.first_name + " " + usuario.last_name}</td>
               <td>{usuario.tipoDocumento + " - " + usuario.numeroDocumento}</td>
               <td>{usuario.email}</td>
               <td>{usuario.ciudad}</td>
               <td>
                    <div className="dropdown">
                         <button
                              id="dropdown-button"
                              className="btn btn-primary dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                         >
                              Opciones
                         </button>
                         <ul
                              className="dropdown-menu dropdown-menu-primary"
                              aria-labelledby="dropdownMenuButton2"
                         >
                              <li>
                                   <a className="dropdown-item" href="Editar_User.html">
                                        Modificar
                                   </a>
                              </li>
                              <li>
                                   <a className="dropdown-item" href="#">
                                        Eliminar
                                   </a>
                              </li>
                         </ul>
                    </div>
               </td>
          </tr>
     );
}

function ListaUsuarios() {
     const [usuarios, setUsuarios] = React.useState([]);
     const [cantUsers, setCantUsers] = React.useState(0);

     const listUsuarios = () => {
          try {
               authService.user_list().then(response=>{
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
                    <tr>
                         <th>ID</th>
                         <th>Nombre</th>
                         <th>Documento</th>
                         <th>Correo</th>
                         <th>Ciudad</th>
                         <th>Opciones</th>
                    </tr>
               </thead>
               <tbody>
                    {(() => {
                         let count = 0
                         return (
                              usuarios.map((usuario) => (
                                   <UserItem key={usuario.id} usuario={usuario} count={count+1}/>
                              ))
                         )
                    })()}
               </tbody>
          </table>
     );
}

export default ListaUsuarios;