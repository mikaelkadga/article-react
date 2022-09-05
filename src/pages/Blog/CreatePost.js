import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const [values, setValues] = useState({})
    const navigate = useNavigate()
    const [cookies] = useCookies(["accessToken", "user"]);

    const handleOnChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post(
            `http://localhost:8000/post?writer=${cookies.user.id}`,
            values,
            {
              headers: {
                Authorization: `Bearer ${cookies.accessToken}`,
              },
            }
          )
          .then((res) => {
            // console.log(res);
            navigate("/myposts");
          })
          .catch((err) => {
            console.log(err);
          });
      };

    return (
        
        <div className='w-100 my-5 d-flex justify-content-center align-items-center' style={{height: "70vh"}}>
            <Form className="w-100 mt-5" onSubmit={handleSubmit}>               
                <h3 className='mb-5'>create post</h3>    
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>title</Form.Label>
                    <Form.Control type="text" placeholder="your post title" name="title" onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>image</Form.Label>
                    <Form.Control type="text" placeholder="your image post link" name="image" onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>content</Form.Label>
                    <Form.Control as="textarea" rows={10} placeholder="your post content" name="body" onChange={handleOnChange} />
                </Form.Group>
                <Button variant="dark" type="submit">
                    submit
                </Button>
            </Form>
        </div>
        
    )
}

export default CreatePost