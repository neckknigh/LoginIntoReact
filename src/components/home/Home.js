import React, { Component } from 'react';
import { Nav } from "react-bootstrap";

export default class HomeComponent extends Component {
	render() {
		return (
			<div>
				<Nav fill variant="tabs" defaultActiveKey="/home">
					<Nav.Item>
						<Nav.Link href="/home">Home</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="link-1">About Us</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="link-2">Log out</Nav.Link>
					</Nav.Item>
				</Nav>
			</div>
		)
	}
}