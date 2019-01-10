import React, { Component } from 'react'
// import axios from '../../axios-orders'
import layoutClasses from '../Layout/Layout.css'

class Contact extends Component {

	state = {
	}

	render() {
		
		return (
			<div className={layoutClasses.container}>
				<p>Phone Number</p>
				<p>Email</p>
				<p>Address</p>

				<p>Contact Form</p>
			</div>
		);
	}
}

export default Contact