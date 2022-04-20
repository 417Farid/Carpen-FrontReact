import React from 'react'
import {Button} from 'react-bootstrap'
function TallerList() {
    return (
        <>


    <div className="table-title">
    <div className="row">
        <div className="col-sm-6">
            <h2 className="text-success">Administrador de talleres </h2>
        </div>
        <div className="col-sm-6">
            <Button  className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Agregar Taller</span></Button>					
        </div>
    </div>
</div>

<div className="container">
<table className="table table-striped table-hover">
    <thead>
        <tr>
            <th>Nombre</th>
           
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Pagina Web</th>
        </tr>
    </thead>
    <tbody> 
    </tbody>
    </table> 
    </div>

  
    </>
    
  )
}

export default TallerList