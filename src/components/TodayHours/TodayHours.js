import React from 'react'
import classes from './TodayHours.css'

const todayHours = () => {

	let today = new Date().getDay();
	let openTime = "6:30am";
	const closeTime = "8:00pm";
    // If it is weekday
    if (today === 6 || today === 0)
      openTime = "7:30am";

    return (
    	<div className={classes.todayHours}>
	    	<h3>Today's Hours</h3>
	    	<p>{openTime}  -  {closeTime}</p>
	    </div>
    )

}

export default todayHours