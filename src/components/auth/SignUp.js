import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Form, Segment, Button, Message, Input} from "semantic-ui-react";
import {connect} from "react-redux";
import {registerUser} from "../../redux/actions/authActions";

class SignUp extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: '',
        errors: {}
    };
    componentDidMount() {
        if(this.props.auth.isAuthenticated){
            this.props.history.push("/");
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.errors !== prevState.errors) {
            return {errors: nextProps.errors};
        } else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.errors !== prevState.errors) {
            this.setState({errors: prevProps.errors});
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    onSubmit = async e => {
        e.preventDefault();
        const newUser = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2

        };
        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        const {errors} = this.state;
        return (
            <div className="ui two column centered grid">
                <div className="column">
                    <Segment>
                        <Form error noValidate onSubmit={this.onSubmit}>
                            <Form.Field required>
                                <label>First name</label>
                                <Input icon="user" iconPosition="left" autoComplete="off" onChange={this.onChange}
                                       name="firstname"
                                       placeholder='Your First name' value={this.state.firstname}/>
                                {errors.firstname ? <Message
                                    error
                                    content={errors.firstname}
                                /> : ''}
                            </Form.Field>
                            <Form.Field required>
                                <label>Last Name</label>
                                <Input iconPosition="left" icon="id card" autoComplete="off"
                                       onChange={this.onChange} name="lastname"
                                       placeholder='Your Last Name' value={this.state.lastname}/>
                                {errors.lastname ? <Message
                                    error
                                    content={errors.lastname}
                                /> : ''}
                            </Form.Field>
                            <Form.Field required>
                                <label>Email</label>
                                <Input icon="envelope" iconPosition="left" autoComplete="off" onChange={this.onChange}
                                       name="email"
                                       value={this.state.email} placeholder='Your Email'/>
                                {errors.email ? <Message
                                    error
                                    content={errors.email}
                                /> : ''}
                            </Form.Field>
                            <Form.Field required>
                                <label>Password</label>
                                <Input icon="key" iconPosition="left" onChange={this.onChange} name="password"
                                       placeholder='Your Password'
                                       value={this.state.password} type="password"/>
                                {errors.password ? <Message
                                    error
                                    content={errors.password}
                                /> : ''}
                            </Form.Field>
                            <Form.Field onChange={this.onChange} required>
                                <label>Confirm Password</label>
                                <Input  icon="key" iconPosition="left" onChange={this.onChange} name="password2"
                                       placeholder="Confirm Your Password"
                                       value={this.state.password2} type="password"/>
                                {errors.password2 ? <Message
                                    error
                                    content={errors.password2}
                                /> : ''}
                            </Form.Field>
                            <div className="ui error message">
                            </div>
                            <Button type='submit'>Sign Up</Button>
                        </Form>
                    </Segment>
                </div>
            </div>
        );
    }
}

SignUp.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        errors: state.errors
    }
};
export default connect(mapStateToProps, {registerUser})(SignUp);