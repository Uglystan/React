import React from 'react'
import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() : JSX.Element {
	return (
		<div className='lmj-banner'>
			<img src={ logo } alt='La maison de la jungle' className="lmj-logo"></img>
			<h1 className="lmj-title">La maison jungle</h1>
		</div>
	)
}

export default Banner