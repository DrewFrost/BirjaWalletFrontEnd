import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {logoutUser} from "../../redux/actions/authActions";

class Header extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };


    render() {
        const {isAuthenticated} = this.props.auth;
        const authLinks = (
                <div className='right menu'>
                    <Link className="item" to="/wallet">Wallet</Link>

                    <a href=" #" className="item" onClick={this.onLogoutClick}>Log Out</a>
                </div>
        );
        const guestLinks = (
                <div className='right menu'>
                    <Link className="item" to="/signin">Sign In</Link>
                    <Link className="item" to="/signup">Sign Up</Link>
                </div>
        );
        return (
            <div className="ui stackable menu">
                <Link to="/" className="header item">
                    Our Company
                </Link>
                {isAuthenticated ? authLinks:guestLinks}
            </div>
        );
    }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, {logoutUser})(Header);