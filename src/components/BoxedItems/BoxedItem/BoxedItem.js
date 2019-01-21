import React from 'react'
import classes from './BoxedItem.css'

const boxedItem = (props) => (
	<div className={classes.boxedItem} style={{ 'background-image': 'url(' + props.img + ')' }}>
		<section className={classes.boxedBackground} />
		<div className={classes.flexed}>
			<div className={classes.boxedTitle}>
				<h3>{props.title}</h3>
			</div>
			<div className={classes.boxedDesc}>
				<div>{props.price}</div>
				{props.desc}
			</div>
		</div>
	</div>
)

export default boxedItem