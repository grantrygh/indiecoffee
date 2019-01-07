import React from 'react'
import classes from './Footer.css'
import { SocialIcon } from 'react-social-icons'

const footer = () => (
	<div className={classes.Footer}>
		<span className={classes.Footersocial}>
			<SocialIcon className={classes.spaced} url="https://twitter.com/indiecoffee" fgColor="#fff" />
			<SocialIcon className={classes.spaced} url="https://facebook.com/indiecoffee" fgColor="#fff" />
			<SocialIcon className={classes.spaced} url="https://github.com/grantrygh/indiecoffee" fgColor="#fff" />
		</span>
		<div className={classes.Footercredits}>
		  <span className={classes.Footercredit}>Created and maintained by <a href="https://github.com/grantrygh">Grant Rygh</a>.</span>
		  <span className={classes.Footercredit}>Source code and examples released under the <a href="https://github.com/philipwalton/solved-by-flexbox/blob/master/LICENSE">MIT</a> license.</span>
		  <span className={classes.Footercredit}>Website and documentation licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.</span>
		</div>
	</div>
)

export default footer