import React, { Component } from "react";
import { Button, FormGroup, FormControl,FormLabel } from "react-bootstrap";
import "./Login.css";

export default class LoginComponent extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render(){
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email address</FormLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            type="password"
                        />
                    </FormGroup>
                        <Button
                            block
                            bsSize="large"
                            type="submit"
                        >
                        Login
                        </Button>
                </form>
            </div>
        )
    }
}