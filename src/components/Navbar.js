import Nav from 'react-bootstrap/Nav';
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <>
        <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className="mt-3 px-3 bg-dark rounded-1 d-flex align-items-center font-link"
        style={{height: 60}}
        >
            <Nav.Item className="col-2">
                <Nav.Link>
                    <Link to="/" style={{textDecoration: "none"}} className="text-light">project-1</Link>
                </Nav.Link>
            </Nav.Item>

            <div className='d-flex col'>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/" style={{textDecoration: "none"}} className="text-light">home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/blog" style={{textDecoration: "none"}} className="text-light">blog</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/myposts" style={{textDecoration: "none"}} className="text-light">my posts</Link>
                    </Nav.Link>
                </Nav.Item>
            </div>
            
            <div className='d-flex'>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/registration" style={{textDecoration: "none"}} className="text-light">register</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/login" style={{textDecoration: "none"}} className="text-light">login</Link>
                    </Nav.Link>
                </Nav.Item>
            </div>
            
        </Nav>
        <div>
            {props.children}
        </div>
     </>
  );
}