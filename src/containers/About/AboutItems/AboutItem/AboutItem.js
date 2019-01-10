import React from 'react'
import classes from './AboutItem.css'

const aboutItem = (props) => (
	<div className={classes.aboutItem}>
		<img class={classes.imageTop} src={props.img} alt="Card image" />
		<span>{props.title}</span>
		<p>{props.desc}</p>
	</div>
)

export default aboutItem