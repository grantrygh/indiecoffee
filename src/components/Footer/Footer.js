import React from 'react'
import classes from './Footer.css'
import navStyle from '../Navigation/NavigationItems/NavigationItems.css'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import Address from './Address/Address'
import Hours from './Hours/Hours'
import Legal from './Legal/Legal'
import SocialIcons from './SocialIcons/SocialIcons'

const footer = () => (
	<div className={classes.Footer}>
		<div>
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