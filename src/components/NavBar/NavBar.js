import React from 'react'

import classes from './NavBar.css'
import Logo from '../Logo/Logo'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import ToggleDrawer from '../SideDrawer/ToggleDrawer/ToggleDrawer'

const toolbar = (props) => (
	<header className={classes.NavBar}>
		<ToggleDrawer clicked={props.showMenu} />
		<Logo />
		<nav className={classes.DesktopOnly}>
			<NavigationItems location="navBar" />
		</nav>
	</header>
)

export default toolbar