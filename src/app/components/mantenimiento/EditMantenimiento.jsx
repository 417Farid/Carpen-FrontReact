import React from "react";
import { ResponsiveContainer } from 'recharts';
import Typography from '@mui/material/Typography';

function EditarMantenimiento() {
    return (
        <React.Fragment>
            <ResponsiveContainer>
                <div className={'d-flex flex-column justify-content-center align-items-center text-center'}>
                    <div className="maincontainer">
                        <div className="container-fluid">
                            <div className="row no-gutter">
                                <div className="col-md-15 bg-light">
                                    <div className="regCar d-flex align-items-center py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-15 col-xl-15 mx-auto">
                                                    <Typography component="h3" variant="h3" color="dark" gutterBottom>
                                                        Editar Mantenimiento
                                                    </Typography>
                                                    <hr />
                                                    <div className="container-fluid">
                                                        <form className="form-control">
                                                            <div className="row row-sm-auto">
                                                                <div className="form-group py-2">
                                                                    <label>Nombre del Mantenimiento</label>
                                                                    <input
                                                                        id="nombreMantenimiento"
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Cambio de Aceite de Motor"
                                                                        name="nombreMantenimiento"
                                                                        required
                                                                        maxLength="100"
                                                                    />
                                                                </div>
                                                                <div className="form-group py-2">
                                                                    <label>Placa del Vehiculo</label>
                                                                    <div className="input-group">
                                                                        <input id="placa1" required name="valor1_placa"  maxLength="3" type="text" className="form-control" placeholder="JGX" aria-label="Username" />
                                                                        <span className="input-group-text">-</span>
                                                                        <input id="placa2" required name="valor2_placa"  maxLength="3" type="text" className="form-control" placeholder="123" aria-label="Server" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group py-2">
                                                                    <label>Fecha de Mantenimiento</label> <br />
                                                                    <input
                                                                        id="fechaMantenimiento"
                                                                        type="date"
                                                                        className="form-control"
                                                                        name="fechaMantenimiento"
                                                                    />
                                                                </div>
                                                                <div className="form-group py-2">
                                                                    <label>Kilometraje necesario para Realizar Mantenimiento(Solo Numeros)</label>
                                                                    <input
                                                                        id="kilometrajeMantenimiento"
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="10.000"
                                                                        name="kilometrajeMantenimiento"
                                                                        required
                                                                        maxLength="7"
                                                                    />
                                                                </div>
                                                                <div className="form-group py-2">
                                                                    <label>Costo del Mantenimiento(Solo Numeros)</label>
                                                                    <input
                                                                        id="costoMantenimiento"
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="250.000"
                                                                        name="costoMantenimiento"
                                                                        
                                                                        required
                                                                        maxLength="10"
                                                                    />
                                                                </div>
                                                                <div className="form-group py-2">
                                                                    <label>Forma de Pago del Taller</label>
                                                                    <select
                                                                        id="formaPago"
                                                                        className="form-select"
                                                                        name="formaPago"
                                                                        
                                                                        required
                                                                    >
                                                                        <option hidden value="">Forma de Pago</option>
                                                                        <option value="efectivo">Efectivo</option>
                                                                        <option value="transfer">Transferencia</option>
                                                                        <option defaultValue={""} value="credit-debit">Tarjeta de Credito o Debito</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="d-flex justify-content-center">
                                                                <button
                                                                    className="btn btn-primary btn-block my-2"
                                                                    type="button"
                                                                >
                                                                    Registrar
                                                                </button>
                                                                <button type="button" className="btn btn-secondary btn-block my-2 mx-2">Regresar</button>
                                                                <button id="btn_register_man" type="submit" hidden></button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ResponsiveContainer >
        </React.Fragment >
    );
}

export default EditarMantenimiento