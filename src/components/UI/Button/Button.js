import React from 'react'
import classes from './Button.css'
// import landingClasses from '../../../containers/Landing/Landing.css'

const button = (props) => (
	<button className={classes.button}>
		{props.children}
	</button>
)

export default button