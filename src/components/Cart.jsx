// Imports Librairie
/* n Hook est une fonction qui permet de « se brancher » sur des fonctionnalités React. 
Par exemple, useState est un Hook qui permet d’ajouter l’état local React à des fonctions composants. */
import { useState, useEffect } from 'react'

// Imports Code
import '../styles/Cart.css'

/* On peut créer un state  cart  . Avec  useState  , nous devons  déclarer en même temps une fonction pour mettre à jour ce state ( updateCart  ), et lui attribuer une valeur initiale, qui sera ici de 0 : */

/* Je vais maintenant pouvoir ajouter un bouton dans mon panier qui permet d'ajouter un monstera avec la fonction que nous venons de déclarer. Ce qui me donne dans Cart.js :  */

// Récupérer depuis App.js "cart"et "updateCart"
function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        // Total panier récupéré par acc (accumulateur) de "reduce"
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )
    /* useEffect   nous permet d'effectuer notre effet une fois le rendu du composant terminé. Et comme  useEffect  est directement dans notre composant, nous avons directement accès à notre state, à nos variables, nos props, magique n'est-ce pas ?
    Pour décider précisément quand on veut déclencher un effet, on peut utiliser le tableau de dépendances. Il correspond au deuxième paramètre passé à  useEffect. Petit rappel : le premier paramètre passé à useEffect est une fonction. (Exécuter)
    Le deuxième paramètre de  useEffect   accepte un tableau noté entre crochets : il s'agit du tableau de dépendances.
    Dans notre cas, si je veux que l'alerte ne s'affiche que lorsque le total de mon panier change, il me suffit de faire :
     */

    // useEffect(() => {
    //     if(total != 0)
    //     alert(`J'aurai ${total}€ à payer 💸`)
    // }, [])

    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => ( // Map : itérer sur panier pour afficher éléments
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total :{total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart
