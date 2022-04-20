import React from 'react'
import {Button } from 'react-bootstrap'
function CarroList() {
  return (
    <>


    <div className="table-title">
    <div className="row">
        <div className="col-sm-6">
            <h2 className="text-success">Lista de autos  </h2>
        </div>
        <div className="col-sm-6">
            <Button  className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Agregar auto</span></Button>					
        </div>
    </div>
</div>

<div className="container">
<table className="table table-striped table-hover">
    <thead>
        <tr>
            <th>Placa</th>
           
            <th>Marca</th>
            <th>Modelo</th>
            <th>Linea</th>
            <th>Color</th>

        </tr>
    </thead>
    <tbody> 
    </tbody>
    </table> 
    </div>

  
    </>
  )
}

export default CarroList