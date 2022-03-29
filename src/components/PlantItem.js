import CareScale from "./CareScale";
import '../styles/PlantItem.css'


// function handleClick(plantName) {
//     alert(`Vous voulez acheter 1 ${plantName}? Très bon choix !`)
// }


function PlantItem({id, name, cover, water, light, price}) {

    const monsteraPrice = price

    return (
        <li key={id} className='lmj-plant-item'>
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`}/>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            </div>
            <div>
             {name} : {monsteraPrice}€
            </div>
        </li>
    )
}

export default PlantItem