import '../styles/Categories.css'

/*  Reprendre notre liste de catégories et de l'améliorer avec le state :

1 : Créer  un composant à part,  Categories.js  , pour gérer les catégories

2 : Afficher la liste dans  un menu déroulant <select /> avec des <options /> :
- chaque catégorie devient une option. Il est possible de choisir une catégorie ;
- à la sélection d'une catégorie, seules les plantes correspondant à la catégorie sélectionnée s'affichent.

3 : Créer également un bouton ayant pour label "Réinitialiser". 
Ce bouton permet de réinitialiser votre state, et d'afficher toutes les catégories de plantes.

 */

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='lmj-categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories