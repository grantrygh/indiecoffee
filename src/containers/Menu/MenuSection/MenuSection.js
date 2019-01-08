import React from 'react'
import classes from './MenuSection.css'

const menuSection = (props) => (
	<div className={classes.menuSection}>
		<h1 className={classes.title}>
			{ props.category }
		</h1>
	</div>
)

export default menuSection