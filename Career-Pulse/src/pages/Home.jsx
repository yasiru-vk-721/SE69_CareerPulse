import HomeAni from "../Components/HomeAni"
import { Link } from "react-router-dom"
import pic from '../images/login.jpg'
import recommendation from '../images/recommendation.png'
import jobopportunities from '../images/jobbtn.jpg'

const Home = () => {

  return (
    <div>
        <HomeAni />
        <div className="bg-gradient-to-l from-gray-500 to-black min-h-screen flex flex-col justify-center items-center">
      {/* Header */}
      <header className="bg-white shadow-lg w-full">
        <div className="container mx-auto py-4 px-8">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center">Career Pulse</h1>
        </div>
      </header>


      <section className="py-16 px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-4">Find Your Dream Job</h2>
        <p className="text-lg text-gray-100 mb-8">Discover opportunities that match your skills and interests.</p>
        <Link to="/vacancy">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">Get Started</button>
        </Link>
      </section>


      <section className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="max-w-xs mx-auto mb-8 md:mb-0">
            <img src={pic} alt="Service 1" className="w-full mb-4 rounded-lg shadow-lg" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Job Search</h3>
            <p className="text-gray-700">Search and apply for job openings.</p>
          </div>
          <div className="max-w-xs mx-auto mb-8 md:mb-0">
            <img src={recommendation} alt="Service 2" className="w-full mb-4 rounded-lg shadow-lg" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Career Advice</h3>
            <p className="text-gray-700">Get expert advice for your career growth.</p>
          </div>
          <div className="max-w-xs mx-auto mb-8 md:mb-0">
            <img src={jobopportunities} alt="Service 3" className="w-full mb-4 rounded-lg shadow-lg" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Good Job Opportunities</h3>
            <p className="text-gray-700">Go through the Website.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">About Us</h2>
        <p className="text-lg text-white mb-8">
          We are dedicated to helping individuals find meaningful and fulfilling careers. 
          Our platform connects talented professionals with top companies, providing a seamless 
          experience for job seekers and employers alike.
        </p>
      </section>

      <section className=" py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg mb-8">Have a question or need assistance? Contact our support team.</p>
        <Link to="/contact"> 
        <button className="bg-blue-500 text-red hover:bg-blue-600 font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">Connect With Us</button>
        </Link>
      </section>
    </div>
    </div>
  )
}

export default Home