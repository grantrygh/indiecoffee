import React from 'react'
import classes from './AboutItem.css'

const aboutItem = (props) => (
	<div className={classes.aboutItem} style={{ 'background-image': 'url(' + props.img + ')' }}>
		<section className={classes.aboutBackground} />
		<div className={classes.flexed}>
			<div className={classes.aboutTitle}>
				<h3>{props.title}</h3>
			</div>
			<div className={classes.aboutDesc}>{props.desc}</div>
		</div>
	</div>
)

export default aboutItem