import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [values, setValues] = useState({});

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        // console.log(values)
    };

    const handleSubmit = (e) => {

    };


    return (
        <div className='w-100 my-5 d-flex justify-content-center align-items-center' style={{height: "70vh"}}>
            <Form className='border border-1 border-black p-4 rounded w-75' onSubmit={handleSubmit}>
                <h3 className='mb-5'>login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>email address</Form.Label>
                    <Form.Control name="email" onChange={handleOnChange} type="email" placeholder="enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>password</Form.Label>
                    <Form.Control name="password" onChange={handleOnChange} type="password" placeholder="password" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    submit
                </Button>
            </Form>
        </div>
    );
}

export default Login;