import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "../layout/Header";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";


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
