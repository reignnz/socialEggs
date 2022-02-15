import React, { useRef } from 'react'
import NavBar from './NavBar'

import { Card, Button, Form } from 'react-bootstrap'
import { Border } from 'react-bootstrap-icons';

import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import { createPost } from '../actions/dataAction.js'

function LoggedInHome() {

    const history = useHistory();
    const dispatch = useDispatch();

    const textRef = useRef("");

    function handleCreate(e) {
        e.preventDefault();
        
        // get userName
        const newPost = {
            body: textRef.current.value,
            user: "James"
        }

        dispatch(createPost(newPost));
        textRef.current.value = "";
    }

    return (
        <>
        <NavBar /> 
        <div className="text-center py-3">

            <Card className="mx-auto" style={{ width: '30rem'}}>
                <Card.Header>
                </Card.Header>

                <Card.Body>
                    <Form onSubmit={handleCreate}>
                        <Form.Control 
                            type="text" 
                            style={{ border:'0'}}
                            placeholder="How's your day?"
                            ref={textRef}
                        >
                        </Form.Control>

                        <Button type="submit" 
                                className="my-2 w-15"
                                style={{float:'right'}}
                                variant="secondary"
                        > 
                            Create a post 
                        </Button>
                    </Form>

                </Card.Body>
            </Card>

        </div>
        </>
    )
}

export default LoggedInHome;