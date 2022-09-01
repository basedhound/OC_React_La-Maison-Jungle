import '../styles/Banner.css'

/* Vous créez un composant Banner pour votre application, que vous pourrez réutiliser si vous créez de nouvelles pages. Votre composant doit venir wrapper votre contenu, mais il ne connaît pas le contenu à l'avance. Dans le parent, vous l'écrivez de la manière suivante :

[Fichier App.js]
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>

Comment pouvez-vous écrire votre composant Layout ?   
*/

function Banner({children}) {
    return <div className='lmj-banner'>{children}</div>
}



export default Banner