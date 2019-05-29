import React, { Component } from 'react';
import LoginComponent from "./login/Login";
import "./Auth.css"

export default class AuthComponent extends Component {
    render(){
        return (
            <div className="auth-container">
                <LoginComponent />
            </div>
        )
    }
}
