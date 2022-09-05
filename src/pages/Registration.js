import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Registration() {

    const [values, setValues] = useState({});
    const [cookies, setCookies] = useCookies(["accessToken", "userId", "email"]);
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:8000/user/registration", values)
          .then((res) => {
            navigate(`/login`);
            console.log(res.data);
          })
          .catch((err) => alert("registration failed"));
    };

    return (
        <div className='w-100 my-5 d-flex justify-content-center align-items-center' style={{height: "70vh"}}>
            <Form className='border border-1 border-black p-4 rounded w-75' onSubmit={handleSubmit}>
                <h3 className='mb-5'>register</h3>
                <Form.Group className="mb-3" controlId="formBasicFullname">
                    <Form.Label>fullname</Form.Label>
                    <Form.Control name="fullname" onChange={handleOnChange} type="text" placeholder="enter fullname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>email address</Form.Label>
                    <Form.Control name="email" onChange={handleOnChange} type="email" placeholder="enter email" />
                    <Form.Text className="text-muted">
                    we'll never share your email with anyone else.
                    </Form.Text>
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

export default Registration;