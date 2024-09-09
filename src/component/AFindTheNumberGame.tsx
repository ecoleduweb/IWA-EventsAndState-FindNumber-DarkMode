import { getInputValueWithVanillaJs } from '../composables/utils'
import '../style/AButton.scss'

const secrectNumer = Math.floor(Math.random() * 10)
const number = getInputValueWithVanillaJs('secretnumber')

console.log(secrectNumer)


// 1. Ajoute un évènement sur le bouton pour vérifier si le chiffre entré est le bon (onclick)
// 2. Si le chiffre est bon, affiche une alerte avec le message "Bravo! Le chiffre était bien {secrectNumer}"
// 3. Si tu as terminé, ajoute un évènement sur la touche "Entrée" pour valider le chiffre
// 4. Si tu as terminé, fait la validation à chaque fois que l'utilisateur appuie sur une touche
// 5. Si tu as terminé, ajoute un évènement qui valide que la valeur que tu as entrée est bien un chiffre positif plus petit ou égal à 10

const AFindTheNumberGame = () => {
  return (
    <div className='premierJeu'>
      <p>Trouve le chiffre secret</p>
      <input type="number" name="number" id="secretnumber" min={0} max={10} />
      <button>Essayer</button>
    </div>
  )
}

export default AFindTheNumberGame
