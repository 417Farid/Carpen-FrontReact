import React from "react";
import { ResponsiveContainer } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function UserManager() {
    return (
        <React.Fragment>
            <ResponsiveContainer>
                <section className={'py-5 d-flex flex-column justify-content-center align-items-center text-center'} id="contenedor">
                    <div>
                        <h2 className="py-5">Administrador de Usuarios</h2>
                    </div>
                    <div className="col-lg-10 col-xl-15 mx-auto" id="contenedor-div">
                        <table id="example" className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tipo</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Correo</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0001</td>
                                    <td>Administrador</td>
                                    <td>Farid</td>
                                    <td>Andre</td>
                                    <td>faridandredo@ufps.edu.co</td>
                                    <td>
                                        <div className="dropdown">
                                            <button id="dropdown-button" className="btn btn-primary dropdown-toggle" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Opciones
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-primary" aria-labelledby="dropdownMenuButton2">
                                                <li><a className="dropdown-item" href="Editar_User.html">Modificar</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Eliminar</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0002</td>
                                    <td>Conductor</td>
                                    <td>Daniel</td>
                                    <td>Ricciardo</td>
                                    <td>danielricc@redbull.com</td>
                                    <td>
                                        <div className="dropdown">
                                            <button id="dropdown-button" className="btn btn-primary dropdown-toggle" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Opciones
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                                <li><a className="dropdown-item" href="Editar_User.html">Modificar</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Eliminar</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0003</td>
                                    <td>Conductor</td>
                                    <td>Steve</td>
                                    <td>Jobs</td>
                                    <td>rip@apple.com</td>
                                    <td>
                                        <div className="dropdown">
                                            <button id="dropdown-button" className="btn btn-primary dropdown-toggle" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Opciones
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                                <li><a className="dropdown-item" href="Editar_User.html">Modificar</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Eliminar</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </section>
            </ResponsiveContainer >
        </React.Fragment >
    );
}

export default UserManager