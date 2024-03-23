import { useState , useContext, useEffect} from "react"
import { UserContext } from '../../context/userContext';
import { VacancyContext } from "../../context/vacancyContext";
// import { CompanyContext } from "../../context/companyContext";
import jobsData from '../Components/Team_files/Vinuji-fe/JobData'
import JobList from '../Components/Team_files/Vinuji-fe/JobList'
import SearchBar from '../Components/Team_files/Vinuji-fe/SearchBar'
import '../Components/Team_files/Vinuji-fe/VacancyPage.css'
import './VacancyHero.css'
import { Link } from 'react-router-dom';



function Vacancy() {
  const {vacancy} = useContext(VacancyContext);
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
      
      
      <SearchBar onSearch={handleSearch} />
      <JobList jobs={filteredJobs} />
      </div>
    </div>
    ) : (
      <div className="login-container min-h-screen flex justify-center items-center mt-10 bg-gray-400">
          <div className="login-content w-96 bg-white rounded-lg shadow-lg px-8 py-10 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-4">Please Login to view this page</h2>
            <Link to="/login">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </Link>
          </div>
        </div>
    )}
    </div>
  )
}

export default Vacancy