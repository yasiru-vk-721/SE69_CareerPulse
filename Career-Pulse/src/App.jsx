
import './App.css'
import Body from './Components/BodyContent/Body'
import Header from './Components/HeaderContent/Header'

function App() {


  return (
    <>
      <Header />
      <div id="wrapper">
        <Body>
          <h3 className='home'>Home</h3>
        </Body>
      </div>
    </>
  )
}

export default App
