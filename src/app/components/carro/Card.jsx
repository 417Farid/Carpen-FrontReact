import * as React from 'react';
import { ResponsiveContainer } from 'recharts';

export default function Card() {

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="card" style={{width: '18rem'}}>
          <img src={process.env.PUBLIC_URL + '/img/gallardo.jpg'} className="card-img-top"/>
          <div className="card-body text-center">
            <h5 className="card-title">Lambo Gallardo</h5>
            <p className="card-text">CONDUCTOR: FARID DUENIO:YONER</p>
            <a className="btn btn-primary">Ver detalles</a>
          </div>
        </div>
      </ResponsiveContainer>
    </React.Fragment>
  );
};
