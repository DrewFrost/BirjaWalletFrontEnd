import React, {Component} from 'react';
import {Form, Button, Segment, Icon} from "semantic-ui-react";

class SignIn extends Component {
    render() {
        return (
            <div className="ui two column centered grid">
                <div className="column">
                    <Segment>
                        <Form>
                            <Form.Field>
                                <label>First Name</label>
                                <div className="ui left icon input">
                                    <i className="user icon"/>
                                    <input placeholder='First Name'/>
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <div className="ui left icon input">
                                    <i className="key icon"/>
                                    <input type="password" placeholder='Last Name'/>
                                </div>
                            </Form.Field>
                            <Button type="submit" icon labelPosition='right'>
                                Sign In
                                <Icon name='sign in' />
                            </Button>
                        </Form>
                    </Segment>
                </div>
            </div>
        );
    }
}

export default SignIn;