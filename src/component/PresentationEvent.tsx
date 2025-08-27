
const PresentationEvent = () => {

  const maFonction = (e: React.FormEvent) => {
    alert('Merci de ne pas soumettre ce formulaire')
  }

  return (
    <form action="/">
      <h1>Ne soumet pas ce formulaire</h1>
      <label>
        Ton numéro de carte de crédit
        <input type="text" name="text" id="creditcartnumber" value="1233134134" />
      </label>
      <button onclick=(maFonction)>Soumettre</button>
    </form>
  )
}

export default PresentationEvent
