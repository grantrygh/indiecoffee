import React from 'react'
import classes from './Footer.css'
import Address from './Address/Address'
import Hours from './Hours/Hours'
import Legal from './Legal/Legal'
import SocialIcons from './SocialIcons/SocialIcons'

const footer = () => (
	<div className={classes.Footer}>
		<div>
			<h3>Our Location</h3>
			<Address />
		</div>
		<div>
			<Hours />
		</div>
		<div>
			<Legal />
		</div>

		<div>
			<SocialIcons />
		</div>
	</div>
)

export default footer