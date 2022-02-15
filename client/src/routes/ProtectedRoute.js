import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import Home from '../components/home'

function ProtectedRoute({component: Component, authenticated, token, ...rest}) {
    console.log(token);
    return (
        <Route 
            {...rest}
            render = {(props) => token != null ? <Component {...props} /> : <Home /> }
            />
    )
};

const mapStateToProps = state => ({
    authenticated: state.user.authenticated,
    token: state.token
});


export default connect(mapStateToProps)(ProtectedRoute)
