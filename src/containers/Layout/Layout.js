import React, { Component } from 'react'
import classes from './Layout.css'
import NavBar from '../../components/NavBar/NavBar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Footer from '../../components/Footer/Footer'

class Layout extends Component {
	state = {
		showSideDrawer: false
	}

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false})
	}

	toggleMenuHandler = (sideDrawerState) => {
		this.setState( (prevState ) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	}

	render () {
		return (
			<div className={classes.Site}>
				
				<NavBar showMenu={this.toggleMenuHandler} />
				<SideDrawer 
					closed={this.sideDrawerClosedHandler} 
					open={this.state.showSideDrawer} />
				<div className={classes.siteContent}>
					<main className={classes.Content}>
						{this.props.children}
					</main>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Layout