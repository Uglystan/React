import React from 'react'
import '../styles/Cart.css'

function Cart() : JSX.Element {

	const monsteraPrice : number = 8
	const lierrePrice : number = 10
	const flowerPrice : number = 15

	return (<div className='ljm-cart'>
			<h2>Panier</h2>
			<ul>
				<li>Monstera { monsteraPrice }$</li>
				<li>Lierre { lierrePrice }$</li>
				<li>Fleurs { flowerPrice }$</li>
			</ul>
			<p>Total : { monsteraPrice + lierrePrice + flowerPrice }$</p>
		</div>)
}

export default Cart