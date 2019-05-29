import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";

export default class LoginComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			username: "",
            password: "",
            isLoggedIn: localStorage.getItem("loggedIn")
		};
	}

	handleSubmit = event => {
        debugger;
		event.preventDefault();
        const {username, password} = this.state;

        // Se guarda el username y el password en cache
        if (username && password) {
            localStorage.setItem('loggedIn', true);
            this.setState({
                isLoggedIn: true
            });
        }        
	}

	handleChange = event => {
        debugger;
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	render() {

        if (this.state.isLoggedIn) {
            return <Redirect to='/home' />
        }

		return (
			<div className="login-container">
	            <div className="d-flex justify-content-center h-100">
		            <div className="card">
			            <div className="card-header">
				            <h3>Sign In</h3>
				            <div className="d-flex justify-content-end social_icon">
					            <span><i className="fab fa-facebook-square"></i></span>
					            <span><i className="fab fa-google-plus-square"></i></span>
					            <span><i className="fab fa-twitter-square"></i></span>
				            </div>
			            </div>
			            <div className="card-body">
				            <form onSubmit={this.handleSubmit}>
					            <div className="input-group form-group">
						            <div className="input-group-prepend">
							            <span className="input-group-text"><i className="fas fa-user"></i></span>
						            </div>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        id="username" 
                                        placeholder="username"
                                        value={this.state.username}
                                        onChange={this.handleChange} >
                                    </input>
					            </div>
					            <div className="input-group form-group">
                                    <div className="input-group-prepend">
							            <span className="input-group-text"><i className="fas fa-key"></i></span>
						            </div>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        placeholder="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    >
                                    </input>
					            </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox" />Remember Me 
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Login" className="btn float-right login_btn" />
                                </div>
				            </form>
			            </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<a href="/long">Sign Up</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="/">Forgot your password?</a>
                            </div>
                        </div>
		            </div>
	            </div>
            </div>
		)
	}
}