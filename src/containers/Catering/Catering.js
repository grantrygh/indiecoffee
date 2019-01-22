import React from 'react'
// import axios from '../../axios-orders'
import classes from './Catering.css'
import BoxedItems from '../../components/BoxedItems/BoxedItems'
import coffee from '../../assets/images/landingGallery/coffee/cateringcoffee.jpg'

const catering = () => {

	const description = "Optional round-trip delivery/pickup:  $10.00.  Note:  Free delivery is available with regular orders.  At least 3 advance orders with a minimum of  $25 must be booked and paid for to receive free delivery."

	const cateringList = [
		{title: "75-Cup Pot", image: coffee, price: "Price: $84.95 + tax", desc: description},
		{title: "12-Cup Pot", image: coffee, price: "Price: $14.95 + tax", desc: description},
		{title: "10-Cup Pot", image: coffee, price: "Price: $12.95 + tax", desc: description}
	]

	return (
		<div className={classes.container}>
			<h2>Coffee for the masses</h2>

			<p>
			Rent a pot of coffee for your next meeting or shindig.  We have 3 sizes, so mix and match to get to the number of servings you need. 
			At no charge, we provide cups, cream, sugar, sweeteners, stir sticks and napkins.  Just let us know if you need them.
			</p>

			<p>
			Our earth-friendly approach is to provide reusable pots, so you'll need to return them within 24 hours after you pick them up.  Your credit card payment serves as a deposit.  We will charge your card hefty replacement and handling fees if the equipment is not returned.  But we've never had to charge anyone yet!
			</p>

			<BoxedItems list={cateringList} />

			<h3>Ordering</h3>

			<p>
			Call in your order to:  (608) 259-9621.  
			</p>

			<p>
			For larger orders, feel free to email us:  jj@indiecoffee.net.
			</p>

			<p>
			Pay at pickup, or we can email you an online invoice, which you can pay at your desk!
			</p>

		</div>
	)
};

export default catering