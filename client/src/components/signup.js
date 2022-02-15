import React, { Component } from 'react'
import {Container, Form, Card, Button, Row} from 'react-bootstrap'
import {Link} from "react-router-dom"
import axios from "axios"

export class signup extends Component {

    constructor() {
        super();
        this.state = {
            email: "", 
            handle: "",
            password: "",
            //confirmPassword: "",
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            email: this.state.email,
            userName: this.state.handle,
            password: this.state.password,
            // confirmPassword: this.state.confirmPassword,
        }
        /*
        axios.post("http://localhost:5000/eggs-fc94f/asia-east2/api/signup", newUser).then((res) => { 
            console.log(res.data);
            const token = res.data.token;
            const FBIdToken = `Bearer ${token}`;
            localStorage.setItem("FBIdToken", FBIdToken);
            axios.defaults.headers.common['Authorization'] = FBIdToken;
            this.props.history.push("/");
        })
        .catch(err => { 
            console.log(err)
        });
        */

        // sends data to backend 
        axios.post("http://localhost:3001/users/signup", newUser)
            .then(res => console.log(res.data))
            .catch(err => {console.log(err)});  

    }

    handleChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Container className="mt-2 pt-5 d-flex justify-content-center">
                <Card className="p-4" style={{width: "40rem"}}>
                    <Card.Title className="text-center"> Sign up </Card.Title>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mt-4">
                            <Form.Label> Email </Form.Label>
                            <Form.Control type="text" name="email" placeholder="Enter Email" onChange={this.handleChange} required />
                        </Form.Group> 

                        <Form.Group className="mt-4">
                            <Form.Label> Handle </Form.Label>
                            <Form.Control type="text" name="handle"placeholder="Enter handle" onChange={this.handleChange} required />
                        </Form.Group> 

                        <Form.Group className="mt-4">
                            <Form.Label> Passowrd </Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter password" onChange={this.handleChange} required />
                        </Form.Group> 

                        <Form.Group className="mt-4">
                            <Form.Label> Confirm passowrd </Form.Label>
                            <Form.Control type="password" name="confirmPassword"placeholder="Enter password again" onChange={this.handleChange} required />
                        </Form.Group> 

                        <Button className="w-100 mt-4" variant="primary" type="submit">
                            Sign up
                        </Button>

                    </Form>

                    <p className="my-3" style={{fontSize: "14px"}}> Already have an account? Click <Link to="/login"> here</Link> to log in</p>
                </Card>
                </Container>
                
            </div>
        )
    }
}

export default signup
