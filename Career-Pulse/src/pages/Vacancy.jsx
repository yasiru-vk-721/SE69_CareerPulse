import { useState} from "react"
import jobsData from '../Components/Team_files/Vinuji-fe/JobData'
import JobList from '../Components/Team_files/Vinuji-fe/JobList'
import SearchBar from '../Components/Team_files/Vinuji-fe/SearchBar'
import '../Components/Team_files/Vinuji-fe/VacancyPage.css'
import './VacancyHero.css'

function Vacancy() {

  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const handleSearch = (searchTerm) => {
    const filtered = jobsData.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  };
  return (
    <div id ="wrapper" className="hero2">
      <div className = 'text-center mb-20'>
      <h1 className='text-6xl mt-20'>Your ideal jobs await, Start the search...</h1>
      <SearchBar onSearch={handleSearch} />
      <JobList jobs={filteredJobs} />
      </div>
    </div>
  )
}

export default Vacancy