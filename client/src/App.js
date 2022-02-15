import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import signup from "./components/signup"
import login from "./components/login"
import Dashboard from "./components/Dashboard"
import ProtectedRoute from './routes/ProtectedRoute'
import LoggedInHome from './components/LoggedInHome'
import Profile from './components/Profile'

//Redux
import { Provider } from 'react-redux';
import store from './reducers/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import jwtDecode from "jwt-decode";
import axios from "axios";

const token = localStorage.IdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    //store.dispatch(logoutUser());
    //window.location.href = '/login';
  } else {
    //store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    //store.dispatch(getUserData());
  }
}

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/*
            <Route exact path="/" component={home} />
            */}
            <ProtectedRoute exact path="/" component={LoggedInHome} />
            
            <ProtectedRoute path="/profile" component={Profile} />
            <Route path="/signup" component={signup} />
            <Route path="/login" component={login} />
            <Route path="/Dashboard" component={Dashboard} /> 
          </Switch>
        </Router>
      </Provider> 
    )
  }
}

export default App;