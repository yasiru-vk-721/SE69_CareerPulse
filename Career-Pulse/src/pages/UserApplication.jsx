import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { UserContext } from '../../context/userContext';

function UserApplication() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [data, setData] = useState({
    fullName: "",
    jobRole: "",
    skills: "",
    gender: "",
    nationality: "",
    institution: "",
    studyFields: ""
  });


//   useEffect(() => {
//     // Fetch vacancy data from your API or database
//     axios.get('http://localhost:8000/vacancy')
//       .then(response => {
//         const vacancyData = response.data;
//         const vacancyArray = Object.values(vacancyData); // Convert object to array
//         setVacancies(vacancyArray);
//       })
//       .catch(err => {
//         console.error('Error fetching vacancy data:', err);
//       });
//   }, []); 

  const postApplication = async (e) => {
    e.preventDefault();

    const { fullName, jobRole, skills, gender, nationality, institution, studyFields } = data;
    const { email } = user; // Assuming userEmail is available in user object
   

    try {
      const response = await axios.post('/applicationPosting', {
        email, fullName, jobRole, skills, gender, nationality, institution, studyFields
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({
          fullName: "",
          jobRole: "",
          skills: "",
          gender: "",
          nationality: "",
          institution: "",
          studyFields: ""
        });
        console.log("Post Successful");
        navigate('/vacancy');
      }
    } catch (error) {
      console.error('Error posting application:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="signup-container mt-20 w-full mb-20  ">
      <form className="signup-form" onSubmit={postApplication}>
        <h2 className="text-3xl font-bold mb-4">Job Application Form</h2>

        <label htmlFor="fullName" className="text-2xl mb-4">Full Name:</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
          value={data.fullName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />

        <label htmlFor="jobRole" className="text-2xl mb-4">Job Role:</label>
        <input
          type="text"
          name="jobRole"
          placeholder="Enter Job Role"
          value={data.jobRole}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />

        <label htmlFor="skills" className="text-2xl mb-4">Skills:</label>
        <input
          type="text"
          name="skills"
          placeholder="Enter Skills"
          value={data.skills}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />

        <label htmlFor="gender" className="text-2xl mb-4">Gender:</label>
        <select
          name="gender"
          value={data.gender}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="nationality" className="text-2xl mb-4">Nationality:</label>
        <select
          name="nationality"
          value={data.nationality}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="">Select Nationality</option>
          <option value="Srilankan">Srilankan</option>
          <option value="american">American</option>
          <option value="british">British</option>
          <option value="canadian">Canadian</option>
        </select>

        <label htmlFor="institution" className="text-2xl mb-4">Name of Institution:</label>
        <input
          type="text"
          name="institution"
          placeholder="Enter Name of Institution"
          value={data.institution}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />

        <label htmlFor="studyFields" className="text-2xl mb-4">Major/Field of Study:</label>
        <input
          type="text"
          name="studyFields"
          placeholder="Enter Major/Field of Study"
          value={data.studyFields}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />

        <button className="submitbutton" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserApplication;
