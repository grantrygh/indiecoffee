import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {

	let pages = ["home", "about", "menu", "events", "contact", "catering", "jobs"]

	return (
		<div className={classes.NavigationItems}>
			{
				pages.map( page => {
					let linkedPage = "/" + (page !== "home" ? page : '');
					return <NavigationItem link={ linkedPage } {...props}>{ page }</NavigationItem>
				})
			}
		</div>
	)
}

export default navigationItems
