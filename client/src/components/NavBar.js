import React, { Component } from 'react'
import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";
import {connect} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'

function NavBar({token}) {
        return (
            <>
            {token != null ? 
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/" className="mx-5"> Inspire </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Link to="/" 
                            className="my-2" 
                            style={{textDecoration: 'none', color: 'gray'}}
                        >
                            Home
                        </Link>
                    </Nav>        
                    <Nav className="mx-3">
                        <NavDropdown align="end" title="Settings">
                            <NavDropdown.Item> 
                                <Link to="/profile" style={{textDecoration: 'none', color: 'gray'}}>Profile</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Container>
                </Navbar> 
                : 
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                    <Nav className="mx-auto">
                        <Nav.Link href="/"> Home </Nav.Link>
                        <Nav.Link href="/signup"> Sign up </Nav.Link>
                        <Nav.Link href="/login"> Log in </Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            }
            </>
        )
    }



const mapStateToProps = state => ({
    token: state.token
});


export default connect(mapStateToProps)(NavBar)
