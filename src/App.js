import { Navbar } from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog/Blog";
import BlogDetail from "./pages/Blog/BlogDetail";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import './App.css'
import WriterBlogDetail from "./pages/Blog/WriterBlogDetail";
import CreatePost from "./pages/Blog/CreatePost";
import EditPost from "./pages/Blog/EditPost";

const App = () => { 

    return (
        <div className="container font-link">
            <Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:postId" element={<BlogDetail />} />
                    <Route path="/myposts" element={<WriterBlogDetail />} />
                    <Route path="/createpost" element={<CreatePost />} />
                    <Route path="/editpost/:postId" element={<EditPost />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Navbar>
        </div>
    )
}

export default App;