import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card1 from "../../components/Card";

const Blog = (props) => {

    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    const fetchPost = () => {
        axios
            .get("http://localhost:8000/posts")
            .then(res => setPosts(res.data))
            .catch(err => console.error(err))
    }

    const handleClick = (id) => {
        navigate(`/blog/${id}`)
    }

    const convertElipsisBody = (body) => {
        return body.length > 100 ? body.slice(0,100) + "..." : body
    }

    const convertElipsisTitle = (body) => {
        return body.length > 70 ? body.slice(0,70) + "..." : body
    }

    useEffect(() => {
        fetchPost();
    }, [])

    return (
        <div className="row mt-5">
            {posts.map((post, idx) => {
                return (
                    <div className="col-md mb-4" key={idx}>                           
                            <Card1 
                            title={convertElipsisTitle(post.title)} 
                            body={convertElipsisBody(post.body)} 
                            button={true}
                            buttonText="read more"
                            image={post.image}
                            imageWidth="100px"
                            onClick={() => handleClick(post.id)} 
                            width="25rem"
                            height="100%"/>
                    </div>
                )
            })}
        </div>
    )
}

export default Blog