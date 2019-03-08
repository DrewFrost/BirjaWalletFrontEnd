import React, {Component} from 'react';
import {Form, Button, Segment, Icon, Input} from "semantic-ui-react";

class SignIn extends Component {
    render() {
        return (
            <div className="ui two column centered grid">
                <div className="column">
                    <Segment>
                        <Form>
                            <Form.Field>
                                <label>First Name</label>
                                    <Input icon="user" iconPosition="left" placeholder='First Name'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                    <Input icon="key" iconPosition="left" type="password" placeholder='Last Name'/>
                            </Form.Field>
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

export default SignIn;