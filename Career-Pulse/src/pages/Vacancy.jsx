import { useState , useContext, useEffect} from "react"
import '../Components/Team_files/Vinuji-fe/JobList.css'; 
import { UserContext } from '../../context/userContext';
// import { VacancyContext } from "../../context/vacancyContext";
import { CompanyContext } from "../../context/companyContext";
import jobsData from '../Components/Team_files/Vinuji-fe/JobData'
import JobList from '../Components/Team_files/Vinuji-fe/JobList'
import SearchBar from '../Components/Team_files/Vinuji-fe/SearchBar'
import './VacancyHero.css'
import { Link } from 'react-router-dom';
import axios from "axios";

function Vacancy() {
  // const {vacancy} = useContext(VacancyContext);
  const {company} = useContext(CompanyContext);


  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const {user} = useContext(UserContext);

  const [loadedUser, setLoadedUser] = useState(false);

  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    // Fetch vacancy data from your API or database
    axios.get('http://localhost:8000/vacancy')
      .then(response => {
        const vacancyData = response.data;
        const vacancyArray = Object.values(vacancyData); // Convert object to array
        setVacancies(vacancyArray);
      })
      .catch(err => {
        console.error('Error fetching vacancy data:', err);
      });
  }, []); 
  

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
      <h1 className='text-6xl mt-20'>Your ideal jobs await, Start the search.. </h1>

      
      <SearchBar onSearch={handleSearch} />
      <div className="job-list-container">
      {vacancies.map((job) => (
        <div key={job._id} className="job-card">
          <h3 className='text-white font-bold text-3xl text-violet-200'>{job.jobRole}</h3>
          <h4 className='text-white mt-4 mb-2 text-2xl text-yellow-300'>{job.companyName}</h4>
          
          <p className='text-white text-justify' >{job.requirements}</p>
          <p className='text-white mt-4'>Job Type: {job.jobType}</p>
          <p className='text-white '>Location: {company.companyLocation}</p>
          <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
            <button className="apply-button">Apply Job</button>
          </a>
        </div>
      ))}
    </div>
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