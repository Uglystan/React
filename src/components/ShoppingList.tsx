import React from 'react'
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import logoPlant from '../assets/monstera.jpg'

let category : Array<string> = []

for (let plant of plantList) {
	if (category.find((cate) => {return (cate === plant.category)}) === undefined)
		category.push(plant.category)
}

function ShoppingList() : JSX.Element {
	return (<div>
			<ul>
				{ category.map((cate) => (<li key={ cate }>{ cate }</li>)) }
			</ul>
			<ul className='lmj-plant-list'>
				{ plantList.map((plant) => (
					<PlantItem name={ plant.name } cover={ logoPlant } key={ plant.id } light={ plant.light } water={ plant.water } />
				))}
			</ul>
		</div>)
}

export default ShoppingList