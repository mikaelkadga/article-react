import { Form, Button } from "react-bootstrap"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const EditPost = () => {
    const [data, setData] = useState({})

    const  fetchSinglePost = () => {
        axios
            .put(`http://localhost:8000/post`, {
              headers: {
                Authorization: `Bearer `
              }
            })  
            .then(res => {
              setData(res.data);
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='w-100 my-5 d-flex justify-content-center align-items-center' style={{height: "70vh"}}>
            <Form className="w-75">
                <h3 className='mb-5'>edit post</h3>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>title</Form.Label>
                    <Form.Control type="text" placeholder="your post title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>image</Form.Label>
                    <Form.Control type="text" placeholder="your image post link" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>content</Form.Label>
                    <Form.Control as="textarea" rows={10} placeholder="your post content" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    submit
                </Button>
            </Form>
        </div>
    )
}

export default EditPost