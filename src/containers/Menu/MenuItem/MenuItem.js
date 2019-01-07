import React from 'react'
import classes from './MenuItem.css'

const menuItem = (props) => (
	<div>
		<article className={classes.mediamenuitem}>
			<div className={classes.mediacontent}>
				<h3 className={classes.name}>{props.name}</h3>
				<span className={classes.price}>{props.price}</span>
				<p className={classes.desc}>{props.desc}</p>
			</div>
		</article>
	</div>
)

export default menuItem