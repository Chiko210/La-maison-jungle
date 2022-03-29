import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulente from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'


export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
        isBestSale: true,
		water: 2,
		light: 3,
		cover: monstera,
		price: Math.floor(Math.random()* 20)
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		water: 1,
		light: 3,
		cover: lyrata,
		price: Math.floor(Math.random()* 20)

	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
        isBestSale: true,
        isSpecialOffer: true,
		water: 2,
		light: 1,
		cover: pothos,
		price: Math.floor(Math.random()* 20)
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		water: 1,
		light: 3,
		cover: calathea,
		price: Math.floor(Math.random()* 20)
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		water: 2,
		light: 3,
		cover: olivier,
		price: Math.floor(Math.random()* 20)
	},
	{
		name: 'cactus',
		category: 'extérieur',
		id: '6uo',
        isBestSale: true ,
		water: 2,
		light: 2,
		cover: cactus,
		price: Math.floor(Math.random()* 20)
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
        isSpecialOffer: true,
		water: 3,
		light: 2,
		cover: basil,
		price: Math.floor(Math.random()* 20)
	},
	{
		name: 'menthe',
		category: 'plante grasse',
		id: '8fp',
        isBestSale: true,
		water: 1,
		light: 2,
		cover: mint,
		price: Math.floor(Math.random()* 20)
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
        isSpecialOffer: true,
		water: 1,
		light: 2,
		cover: succulente,
		price: Math.floor(Math.random()* 20)

	}
]

