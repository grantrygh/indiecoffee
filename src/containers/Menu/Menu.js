import React, { Component } from 'react'
// import axios from '../../axios-orders'
import MenuItem from './MenuItem/MenuItem'
import MenuSelector from './MenuSelector/MenuSelector'
import MenuSection from './MenuSection/MenuSection'
import classes from './Menu.css'
import classestwo from './MenuSelector/MenuSelector.css'

class Menu extends Component {

	state = {
		waffles : [
			// House Favorites
			{type: "subsection", category: "House Favorites"},
			{name:"Classic Malted Belgian", price: "4.66", desc:"Choose buttermilk, multigrain or chocolate. Served with powdered sugar, syrup and butter"},
			{name:"Red & White", price: "4.66", desc:"A classic topped with house-made strawberry sauce and homemade whipped cream."},
			{name:"Grasshopper", price: "4.66", desc:"A classic with walnuts baked in. Tell your kids they're bugs."},
			{name:"Cranberry Walnut", price: "4.66", desc:"Yogi's favorite:  a classic with cranberries and walnuts baked in."},
			{name:"Chocolate Chocolate Chip", price: "4.66", desc:"Enough said."},
			{name:"The Works", price: "4.66", desc:"A classic with baked in walnuts and topped with chocolate chips, vanilla whipped cream and house-made strawberry sauce."},
			// Build Your Own
			{type: "subsection", category: "Build Your Own"},
			{name:"Start With a Base Waffle", price: "4.66", desc:"Choose buttermilk, multigrain or chocolate"},
			{name:"Bake-In Ingredients", price: "4.66", desc:"Walnuts, Dried cranberries"},
			{name:"Toppings", price: "4.66", desc:"House-made strawberry sauce, House-made whipped cream, Chocolate chips, Ghirardelli chocolate sauce, Ghirardelli caramel sauce, Organic plain yogurt, Peanut butter, Strawberry jam"},
		],
		sandwiches : [
			// House Favorites
			{type: "subsection", category: "House Favorites"},
			{name:"Honey Fig & Goat Cheese", price: "4.66", desc:"Critics' favorite! Our secret goat cheese spread, a thick layer of fig and a touch of spinach, all toasty and melty on house-baked raisin bread."},
			{name:"Ham & Havarti", price: "4.66", desc:"A Scandinavian treat. Market ham, creamy Danish havarti, mayo and Dijon mustard on toasted thick pumpernickel."},
			// On a Bagel
			{type: "subsection", category: "On a Bagel"},
			{name:"Fancy Grilled Cheese", price: "4.66", desc:"Not one, not two, but three cheeses melt into deliciousness. Toasted New York sun-dried tomato bagel, cream cheese, goat cheese, tomato, olive oil and basil topped with melted provolone."},
			{name:"Marathon", price: "4.66", desc:"Toasted New York whole wheat bagel, Danish havarti cheese, roasted red pepper and spinach. So healthy you'll feel like running a marathon!"},
			{name:"Egg Double Cheese", price: "4.66", desc:"Omelet, cream cheese, and cheddar on the New York bagel of your choice."},
			{name:"Greenbush", price: "4.66", desc:"Toasted New York everything bagel, cream cheese, oregano, tomato, olive oil and market ham. A salute to our neighborhood!"},
			{name:"Bacon, Egg and Cheddar", price: "4.66", desc:"Ah, bacon!  On the New York bagel of your choice."},
			// On Focaccia
			{type: "subsection", category: "On Focaccia"},
			{name:"Pesto Omelet", price: "4.66", desc:"One of Madison's favorite veggie breakfast sandwiches (Madison Magazine). Omelet, pine nut pesto, creamy goat cheese and roasted red pepper on a warm, crusty focaccia."},
			{name:"Green Eggs & Ham", price: "4.66", desc:"Omelet, pine nut pesto, market ham, and provolone on a warm herbed focaccia. You will like it here or there, you will like it anywhere!"},
			{name:"Salami", price: "4.66", desc:"A huge seller and Indie fave for 12 years! This meaty panini is filled with hard salami, provolone, red onion, spinach, mayo and a hint of rosemary on a warm, crusty focaccia."},
			{name:"Cheesy Focaccia Melt", price: "4.66", desc:"A brilliant trio of yellow (roasted pepper), red (tomato), and green (spinach), atop basil-herbed cream cheese and provolone on a warm, herbed focaccia. A cheesy melty veggie treat."},
			{name:"Chicken", price: "4.66", desc:"All natural Wisconsin chicken breast, goat cheese, spinach, basil and mayo on an herbed focaccia."},
			// In a Wrap
			{type: "subsection", category: "In a Wrap"},
			{name:"Mediterranean Veggie", price: "4.66", desc:"So very light! Spinach, fire-roasted red and green pepper, caramelized onion, tomato, black olives, feta cheese, olive oil, oregano and crushed black pepper. (vegan available)"},
			{name:"Chicken Cheddar Ranch", price: "4.66", desc:"Natural Wisconsin chicken breast, cheddar, spinach, tomato, creamy ranch and cracked black pepper."},
			// Kids 
			{type: "subsection", category: "Kids Menu"},
			{name:"Classic Grilled Cheese", price: "4.66", desc:"Loads of Wisconsin cheddar on thick sourdough. Make it more grown-up: add tomato and basil."},
			{name:"PBJ", price: "4.66", desc:"Strawberry jam and peanut butter on thick sourdough."},
		],
		salads : [
			{name:"Big Salad", price: "4.66", desc:"Spinach tossed with tomato, walnuts, fire-roasted red and green peppers, caramelized onions, goat cheese, basil and crushed black pepper. Optional: add natural Wisconsin chicken breast."},
			{name:"Greek Salad", price: "4.66", desc:"Spinach tossed with tomato, black olives, sliced red onion, garbanzo beans, feta cheese, oregano and crushed black pepper. Optional: add natural Wisconsin chicken breast."},
		],
		selectedType: null,
		menuItems: null
	}

	foodChangeHandler = (type) => {
		// Choose what food list to display, based on what is selected
		let foodType = null;
		if (type == "waffles")
			foodType = this.state.waffles
		else if (type == "sandwiches")
			foodType = this.state.sandwiches
		else if (type == "salads")
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
				<section className={classes.selector}>
					<MenuSelector clicked={(type) => this.foodChangeHandler(type)} selectedType={this.state.selectedType} />
				</section>
				
				<section className={classes.collection}>
					{ this.state.menuItems }
				</section>

			</div>
			</React.Fragment>
		);
	}
}

export default Menu