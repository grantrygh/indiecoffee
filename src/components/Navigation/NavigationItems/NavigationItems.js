import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {
	let styling = null;
	// Row form for nav bar
	if (props.location == "navBar")
		styling = classes.NavigationItems
	// Column form for footer
	else if (props.location === "footer")
		styling = classes.NavigationItemsFooter

	return (
		<div className={styling}>
			<NavigationItem link="/">Home</NavigationItem>
			<NavigationItem link="/about">About</NavigationItem>
			<NavigationItem link="/menu">Menu</NavigationItem>
			<NavigationItem link="/events">Events</NavigationItem>
			<NavigationItem link="/contact">Contact</NavigationItem>
			<NavigationItem link="/catering">Catering</NavigationItem>
			<NavigationItem link="/jobs">Jobs</NavigationItem>
		</div>
	)
}

export default navigationItems
