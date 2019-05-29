import React, { Component } from 'react';
import './App.css';
import AuthComponent from "./components/auth/Auth";
import HomeComponent from "./components/home/Home";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

export default class App extends Component {

	constructor(){
		super();
		this.setState({
			loggedIn: false
		});
	}

	render(){
		return (
			<BrowserRouter>
				<Route path="/home" component={HomeComponent} exact />
				<Route path="/login" render={() => (
					!this.state.loggedIn ? ( <AuthComponent /> ) : ( <Redirect to="/home" /> )
				)} />
	
			</BrowserRouter>
		);
	}
}

