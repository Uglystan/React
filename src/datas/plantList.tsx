export interface Plant {
	name : string
	category : string
	id : string
	isBestSale : boolean
	light : number
	water : number
}

export const plantList : Array<Plant> = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		light: 2,
		water: 3
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		isBestSale: false,
		light: 3,
		water: 1
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		isBestSale: false,
		light: 1,
		water: 2
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		isBestSale: false,
		light: 3,
		water: 1
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		isBestSale: false,
		light: 3,
		water: 1
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		isBestSale: false,
		light: 2,
		water: 2
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isBestSale: true,
		light: 2,
		water: 3
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		isBestSale: false,
		light: 2,
		water: 1
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		isBestSale: false,
		light: 2,
		water: 1
	}
]