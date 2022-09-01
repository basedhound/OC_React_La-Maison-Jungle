/* Créer un composant PlantItem qui sera un composant enfant de ShoppingList. */

import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
    //     console.log('✨ Ceci est une plante :', plantName)
}

function PlantItem({ cover, name, water, light, price }) {
    return (
        // Ajoute de l'évènement "onClick" et la fonction "handleClick"
        <li className='lmj-plant-item' onClick={() => handleClick(name)}>
            <span className='lmj-plant-item-price'>{price}€</span>
            {/* Les props 'name' et 'cover' sont utilisées directement dans PlantItem. */}
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                {/* Les props 'light' et 'water', que nous avons déjà créées,
                 sont passées au composant : 'CareScale' dans  PlantItem */}
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem


