import React from 'react'
import classes from './MenuSelector.css'

const menuSelector = (props) => (
	<div className={classes.menuSelector}>
		<div onClick={() => props.clicked("waffles")}>Waffles</div>
		<div onClick={() => props.clicked("sandwiches")}>Sandwiches</div>
		<div onClick={() => props.clicked("salads")}>Salads</div>
	</div>
)

export default menuSelector