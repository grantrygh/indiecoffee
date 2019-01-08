import React from 'react'
import classes from './Footer.css'
import navStyle from '../Navigation/NavigationItems/NavigationItems.css'
import { SocialIcon } from 'react-social-icons'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import Hours from './Hours/Hours'
import Logo from '../Logo/Logo'

const footer = () => (
	<div className={classes.Footer}>
		<div>
			<Hours />
		</div>
		<div>
			<NavigationItems location="footer" />
		</div>
		<div>
			<span className={classes.Footersocial}>
				<SocialIcon className={classes.spaced} url="https://twitter.com/indiecoffee" fgColor="#fff" />
				<SocialIcon className={classes.spaced} url="https://facebook.com/indiecoffee" fgColor="#fff" />
				<SocialIcon className={classes.spaced} url="https://github.com/grantrygh/indiecoffee" fgColor="#fff" />
			</span>
		</div>
	</div>
)

export default footer