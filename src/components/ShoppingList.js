import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem"
import Categories from "./Categories"
import { useState } from "react"



function ShoppingList({cart, updateCart}) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)


    function addToCart(name, price) {

        const currentPlantAdded = cart.find((plant) => plant.name === name)
        
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantAdded.amount + 1}
                
            ])
        } else {
            updateCart([...cart, {name, price, amount: 1}])
        }
            
    }

    function deleteToCart(name, price) {
        const currentPlantDelete = cart.find((plant) => plant.name === name)

        if(currentPlantDelete) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant, {name, price, amount: currentPlantDelete.amount - 1 }
            ])
        } else {
            updateCart([...cart, {name, price, amount: 1}])

        }
    }

    return (
        <div  className='lmj-plant-list'>
            <Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, water, light, price, category}) => 
					!activeCategory || activeCategory === category ? (
                    <div key={id}><PlantItem 
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                        price={price}
                    />
                    <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    <button onClick={() => deleteToCart(name, price)}>Supprimer</button>
                    </div>
                    // <li key={plant.id} >
                    //     {plant.name} {plant.isBestSale && <span>🔥</span>} 
                    //     { plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                    // <CareScale careType='water' scaleValue={plant.water} />
					// <CareScale careType='light' scaleValue={plant.light} />
                    // </li>
                ) : null 
                )}
            </ul>
        </div>
            
    )
}

export default ShoppingList