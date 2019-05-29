import React, { Component } from 'react';
import './App.css';
import AuthComponent from "./components/auth/Auth";
import HomeComponent from "./components/home/Home";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends Component {

	render(){
		return (
			<BrowserRouter>
				<Route path="/home" component={HomeComponent} exact />
        <Route path="/" component={AuthComponent} exact />
	
			</BrowserRouter>
		);
	}
}

