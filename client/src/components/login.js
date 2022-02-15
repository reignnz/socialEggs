import React, { Component } from 'react'
import { Card, Form, Container, Button, Row } from 'react-bootstrap';
import NavBar from "./NavBar"

import { connect } from 'react-redux';
import { loginUser } from '../actions/userAction.js';

export class login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
         
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(user, this.props.history);
        
    }

    render() {
        return (
            <div>
                <NavBar />
                <Container className="pt-5 mt-5 d-flex justify-content-center">
                    <Card className="p-4" style={{width: "25rem"}}>
                        <Card.Title className="text-center"> Log in </Card.Title>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mt-4">
                                <Form.Label> Email </Form.Label>
                                <Form.Control type="text" name="email" onChange={this.handleChange} placeholder="Enter your email" required />
                            </Form.Group>

                            <Form.Group className="mt-4">
                                <Form.Label> Password </Form.Label>
                                <Form.Control type="password" name="password"  onChange={this.handleChange} placeholder="Enter your password" required />
                            </Form.Group>

                            <Button className="w-100 text-center mt-4" variant="primary" type="submit">
                                Log in 
                            </Button>
                        </Form>
                    </Card>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapActionsToProps = {
    loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(login)

    
