import { useContext, useState } from 'react';
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
    <div className="bg-gradient-to-l from-black to-slate-600 min-h-screen flex items-center justify-center">
      <form className="bg-gradient-to-l from-black to-slate-600 p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full" onSubmit={postApplication}>
        <h2 className="text-3xl font-bold mb-4 col-span-2">Job Application Form</h2>

        <div className="col-span-1">
          <label htmlFor="fullName" className="text-xl mb-2">Full Name:</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={data.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="jobRole" className="text-xl mb-2">Job Role:</label>
          <input
            type="text"
            name="jobRole"
            placeholder="Enter Job Role"
            value={data.jobRole}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="skills" className="text-xl mb-2">Skills:</label>
          <input
            type="text"
            name="skills"
            placeholder="Enter Skills"
            value={data.skills}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="gender" className="text-xl mb-2">Gender:</label>
          <select
            name="gender"
            value={data.gender}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="col-span-1">
          <label htmlFor="nationality" className="text-xl mb-2">Nationality:</label>
          <select
            name="nationality"
            value={data.nationality}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="">Select Nationality</option>
            <option value="Srilankan">Srilankan</option>
            <option value="american">American</option>
            <option value="british">British</option>
            <option value="canadian">Canadian</option>
          </select>
        </div>

        <div className="col-span-1">
          <label htmlFor="institution" className="text-xl mb-2">Name of Institution:</label>
          <input
            type="text"
            name="institution"
            placeholder="Enter Name of Institution"
            value={data.institution}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="studyFields" className="text-xl mb-2">Major/Field of Study:</label>
          <input
            type="text"
            name="studyFields"
            placeholder="Enter Major/Field of Study"
            value={data.studyFields}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="col-span-2 flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UserApplication;