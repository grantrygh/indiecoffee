import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import axios from '../../axios-orders'
import classes from './Landing.css'
import LandingDescription from './LandingDescription/LandingDescription'
import ImageBox from './ImageBox/ImageBox'
import TodayHours from '../../components/TodayHours/TodayHours'
import Address from '../../components/Footer/Address/Address'


class Landing extends Component {

	state = {
	}

	render() {
		return (
			<div className={classes.container}>
					<div className={classes.info}>
						<LandingDescription />
						<h3>Hungry?</h3>
						<NavLink to="/menu" className={classes.button1}>Explore Our Menu</NavLink>
						<TodayHours />
						<h3>Our Location</h3>
						<Address />
					</div>
					<ImageBox />
			</div>
		);
	}
}

export default Landing
