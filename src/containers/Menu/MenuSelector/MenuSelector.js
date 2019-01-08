import React from 'react'
import classes from './MenuSelector.css'

const menuSelector = (props) => {
	let types = ["waffles", "sandwiches", "salads"];

	return (
		<div className={classes.menuSelector}>
			{
				types.map( type => {
					return <div onClick={() => props.clicked(type)} className={ props.selectedType === type ? classes.active : null}>{type}</div>
				})
			}
		</div>
	)
}

export default menuSelector