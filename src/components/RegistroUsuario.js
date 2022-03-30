import React, { useState } from 'react'
import FormContainer from './FormContainer'
import {Form,Button} from 'react-bootstrap'
function RegistroUsuario() {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [tipoD, setTipoD] = useState('')
    const [nDocumento, setNdocumento] = useState('')
    const [contrasenia, setContrasenia] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [email, setEmail] = useState('')

    return (
        <FormContainer>
            <h1 className="text-center text-success">Registro Usuario</h1>

            <Form>
            <Form.Group className="py-2"controlId="formBasicEmail">
                <Form.Label>Nombre </Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Apellido </Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="py-2"  controlId="formBasicEmail">
                <Form.Label>Tipo Documento </Form.Label>
                <Form.Control
                        as="select"
                        
                      >
                        <option>Escoja..</option>
                        <option>Cedula de ciudadania</option>
                        <option>Cedula de extranjeria</option>
                       
                      </Form.Control>
            </Form.Group>

            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Contraseña </Form.Label>
                <Form.Control type="password" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Ciudad </Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>


            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            
        <Button type="submit" variant="success" className="mt-3">
          Registrar
        </Button>
            </Form>
        </FormContainer>
    )
}

export default RegistroUsuario