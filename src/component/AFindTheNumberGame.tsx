import { getInputValueWithVanillaJs } from '../composables/utils'
import '../style/AButton.scss'

const secrectNumer = Math.floor(Math.random() * 10)

const handleValidateNumber = () => {
  const number = document.getElementById('number') as HTMLInputElement
  if (number.value === secrectNumer.toString()) {
    alert(`Bravo! Le chiffre était bien ${secrectNumer}`)
  }
  else if (number.value === '') {
    alert('Veuillez entrer un chiffre')
  }
  else {
    alert('nop!')
  }
}

const handleOnKeyPressInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const number = getInputValueWithVanillaJs('secretnumber')
  console.log("🚀 ~ handleOnKeyPressInput ~ number.value:", number)
  if (e.key === 'Enter') {
    handleValidateNumber()
  }
  else if (isNaN(e.key as any + 1) && e.key !== 'Backspace' && e.key === '-') {
    e.preventDefault()
  }
  else if ((number as any) + (e.key as any) > 10) {
    e.preventDefault()
    alert('Le chiffre doit être compris entre 0 et 10')
  }
  else if (number === secrectNumer.toString()) {
    handleValidateNumber()
  }
}
const AFindTheNumberGame = () => {
  return (
    <div className='premierJeu'>
      <p>Trouve le chiffre secret</p>
      <input type="number" name="number" id="secretnumber" min={0} max={10} onKeyDown={handleOnKeyPressInput} />
      <button onClick={handleValidateNumber} >Essayer</button>
    </div>
  )
}

export default AFindTheNumberGame
