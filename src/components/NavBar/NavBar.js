import React from 'react'

import classes from './NavBar.css'
import Logo from '../Logo/Logo'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import ToggleDrawer from '../SideDrawer/ToggleDrawer/ToggleDrawer'

const toolbar = (props) => (
	<header className={classes.NavBar}>
	<ToggleDrawer clicked={props.showMenu} />
		<div>
			
		</div>
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
)

export default toolbar