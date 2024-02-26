import './HomeAni.css'
import SearchBar from './SearchBar'
function HomeAni() {
  return (
    <div className='mainImg'>
        <SearchBar />
        <div className="heroImg mt-8">
            <h2 className="animation1">
                Welcome to Our Website
            </h2>
            <h3 className="animation2">
            You can find a vacancy from Our Platform
            </h3>
        </div>
    </div>
  )
}

export default HomeAni