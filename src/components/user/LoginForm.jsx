import { Row, Col, Button, Form,Container } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from "react";

import * as UserServer from './UserServer';

function LoginForm() {
    const navigate = useNavigate();

    const [user,setUser] = useState([]);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const user_conected = await UserServer.userConected()
    };

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
      <>
          <Container>
              <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">CARPEN USER</h1>
              <Row className="mt-5">
                  <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                      <Form onSubmit={handleSubmit}>
                          <Form.Group controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleInputChange} required/>
                          </Form.Group>

                          <Form.Group controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleInputChange} required/>
                          </Form.Group>

                          <div className="d-flex justify-content-center">
                            <Button className="my-3"variant="success btn-block" type="submit">
                                Login
                            </Button>
                            <Button className="my-3 ms-4" onClick={() => navigate(`/sign_in`)} variant="success btn-block" type="button">
                                Sign in
                            </Button>
                          </div>
                      </Form>
                  </Col>
              </Row>
              <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022</h6>
          </Container>
      </>
  );
    
};

export default LoginForm;