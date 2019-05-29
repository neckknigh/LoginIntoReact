import React, { Component } from 'react';
import "./Home.css";

export default class HomeComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loggedIn: localStorage.getItem("loggedIn")
		};
	}

	handleLogout = event => {
        debugger;
		localStorage.removeItem("loggedIn");
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-dark bg-dark">
				<a href="/" className="navbar-brand"> Welcome to our App</a>
				<button type="button" className="btn btn-danger" onClick={this.handleLogout}>Log out</button>
				</nav>
				<img  src="https://blackrockdigital.github.io/startbootstrap-freelancer/img/avataaars.svg
				" className="image" alt="userimage"></img>
			</div>
		)
	}
}