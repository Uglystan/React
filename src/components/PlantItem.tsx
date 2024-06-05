import CareScale from './CareScale'
import '../styles/PlantItem.css'

interface PlantItemProps {
	name : string
	cover : string
	light : number
	water : number
}

function handleClick(plantName : string) {
	alert (`Voulez vous acheter 1 ${plantName} ?`)
}

function PlantItem({name, cover, light, water} : PlantItemProps) {

	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img src={ cover } alt={`${name} cover`} className='lmj-plant-item-cover'></img>
			{ name }
			<div>
				<CareScale scaleValue={light} careType='light' />
				<CareScale scaleValue={water} careType='water' />
			</div>
		</li>
	)
}

export default PlantItem