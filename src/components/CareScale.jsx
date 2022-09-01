import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

/* La syntaxe déstructurée nous permet de déclarer directement nos deux variables "scaleValue" et "careType", et de les assigner aux valeurs passées en props. On peut même directement l'écrire dans les paramètres : */
function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale

/* Comme vous l'avez vu ici, nous avons utilisé deux syntaxes différentes pour nos props. 

Pour "scaleType", nous lui avons assigné une  string, entre guillemets. 
Pour "scaleValue", nous lui avons attribué la valeur d'un objet, que nous avons passée entre accolades.

En pratique, une prop peut avoir n’importe quelle valeur possible en JavaScript, mais syntaxiquement, en JSX, on n’a en gros que deux possibilités :

1 - Un littéral  String , matérialisé par des 'guillemets'

2 - Un object, matérialisé par les {accolades} pour tout le reste (booléen, number, expression Javascript, etc.)

*/