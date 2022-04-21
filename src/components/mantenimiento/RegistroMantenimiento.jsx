import React from 'react'

function RegistroMantenimiento() {
 return (
   <div>
    <h1 className="text-center text-success">Registro Mantenimientos</h1>
    <Form.Group className="py-2"  controlId="formBasicEmail">
                <Form.Label>Placa del carro</Form.Label>
                <Form.Control
                        as="select"
                        
                      >
                        <option>Escoja..</option>
                        <option>Efectivo</option>
                        <option>Debito</option>
                        <option>Credito</option>
                       
                      </Form.Control>
            </Form.Group>
    <Form>
    <Form.Group className="py-2"controlId="formBasicEmail">
        <Form.Label>Kilometraje mantenimiento </Form.Label>
        <Form.Control type="number" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="py-2" controlId="formBasicEmail">
        <Form.Label>costo mantenimiento </Form.Label>
        <Form.Control type="number" placeholder="Enter email" />
    </Form.Group>

   

    <Form.Group className="py-2"  controlId="formBasicEmail">
                <Form.Label>Forma de  pago </Form.Label>
                <Form.Control
                        as="select"
                        
                      >
                        <option>Escoja..</option>
                        <option>Efectivo</option>
                        <option>Debito</option>
                        <option>Credito</option>
                       
                      </Form.Control>
            </Form.Group>
<Button type="submit" variant="success" className="mt-3">
  Registrar
</Button>

</Form>
</div>
  )
}

export default RegistroMantenimiento
