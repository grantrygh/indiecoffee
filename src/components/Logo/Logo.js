import React from 'react'
import classes from './Logo.css'
import indieLogo from '../../assets/images/indie_logo.jpg'

const logo = () => (
	<div className={classes.Logo}>
		<img src={indieLogo} alt="Indie Coffee" />
	</div>
)

export default logo