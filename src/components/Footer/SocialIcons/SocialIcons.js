import React from 'react'
import { SocialIcon } from 'react-social-icons'
import classes from './SocialIcons.css'

const socialIcons = () => (
	<span className={classes.Footersocial}>
		<h3>Connect With Us</h3>
		<SocialIcon className={classes.spaced} url="https://twitter.com/indiecoffee" fgColor="#fff" />
		<SocialIcon className={classes.spaced} url="https://facebook.com/indiecoffee" fgColor="#fff" />
		<SocialIcon className={classes.spaced} url="https://github.com/grantrygh/indiecoffee" fgColor="#fff" />
	</span>
)

export default socialIcons
