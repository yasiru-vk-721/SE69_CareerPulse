import Body from "../Components/BodyContent/Body"
import Footer from "../Components/FooterContent/Footer"
import Header from "../Components/HeaderContent/Header"

function Vacancy() {
  return (
    <div id ="wrapper">
      <Header/>
      <Body>
      <h3 className='vacancy'>Vacancy</h3>
      </Body>
      <Footer/>
    </div>
  )
}

export default Vacancy