import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './JobCard.css'
import { CompanyContext } from '../../../../../context/companyContext';

const CompanyProfile = () => {
  const [vacancies, setVacancies] = useState([]);
  const {company} = useContext(CompanyContext);

  useEffect(() => {
    // Fetch vacancy data from your API or database
    axios.get('http://localhost:8000/vacancy')
      .then(response => {
        const vacancyData = response.data;
        const vacancyArray = Object.values(vacancyData); // Convert object to array
        setVacancies(vacancyArray);
        console.log(vacancyArray)
      })
      .catch(err => {
        console.error('Error fetching vacancy data:', err);
      });
  }, []); // Empty dependency array to fetch data only once on component mount

  const handleDeleteVacancy = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/vacancy/${id}`);
      // If successful, remove the deleted vacancy from the state or perform any necessary actions
      setVacancies(prevVacancies => prevVacancies.filter(vacancy => vacancy._id !== id));
    } catch (error) {
      console.error('Error deleting vacancy:', error);
      // Handle error
    }
  };
  return (
    <div>
      {vacancies.map(vacancyItem => (
        <div key={vacancyItem._id} className="bg-gray-800 shadow-md rounded-lg p-4 mb-8 mt-8 ml-20 mr-20">
          <h3 className='text-white font-bold text-3xl text-violet-200'>{vacancyItem.jobRole}</h3>
          <h4 className='text-white mt-4 mb-2 text-2xl text-yellow-300'>{vacancyItem.companyName}</h4>
          
          <p className='text-white text-justify' >{vacancyItem.requirements}</p>
          <p className='text-white mt-4'>Job Type: {vacancyItem.jobType}</p>
          <p className='text-white '>Location: {company.companyLocation}</p>
          <div className="flex flex-col sm:flex-row items-center mb-2">
            {/* Adjusted layout for better alignment on mobile */}
            <button className="button1 mr-5" onClick={() => handleDeleteVacancy(vacancyItem._id)}>Delete Vacancy</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyProfile;