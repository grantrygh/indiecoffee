import React from 'react'
import classes from './DateBox.css'

const dateBox = (props) => (
	<div className={classes.dateBox}>
		<div className={classes.date}>Jan</div>
		<div className={classes.date}>21</div>
	</div>
)

export default dateBox