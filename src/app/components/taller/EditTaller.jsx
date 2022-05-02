import React, { useState } from 'react'

import {Form,Button} from 'react-bootstrap'
function EditTaller() {
    const [nombre,setNombre]=useState('')
    const [latitud,setLatitud]=useState('')
    const [longitud,setLongtiud]=useState('')
    const [direccion,setDireccion]=useState('')
    const [telefono,setTelefono]=useState('')
    const [email,setEmail]=useState('')
    const [pagina,setPagina]=useState('')


  return (

    <>
      <div className=' container row '>
<div className='col-md-3 '> 
<Button type="submit" variant="success" className="mt-3">
          Agregar Repuestos
        </Button>

</div>

<div className='col-md-3 '> 
<Button type="submit" variant="success" className="mt-3">
          Lista de mantenimientos
        </Button>

</div>
      </div>

      
  
            <h1 className="text-center text-success">Editar Taller</h1>
            <div className="row container justify-content-center"> 
            <Form>
            <Form.Group className="py-2"controlId="formBasicEmail">
                <Form.Label>Nombre </Form.Label>
                <Form.Control type="text" value={nombre}  onChange={(e) => setNombre(e.target.value)}  placeholder="Ingresa el nombre" />
            </Form.Group>

            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Latitud </Form.Label>
                <Form.Control type="number" value={latitud} onChange={(e) => setLatitud(e.target.value)} placeholder="Ingresa la  latitud" />
            </Form.Group>



            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Longitud </Form.Label>
                <Form.Control type="number" value={longitud}  onChange={(e) => setLongtiud(e.target.value)}  placeholder="Ingresa la longitud" />
            </Form.Group>

            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Direccion </Form.Label>
                <Form.Control type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)}  placeholder="Ingrese la direccion" />
            </Form.Group>

            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Telefono </Form.Label>
                <Form.Control type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Ingresa el telefono" />
            </Form.Group>


            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" value={email}  onChange={(e) => setEmail(e.target.value)}  placeholder="Ingresa el email" />
            </Form.Group>

            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Pagina Web </Form.Label>
                <Form.Control type="url"  value={pagina} onChange={(e) => setPagina(e.target.value)}  placeholder="Ingresa url" />
            </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Registrar
        </Button>

        </Form>
        </div>
        </>
  )
}

export default EditTaller
