import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import Card1 from "../../components/Card";
import moment from "moment";
import { Button } from "react-bootstrap";


const BlogWriterDetail = () => {
    const [data, setData] = useState([])
    const [cookies, setCookies] = useCookies(["accessToken", "user"]);
    const navigate = useNavigate()

    const handleClick = (postId) => {
      navigate(`/editpost/${postId}`)
  }

  const convertElipsisBody = (body) => {
    return body.length > 100 ? body.slice(0,100) + "..." : body
}

const convertElipsisTitle = (body) => {
    return body.length > 70 ? body.slice(0,70) + "..." : body
}

    // useEffect(() => {
    //   // console.log(cookies.user.id)
    //   // console.log(data)
    //   fetchSingleWriter()
    // }, [])

    const  fetchSingleWriter = () => {
        axios
            .get(`http://localhost:8000/post?writer=${cookies.user.id}`, {
              headers: {
                Authorization: `Bearer ${cookies.accessToken}`
              }
            })  
            .then(res => {
              setData(res.data);
            })
            .catch(err => console.error(err))
    }

    if (!cookies.accessToken) {
      return(
        <div style={{
          height: '650px',
          // border: 'solid 1px black',
          justifyContent: 'center', //Centered horizontally
          alignItems: 'center', //Centered vertically
          display: "flex",
          marginTop:"1rem"
       }}>
          <h1 className="text-center mt-6">sign in, please</h1>
      </div>
      )
    } else {
      fetchSingleWriter()
    }

    return (
      <div className="mt-5">
        <Button 
        variant="dark" 
        className="align-self-end mb-4" 
        onClick={() => {
          navigate(`/createpost`);
        }}>
            create post
        </Button>
        <div className="row">
          {data?.map((p, idx) => {
                  return (
                      <div className="col-md-4 mb-4" key={idx}>                           
                              <Card1 
                              title={convertElipsisTitle(p.title)} 
                              body={convertElipsisBody(p.body)} 
                              button={true}
                              buttonText="edit"
                              image={p.image}
                              imageWidth="100px"
                              onClick={() => handleClick(p.id)} 
                              // width="25rem"
                              height="100%"/>
                      </div>
                  )
              })}
        </div>
      </div>
    )
    
    
      
}
export default BlogWriterDetail;