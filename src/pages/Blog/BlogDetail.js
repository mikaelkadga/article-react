import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Card1 from "../../components/Card";
import moment from "moment/moment";

const BlogDetail = () => {
    const {postId} = useParams()
    const [post, setPost] = useState({})
    const navigate = useNavigate()

    const  fetchSinglePost = () => {
        axios
            .get(`http://localhost:8000/post/${postId}`, {
                headers: {
                    // 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJNaWthZWwgS2FkZ2EiLCJlbWFpbCI6Im1pa2FlbGthZGdhQGdtYWlsLmNvbSIsImlhdCI6MTY2MDQ2OTI5NCwiZXhwIjoxNjYwNTU1Njk0fQ.WUxL3O6DYHywaAxLYN27UZi1b20fGddg5d6_XKB8sRM` 
                  }
            })
            .then(res => setPost(res.data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchSinglePost()
        console.log(postId)
    }, [])



    return (
        <div className="d-flex flex-column align-items-center mt-5" style={{width:"100%"}}>
          <button
          className="align-self-start rounded mb-4"
            onClick={() => {
              navigate(-1);
            }}
          >
           back
          </button>
          <Card1 width="100%" 
          height="100%" 
          createdAt={moment(post.createdAt).format('MM-DD-YYYY')} 
          title={post.title} 
          body={post.body}
          image={post.image} 
          imageWidth="300px"
          style={{padding: "1rem"}} />
        </div>
    )
}


export default BlogDetail