
const PresentationEvent = () => {

  const eventClick = (e: React.FormEvent) => {
    alert('Merci de ne pas soumettre ce formulaire')
    console.log(e)
  }

  // ajoutons des events!

  return (
    <form action="/">
      <h1>Ne soumet pas ce formulaire</h1>
      <label>
        Ton numéro de carte de crédit
        <input type="text" name="text" id="creditcartnumber" value="1233134134" />
      </label>
      <button onclick={eventClick}>Soumettre</button>
    </form>
  )
}

export default PresentationEvent
