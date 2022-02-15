import React, { Component } from 'react'
import {Card, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PersonFill } from 'react-bootstrap-icons'
import axios from 'axios'


import NavBar from './NavBar'

// using class based components 
function Dashboard() {

        return (
            <div>
                <NavBar />
                <h1 className="pt-5 text-center"> Welcome back, </h1>

                <Card className="my-5 mx-auto" style={{width: "30rem"}}>
                    <Card.Body>
                        <Card.Title>                     
                            <PersonFill size={26} />

                            <Link to={`/user`} className="mx-2 pt-2" style={{textDecoration: 0}}> User's Name </Link> 
                        </Card.Title>
                        
                        <Card.Text> 
                            Body of text from API <br/> 
                            <p className="text-muted my-3" style={{fontSize: 12}}> Import dayjs and match date and time of post </p>
                        </Card.Text>
                    </Card.Body>

                </Card>
                
            </div>
        )
}

/*
 *
 * For future use: {tweets && tweets.map(() => (
 *      <Card>... 
 *      </Card
 *  ))}
 * 
 * 
*/

export default Dashboard;
