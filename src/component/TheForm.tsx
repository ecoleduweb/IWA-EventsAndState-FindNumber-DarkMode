import '../style/TheCanvas.scss'

const TheForm = () => {

  return (
    <form action="soumettre">
      <h1>Ne soumet pas ce formulaire</h1>
      <label>
        Ton numéro de carte de crédit
        <input type="text" name="text" id="" />
      </label>
      <button>Soumettre</button>
    </form>
  )
}

export default TheForm
