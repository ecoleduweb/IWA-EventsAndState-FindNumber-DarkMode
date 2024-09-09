import { getInputValueWithVanillaJs } from '../composables/utils';
import '../style/TheCanvas.scss'

const TheForm = () => {

  const creditCardNumber = getInputValueWithVanillaJs()
  // 1. Trouve une façon de prévenir l'envoie du formulaire
  // 2. Lorsque c'est fait, affiche le numéro de carte de crédit dans une boîte de message alert.
  // 3. Une fois que c'est fait, retravaille ta string avec `${creditCardNuber}` au lieu de prendre un +

  return (
    <form action="/">
      <h1>Ne soumet pas ce formulaire</h1>
      <label>
        Ton numéro de carte de crédit
        <input type="text" name="text" id="number" />
      </label>
      <button>Soumettre</button>
    </form>
  )
}

export default TheForm
