import React from 'react'
import classes from './BottomImage.css'

const bottomImage = (props) => (
	<div className={classes.bottomImage}>
		<img src={props.src} alt={props.alt} />
	</div>
)

export default bottomImage