import { Form, Button } from "react-bootstrap"
import { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
    const [data, setData] = useState({});
    const [editedData, setEditedData] = useState({})
    const navigate = useNavigate()
    const {postId} = useParams()
    const [cookies] = useCookies(["accessToken", "user"]);

    const  fetchSinglePost = () => {
        axios
            .get(`http://localhost:8000/post/${postId}`)  
            .then(res => {
              setData(res.data);
            })
            .catch(err => console.error(err))
    }

    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .put(
            `http://localhost:8000/post/${postId}?writer=${cookies.user.id}`, 
            data,
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

      useEffect(() => {
        fetchSinglePost()
        // console.log(postId)
    }, [])

    

    return (
      <div>
        <div className="d-flex flex-row mt-5 justify-content-between">
        <h3 className=''>edit post</h3>
          <Button 
          variant="dark" 
          className="align-self-start" 
          onClick={() => {
              navigate(-1);
          }}>
              back
          </Button>
        </div>
        
        <div className='w-100 mt-4 d-flex flex-column justify-content-center align-items-center' style={{height: "70vh"}}>
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>title</Form.Label>
                    <Form.Control type="text" placeholder="your post title" defaultValue={data.title} onChange={handleOnChange} name="title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>image</Form.Label>
                    <Form.Control type="text" placeholder="your image post link" defaultValue={data.image} onChange={handleOnChange} name="image" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>content</Form.Label>
                    <Form.Control as="textarea" rows={10} placeholder="your post content" defaultValue={data.body} onChange={handleOnChange} name="body" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    save changes
                </Button>
            </Form>
        </div>
      </div>
      
    )
}

export default EditPost