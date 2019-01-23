import React from 'react'
import ContactForm from './ContactForm/ContactForm'
import ContactDescription from './ContactDescription/ContactDescription'
import TodayHours from '../../components/TodayHours/TodayHours'
import Address from '../../components/Footer/Address/Address'
import classes from './Contact.css'
// import landingClasses from '../Landing/Landing.css'
 
const contact = () => (
	<div className={classes.contact}>
		<div className={classes.info}>
			<ContactDescription />
			<TodayHours />
			<h3>Our Location</h3>
			<Address />
		</div>
		<ContactForm />
	</div>
)

export default contact