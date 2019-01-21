import React from 'react'
import classes from './UpcomingEvent.css'
import DateBox from '../../../../components/DateBox/DateBox'

const upcomingEvent = (props) => (
	<div className={classes.upcomingEvent}>
		<DateBox />
		<ul className={classes.description}>
			<li><h2>{props.name}</h2></li>
			<li><i class="material-icons">date_range</i> {props.date}</li>
			<li><i class="material-icons">access_time</i> {props.time}</li>
			<li><i class="material-icons">location_on</i> {props.location}</li>
			<li><i class="material-icons">link</i> {props.link}</li>
			<li><i class="material-icons">description</i> {props.desc}</li>
		</ul>
	</div>

)

export default upcomingEvent