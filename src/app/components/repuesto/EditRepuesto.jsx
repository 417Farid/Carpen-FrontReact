import React from "react";
import { ResponsiveContainer } from 'recharts';
import Typography from '@mui/material/Typography';

function EditRepuesto() {
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
                                                        Editar Repuesto
                                                    </Typography>
                                                    <hr />
                                                    <div className="container-fluid">
                                                        <form className="form-control">
                                                            <div className="row row-sm-auto">
                                                                <div className="form-group py-2">
                                                                    <label>Nombre del Repuesto</label>
                                                                    <input
                                                                        id="nombreRepuesto"
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="LLANTA GOODYEAR 250/50"
                                                                        name="nombreRepuesto"
                                                                        required
                                                                        maxLength="50"
                                                                    />
                                                                </div>
                                                                <div className="form-group py-2">
                                                                    <label>Descripcion del Repuesto</label>
                                                                    <input
                                                                        id="descripcionRepuesto"
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Llantas Auto Carro 225/50 R17 Instalacion incluida Vantage H-8 Boto"
                                                                        name="descripcionRepuesto"
                                                                        required
                                                                        maxLength="100"
                                                                    />
                                                                </div>
                                                                <div className="form-group py-2">
                                                                    <label>Marca del Repuesto</label>
                                                                    <input
                                                                        id="marcaRepuesto"
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="GOODYEAR"
                                                                        name="marcaRepuesto"
                                                                        required
                                                                        maxLength="30"
                                                                    />
                                                                </div>
                                                                <div className="form-group py-2">
                                                                    <label>Fabricante del Repuesto</label>
                                                                    <input
                                                                        id="fabricanteRepuesto"
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="AMERICAN TIRES INC"
                                                                        name="fabricanteRepuesto"
                                                                        required
                                                                        maxLength="30"
                                                                    />
                                                                </div>
                                                                <div className="form-group py-2">
                                                                    <label>Foto del Vehiculo</label>
                                                                    <input
                                                                        id="formFile"
                                                                        className="form-control"
                                                                        type="file"
                                                                        accept="image/png, image/jpeg"
                                                                        required
                                                                    />
                                                                    <input type="text" name="fotoRepuesto" id="fotoRepuesto" hidden />
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

export default EditRepuesto