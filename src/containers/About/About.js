import React from 'react'
// import axios from '../../axios-orders'
// import classes from '../Layout/Layout.css'
import classes from './About.css'
import AboutItems from './AboutItems/AboutItems'

const about = () => (
	<div className={classes.about}>
		<div className={classes.introduction}>
			<h2>Hang out in a coffee house that honors historic Madison and supports indie music and film.</h2>
			<h3>
			We're a little astonished, but national eyes have looked our way the past couple of  years!  
			</h3>
			<p>
			We were featured in Travel + Leisure, Time Magazine, GQ and Wake Up with Al Roker!  But do you know what's really cool?  The local love.  The Daily Cardinal readers picked Indie as the best local coffeeshop two years running.  Hopefully, we're doing things right.  Why don't you stop by and see for yourself?  We'd love to see you!
			</p>
		</div>
		<AboutItems />
	</div>
);

export default about