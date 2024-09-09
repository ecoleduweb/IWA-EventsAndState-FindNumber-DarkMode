import './style/App.scss'
import TheHeader from './component/TheHeader'
import AFindTheNumberGame from './component/AFindTheNumberGame'
import TheCanva from './component/TheCanvas'
import TheForm from './component/TheForm'

const App = () => {
  const cssClass = 'ligth-mode'
  // va lire sur useState 
  return (
    <div className={cssClass}>
      <TheHeader />
      <div className='wrapper'>
        <input type="checkbox" />
        <h1>Plan de match!</h1>
        <p>Comprendre comment prévenir le comportement d'un event</p>
        <p>Comprendre comment intéragir avec l'utilisateur à partir d'un event</p>
        <p>BONUS : afficher des affaires avec un event</p>
        <h2>En fin de cours</h2>
        <p>useState</p>
        <TheForm />
        <AFindTheNumberGame />
        {/* <TheCanva /> */}
      </div>
    </div>
  )
}

export default App
