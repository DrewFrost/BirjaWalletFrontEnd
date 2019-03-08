import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Form, Button, Segment, Icon, Input, Message} from "semantic-ui-react";
import {connect} from "react-redux";
import {loginUser} from "../../redux/actions/authActions";

class SignIn extends Component {
    state = {
        email: "",
        password: "",
        token: "",
        errors: {}
    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
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

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password,
            token: this.state.token,
        };
        this.props.loginUser(userData);
    };

    render() {
        const {errors} = this.state;
        return (
            <div className="ui two column centered grid">
                <div className="column">
                    <Segment>
                        <Form error noValidate onSubmit={this.onSubmit}>
                            <Form.Field>
                                <label>Email</label>
                                <Input icon="envelope" iconPosition="left" autoComplete="off" onChange={this.onChange}
                                       name="email"
                                       value={this.state.email} placeholder='Your Email'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <Input icon="key" iconPosition="left" onChange={this.onChange} name="password"
                                       placeholder='Your Password'
                                       value={this.state.password} type="password"/>
                                {errors.login ? <Message
                                    error
                                    content={errors.login}
                                /> : ''}
                            </Form.Field>
                            <Form.Field onChange={this.onChange}>
                                <label>Authenticate</label>
                                <Input icon="unlock alternate" autoComplete="off" iconPosition="left" onChange={this.onChange} name="token"
                                       placeholder="Enter token"
                                       value={this.state.token} />
                                {errors.token ? <Message
                                error
                                content={errors.token}/>:''}
                            </Form.Field>
                            <div className="ui error message">
                            </div>
                            <Button type="submit" icon labelPosition="right">
                                Sign In
                                <Icon name="sign in" />
                            </Button>
                        </Form>
                    </Segment>
                </div>
            </div>
        );
    }
}

SignIn.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(SignIn);