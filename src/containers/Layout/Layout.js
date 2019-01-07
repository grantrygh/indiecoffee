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
			<React.Fragment>
				<NavBar showMenu={this.toggleMenuHandler} />
				<SideDrawer 
					closed={this.sideDrawerClosedHandler} 
					open={this.state.showSideDrawer} />
				<main className={classes.Content}>
					{this.props.children}
				</main>
				<Footer />
			</React.Fragment>
		)
	}
}

export default Layout