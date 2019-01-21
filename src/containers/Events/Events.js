import React from 'react'
// import axios from '../../axios-orders'
import classes from './Events.css'
import EventDescription from './EventDescription/EventDescription'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents'

const events = () => (
	<div className={classes.container}>
		<EventDescription />
		<h1>Upcoming Events</h1>
		<UpcomingEvents />
	</div>
);

export default events