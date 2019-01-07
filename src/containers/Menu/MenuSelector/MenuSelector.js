import React from 'react'

const menuSelector = (props) => (
	<div>
		<ul>
			<li onClick={() => props.clicked("waffles")}>Waffles</li>
			<li onClick={() => props.clicked("sandwiches")}>Sandwiches</li>
			<li onClick={() => props.clicked("salads")}>Salads</li>
		</ul>
	</div>
)

export default menuSelector