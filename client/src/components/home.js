import React, { Component } from 'react'
import NavBar from "./NavBar"
import {Container } from "react-bootstrap"

export class home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container className="mt-5 pt-5">
                    <h1 className="text-center">Welcome! </h1>
                    <h3 className="text-center text-muted"> Begin your experience with social eggs </h3>
                </Container>
            </div>
        )
    }
}

export default home
