import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "../layout/Header";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import setAuthToken from "../../utils/setAuthToken";
import {setCurrentUser, logoutUser} from "../../redux/actions/authActions";
import store from '../../redux/store';

if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and user info and expiration
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href= "/login";
    }
}

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App ui container">
                    <Header/>
                    <Route exact path="/signin" component={SignIn}/>
                    <Route exact path="/signup" component={SignUp}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
