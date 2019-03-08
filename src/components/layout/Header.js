import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Header extends Component {
    render() {
        return (
                <div className="ui stackable menu">
                    <Link to="/" className="header item">
                        Our Company
                    </Link>
                    <div className='right menu'>
                        <Link className="item" to="/signin">Sign In</Link>
                        <Link className="item" to="/signup">Sign Up</Link>
                    </div>
                </div>
        );
    }
}

export default Header;