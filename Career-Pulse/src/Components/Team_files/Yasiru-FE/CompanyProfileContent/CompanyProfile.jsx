// CompanyProfile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyProfile = () => {
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
  }, []); // Empty dependency array to fetch data only once on component mount

  return (
    <div>
      {vacancies.map(vacancyItem => (
        <div key={vacancyItem._id} className="bg-gray-100 shadow-md rounded-lg p-4 mb-4">
          <h2 className="text-2xl lg:text-xl font-bold mb-2">{vacancyItem.companyName}</h2>
          {/* Uncomment and adjust as necessary */}
          <p className="text-0.5xl lg:text-xl  mb-2">{vacancyItem.jobType}</p>
          <p className="text-0.5xl lg:text-xl  mb-2">{vacancyItem.jobRole}</p>
          <p className="text-0.5xl lg:text-xl  mb-2">{vacancyItem.requirements}</p>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Adjusted layout for better alignment on mobile */}
            <button className="button1">View Details</button>
            <button className="button1">Edit</button>
            <button className="button1">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyProfile;
