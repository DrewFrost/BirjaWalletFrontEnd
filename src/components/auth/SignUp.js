import React, {Component} from 'react';
import {Form, Segment, Button} from "semantic-ui-react";


class SignUp extends Component {
    render() {
        return (
            <div className="ui two column centered grid">
                <div className="column">
                    <Segment>
                        <Form small noValidate error onSubmit={this.onSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Field onChange={this.onChange} required>
                                    <label>First name</label>
                                    <div className="ui left icon input">
                                        <i className="icon user"/>
                                        <input id="firstName"  placeholder='Your First name'/>
                                    </div>
                                </Form.Field>
                                <Form.Field onChange={this.onChange} required>
                                    <label>Last Name</label>
                                    <div className="ui left icon input">
                                        <i className="icon id card"/>
                                        <input id="lastName"  placeholder='Your Last Name'/>
                                    </div>
                                </Form.Field>
                            </Form.Group>
                            <Form.Field onChange={this.onChange} required>
                                <label>Email</label>
                                <div className="ui left icon input">
                                    <i className="icon envelope"/>
                                    <input id="email"  placeholder='Your Email'/>
                                </div>
                            </Form.Field>
                            <Form.Field onChange={this.onChange} required>
                                <label>Password</label>
                                <div className="ui left icon input">
                                    <i className="icon key"/>
                                    <input id="password"  placeholder='Your Password' type="password"/>
                                </div>
                            </Form.Field>
                            <Form.Field onChange={this.onChange} required>
                                <label>Repeat Password</label>
                                <div className="ui left icon input">
                                    <i className="icon key"/>
                                    <input id="password"  placeholder='Repeat Your Password' type="password"/>
                                </div>
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

export default SignUp;