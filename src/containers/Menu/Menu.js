import React, { Component } from 'react'
// import axios from '../../axios-orders'
import MenuItem from './MenuItem/MenuItem'
import { waffleList, sandwichList, saladList } from './MenuList/MenuList'
import MenuSelector from './MenuSelector/MenuSelector'
import MenuSection from './MenuSection/MenuSection'
import classes from './Menu.css'

class Menu extends Component {

	state = {
		waffles : waffleList,
		sandwiches : sandwichList,
		salads : saladList,
		selectedType: null,
		menuItems: null
	}

	foodChangeHandler = (type) => {
		// Choose what food list to display, based on what is selected
		let foodType = null;
		if (type === "waffles")
			foodType = this.state.waffles
		else if (type === "sandwiches")
			foodType = this.state.sandwiches
		else if (type === "salads")
			foodType = this.state.salads
		// Create the food list with subsections and menu items
		const itemList = [];
		for (let item in foodType){
			if (foodType[item].type === "subsection")
				itemList[item] = <MenuSection category={foodType[item].category} />
			else
				itemList[item] = <MenuItem name={foodType[item].name} price={foodType[item].price} desc={foodType[item].desc} />
		}
		this.setState({ selectedType: type, menuItems: itemList })
	}

	render() {

		// Waffle Menu is default menu list
		if (this.state.selectedType == null){
			this.foodChangeHandler("waffles")
		}
		
		return (
			<React.Fragment>
			<div className={classes.container}>
				<div className={classes.selector}>
					<MenuSelector clicked={(type) => this.foodChangeHandler(type)} selectedType={this.state.selectedType} />
				</div>
				
				<div className={classes.collection}>
					{ this.state.menuItems }
				</div>

			</div>
			</React.Fragment>
		);
	}
}

export default Menu