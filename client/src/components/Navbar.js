import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar fixed="top" bg="light" variant="light" className="navContainer shadow p-3 mb-5 rounded" expand="md" collapseOnSelect="true" >
                    <Navbar.Brand className="bg-light">
                        <Link to="/" className="link">
                        <img className="brandImage" src="img/apple-touch-icon-180x180.png" alt="Rob in hat" />&nbsp;
                        </Link>
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="bg-light" >
                        <Nav className="mr-auto bg-light" >
                            <LinkContainer className="navLink bg-light" to='/aboutme'><Nav.Link>About Me</Nav.Link></LinkContainer>
                            <LinkContainer className="navLink bg-light" to='/work'><Nav.Link>Work</Nav.Link></LinkContainer>
                            <LinkContainer className="navLink bg-light" to='/projects' ><Nav.Link>Projects</Nav.Link></LinkContainer>
                            <LinkContainer className="navLink bg-light" to='/interests'><Nav.Link>Interests</Nav.Link></LinkContainer>
                            <LinkContainer className="navLink bg-light" to='/contact' ><Nav.Link>Contact</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
