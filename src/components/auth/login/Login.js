import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
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
		console.log(this.state);
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}


	render() {
		return (
			<div className="login">
				<form onSubmit={this.handleSubmit}>
					<FormGroup controlId="email" bsSize="large">
						<FormLabel>Email address</FormLabel>
						<FormControl
							autoFocus
							type="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup controlId="password" bsSize="large">
						<FormLabel>Password</FormLabel>
						<FormControl
							value={this.state.password}
							type="password"
							onChange={this.handleChange}
						/>
					</FormGroup>
					<Button
						block
						type="submit"
						disabled={!this.validateForm()}
					>
						Login
                        </Button>
				</form>
			</div>
		)
	}
}