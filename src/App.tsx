import './style/App.scss'
import TheHeader from './component/TheHeader'
import AFindTheNumberGame from './component/AFindTheNumberGame'
import TheCanva from './component/TheCanvas'
import TheForm from './component/TheForm'
const App = () => {
  return (
    <>
      <TheHeader />
      <div className='wrapper'>
        <AFindTheNumberGame />
        <TheForm />
        <TheCanva />
      </div>
    </>
  )
}

export default App
