import React, { useState, useContext, useEffect } from "react";
import '../Components/Team_files/Vinuji-fe/JobList.css'; 
import { UserContext } from '../../context/userContext';
import { CompanyContext } from "../../context/companyContext";
import axios from "axios";
import { Link } from "react-router-dom";

function Vacancy() {
  const { company } = useContext(CompanyContext);
  const { user } = useContext(UserContext);

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  useEffect(() => {
    // Filter vacancies based on search term
    const filtered = vacancies.filter((job) =>
      (job.jobRole && job.jobRole.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (job.companyName && job.companyName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (job.location && job.location.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredJobs(filtered);
  }, [searchTerm, vacancies]);
  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div id="wrapper" className="hero2">
        <div className="text-center mb-20">
          <h1 className='text-6xl mt-20'>Your ideal jobs await, Start the search.. </h1>
          <input
            className="searchBar w-1/2 h-12 pl-4 mt-10 mb-10 "
            type="text"
            placeholder="Search by company name, job role, or location"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="job-list-container">
            {filteredJobs.map((job) => (
              <div key={job._id} className="job-card">
                <h3 className='text-white font-bold text-3xl text-violet-200'>{job.jobRole}</h3>
                <h4 className='text-white mt-4 mb-2 text-2xl text-yellow-300'>{job.companyName}</h4>
                <p className='text-white text-justify'>{job.requirements}</p>
                <p className='text-white mt-4'>Job Type: {job.jobType}</p>
                <p className='text-white'>Location: {company.companyLocation}</p>
                <Link to='/UserApplication'>
                <button className="apply-button">Apply Job</button>
                </Link>
                  
             
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vacancy;
