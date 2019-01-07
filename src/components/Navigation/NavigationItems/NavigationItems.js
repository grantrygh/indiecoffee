import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
	<div className={classes.NavigationItems}>
		<NavigationItem link="/" active>Home</NavigationItem>
		<NavigationItem link="/about">About</NavigationItem>
		<NavigationItem link="/menu">Menu</NavigationItem>
		<NavigationItem link="/events">Events</NavigationItem>
		<NavigationItem link="/contact">Contact</NavigationItem>
		<NavigationItem link="/catering">Catering</NavigationItem>
		<NavigationItem link="/jobs">Jobs</NavigationItem>
	</div>
)

export default navigationItems
