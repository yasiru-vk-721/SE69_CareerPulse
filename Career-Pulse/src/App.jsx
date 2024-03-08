
import './App.css'
import Body from './Components/BodyContent/Body'
import Footer from './Components/FooterContent/Footer'
import Header from './Components/HeaderContent/Header'
import HomeAni from './Components/HomeAni'

function App() {


  return (
    <>
      <Header />
      <div id="wrapper">
        <Body>
          <HomeAni />
          {/* <h3 className='home'>Home</h3> */}
        </Body>
        <Footer />
      </div>
    </>
  )
}

export default App
