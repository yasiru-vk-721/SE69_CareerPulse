import { useState , useContext, useEffect} from "react"
import { UserContext } from '../../context/userContext';
// import { VacancyContext } from "../../context/vacancyContext";
// import { CompanyContext } from "../../context/companyContext";
import jobsData from '../Components/Team_files/Vinuji-fe/JobData'
import JobList from '../Components/Team_files/Vinuji-fe/JobList'
import SearchBar from '../Components/Team_files/Vinuji-fe/SearchBar'
import './VacancyHero.css'
import { Link } from 'react-router-dom';

function Vacancy() {
  // const {vacancy} = useContext(VacancyContext);
  // const {company} = useContext(CompanyContext);
  
  console.log(vacancy)

  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const {user} = useContext(UserContext);

  const [loadedUser, setLoadedUser] = useState(false);

  const handleSearch = (searchTerm) => {
    const filtered = jobsData.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  };
  

  useEffect(() => {
    const getUser = async () => {
    try{
      if(user){
        setLoadedUser(true);
      }
      }catch(error){
        console.log(error);
      }
    }
    getUser();
  });
  
  return (
    <div>
      {loadedUser ? (
    <div id ="wrapper" className="hero2">
      <div className = 'text-center mb-20'>
      <h1 className='text-6xl mt-20'>Your ideal jobs await, Start the search.. </h1>{!!vacancy && (<h1>Welcome {vacancy.vacancy.companyName}!</h1>)}
      <h1 className='text-6xl mt-20'>Your ideal jobs await, Start the search.. </h1>
      
      <SearchBar onSearch={handleSearch} />
      <JobList jobs={filteredJobs} />
      </div>
    </div>
    ) : (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-gray-400">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">Welcome to Our Website</h1>
        <p className="text-lg mb-8 animate__animated animate__fadeIn">Discover amazing features and services. Login first</p>
        <Link to="/login">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 animate__animated animate__fadeInUp">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
    )}
    </div>
  )
}

export default Vacancy