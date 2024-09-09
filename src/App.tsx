import './style/App.scss'
import TheHeader from './component/TheHeader'
import AFindTheNumberGame from './component/AFindTheNumberGame'
import TheCanva from './component/TheCanvas'
import TheForm from './component/TheForm'
import { ChangeEvent, useState } from 'react'

const App = () => {

  const [cssClass, setCssClass] = useState<string>('ligth-mode')
  function handleToggle(event: ChangeEvent<HTMLInputElement>): void {
    setCssClass(event.target.checked ? 'dark-mode' : 'ligth-mode');
  }

  return (
    <div className={cssClass}>
      <TheHeader />
      <div className='wrapper'>
        <input type="checkbox" onChange={handleToggle} />
        <h1>Plan de match!</h1>
        <p>Comprendre comment prévenir le comportement d'un event</p>
        <p>Comprendre comment intéragir avec l'utilisateur à partir d'un event</p>
        <p>BONUS : afficher des affaires avec un event</p>
        <TheForm />
        <AFindTheNumberGame />
        {/* <TheCanva /> */}
      </div>
    </div>
  )
}

export default App
