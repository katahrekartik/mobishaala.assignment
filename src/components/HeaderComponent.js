import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Container,Button} from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';


class Header extends Component {
     

    render() {
        return(
            <div>
            <div className="contianer-fluid header-top">
                <div className="container">
                <div className="row">
                <div className="col-12 col-md-6">
                    <p>
                        <span><span className="fa fa-phone fa-lg"></span> 9810651005 </span>
                        <span><span className="fa fa-envelope fa-lg"></span> atulklohiya@gmail.com</span>
                    </p>
                </div>
                <div className="col-12 col-md-6 login-area">
                    <p>
                        <span><span className="fa fa-sign-in fa-lg"></span> Login | </span>
                        <span><span className="fa fa-email fa-lg"></span> Register</span>
                    </p>
                </div>
                </div>
                </div>
            </div>
            <Navbar bg="light" expand="lg">
                <Container>
                 <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://prabhaics.com/assets/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    PICS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar">
                    <Nav>
                    <Nav.Link href="/" className="nav-link"><span className="fa fa-home fa-lg"></span> Home</Nav.Link>
                    <NavLink  className="nav-link" to="/books" className="nav-link"><span className="fa fa-book fa-lg"></span>Books</NavLink>
                    <NavLink className="nav-link" to="/courses"><span className="fa fa-book fa-lg"></span>Courses</NavLink>
                    <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span>Contact</NavLink>
                    <Link to="/join" ><Button className="join button">Join Classes</Button></Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        );
    }
}

export default Header;