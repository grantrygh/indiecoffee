import React from 'react'
import classes from './MenuItem.css'

const menuItem = (props) => (
	<React.Fragment>
		<article className={classes.menuItem}>
			<div className={classes.itemContent}>
				<h3 className={classes.name}>{props.name}</h3>
				<span className={classes.price}>{props.price}</span>
				<p className={classes.desc}>{props.desc}</p>
			</div>
		</article>
	</React.Fragment>
)

export default menuItem