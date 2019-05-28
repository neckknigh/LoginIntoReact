import React, { Component } from 'react';
import LoginComponent from "./login/Login";

export default class AuthComponent extends Component {
    render(){
        return (
            <div>
                <LoginComponent />
            </div>
        )
    }
}
