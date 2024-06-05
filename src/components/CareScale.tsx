import logoLight from '../assets/sun.svg'
import logoWater from '../assets/water.svg'

interface CareScaleProps {
	scaleValue : number
	careType : string
}

function CareScale({scaleValue, careType} : CareScaleProps) {
	const range : Array<number> = [1, 2, 3]
	const scaleType = careType === "light" ? logoLight : logoWater

	return (
		<div onClick={() => handleClick(scaleValue, careType)}>
			{range.map((rangeElem : number) => {
				return scaleValue >= rangeElem ? <img key={rangeElem.toString()} src={scaleType} alt={scaleType}></img> : null
			})}
		</div>
	)
}

function handleClick(scaleValue : number, careType : string) {
	const quantite : string = scaleValue === 1 ? "peu" : scaleValue === 2 ? "moderement" : "beaucoup"
	const type : string = careType === 'water' ? "d'arrosage" : 'de lumiere'
	alert(`Cette plante requiert ${quantite} ${type}`)
}

export default CareScale