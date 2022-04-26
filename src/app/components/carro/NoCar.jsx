import * as React from 'react';
import { ResponsiveContainer } from 'recharts';

export default function NoCar() {

    return (
        <React.Fragment>
            <ResponsiveContainer>
                <div className={'d-flex flex-column justify-content-center align-items-center'}>
                    <img className={'mb-5'} src={process.env.PUBLIC_URL + '/img/nocar-img.png'} alt="No Car" height="200px"/>                    
                    <h1 className={'mb-5'}>No tienes ningun vehiculo en tu lista!</h1>
                    <button type="button" className="btn btn-primary">Agregar</button>
                </div>
            </ResponsiveContainer>
        </React.Fragment>
    );
};
