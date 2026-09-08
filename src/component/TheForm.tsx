import { getInputValueWithVanillaJs } from '../composables/utils';
import '../style/TheCanvas.scss'

const TheForm = () => {

  const creditCardNumber = getInputValueWithVanillaJs('creditcartnumber')

  
  // 1. Bases-toi sur PresentationEvent pour afficher le numéro de carte de crédit dans une boîte alert
  return (
    <form action="/">
      <h1>Ne soumet pas ce formulaire (version 2)</h1>
      <label>
        Ton numéro de carte de créditttttttt
        <input type="text" name="text" id="creditcartnumber" />
      </label>
      <button>Soumettre</button>
    </form>
  )
}

export default TheForm
