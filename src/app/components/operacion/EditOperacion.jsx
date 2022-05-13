import React from "react";
import { ResponsiveContainer } from 'recharts';
import Typography from '@mui/material/Typography';

function EditOperacion() {
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
                                                        Editar Operacion
                                                    </Typography>
                                                    <hr />
                                                    <div className="container-fluid">
                                                        <form className="form-control">
                                                            <div className="row row-sm-auto">
                                                                <div className="form-group py-2">
                                                                    <label>Nombre de la Operacion</label>
                                                                    <input
                                                                        id="nombreOperacion"
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Cambio de Llanta"
                                                                        name="nombreOperacion"
                                                                        required
                                                                        maxLength="50"
                                                                    />
                                                                </div>
                                                                <div className="form-group py-2">
                                                                    <label>Descripcion de la Operacion</label>
                                                                    <input
                                                                        id="descripcionOperacion"
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Cambio de llanta de renault logan precio 23.000"
                                                                        name="descripcionOperacion"
                                                                        required
                                                                        maxLength="100"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="d-flex justify-content-center">
                                                                <button
                                                                    className="btn btn-primary btn-block my-2"
                                                                    type="button"
                                                                >
                                                                    Editar
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

export default EditOperacion