import React from 'react'

function MantenimientoList() {
  return (
    <>


    <div className="table-title">
    <div className="row">
        <div className="col-sm-6">
            <h2 className="text-success">Lista de Mantenimientos  </h2>
        </div>
        <div className="col-sm-6">
            <Button  className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Agregar Mantenimiento</span></Button>					
        </div>
    </div>
</div>

<div className="container">
<table className="table table-striped table-hover">
    <thead>
        <tr>
            <th>Placa</th>
           
            <th>Fecha</th>
            <th>Kilometraje</th>
            <th>Costo</th>
           
            
        </tr>
    </thead>
    <tbody> 
    </tbody>
    </table> 
    </div>

  
    </>
  )
}

export default MantenimientoList