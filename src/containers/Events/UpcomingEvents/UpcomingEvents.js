import React from 'react'
import UpcomingEvent from './UpcomingEvent/UpcomingEvent'
import classes from './UpcomingEvents.css'

const upcomingEvents = () => {

	let upcomingEvents = [];
	const location = "Indie Coffee, 1224 Regent St, Madison, WI 53715";

	upcomingEvents = [
		{
			name: "Name Of Performance with Link 1", 
			date: "Friday, January 11, 2019", 
			time: "5:45pm-7:45pm",
			location: location, 
			link: "https://www.facebook.com/events/",
			desc: "Description goes here - food and drink information - price - open to public."
		},
		{
			name: "Name Of Performance with Link 2", 
			date: "Friday, January 11, 2019", 
			time: "5:45pm-7:45pm",
			location: location, 
			link: "https://www.facebook.com/events/",
			desc: "Description goes here - food and drink information - price - open to public."
		}
	]

	return (
		<div className={classes.upcomingEvents}>
			{
				upcomingEvents.map( event => {
					return <UpcomingEvent 
						name={event.name} 
						date={event.date} 
						time={event.time} 
						location={event.location}
						link={event.link} 
						desc={event.desc} />
				})
			}
		</div>
	)
}

export default upcomingEvents