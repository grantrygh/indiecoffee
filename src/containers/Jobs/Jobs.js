import React from 'react'
import classes from './Jobs.css'
import JobImage from '../../assets/images/landingGallery/house/indie15.jpg'

const jobs = () => (
	<div className={classes.container}>

		<div className={classes.text}>
			<h2>Join Our Team!</h2>
			<p>
				Indie is always on the look-out for great people.  We offer flexible hours, great pay, and paid vacation and sick days.  Most importantly, we offer a work experience that is both challenging and fun.  Because work life IS life.  We believe you should enjoy your job, because life doesn't stop when you go to work.  
			</p>

			<p>
				If you are hard-working, bright and dependable, please consider working with us.  Drop by with your resume, a cover letter, your schedule and two good work references.  We'd love to meet you!
			</p>
		</div>

		<div className={classes.image}>
			<img src={JobImage} alt="" />
		</div>

	</div>
);

export default jobs