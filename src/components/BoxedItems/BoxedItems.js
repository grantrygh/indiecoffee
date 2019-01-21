import React from 'react'
import BoxedItem from './BoxedItem/BoxedItem'

import classes from './BoxedItems.css'

const boxedItems = (props) => {
	
	return (
		<div className={classes.BoxedItems}>
		{
			props.list.map( item => {
				return <BoxedItem title={item.title} img={item.image} price={item.price} desc={item.desc} />
			})
		}
		</div>
	)

}

export default boxedItems