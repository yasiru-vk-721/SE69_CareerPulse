import  { useState } from 'react';
import './Signup_Login.css'
import { useNavigate } from 'react-router-dom';

function UserApplication() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        userName: "",
        jobRole: "",
        skills: "",
        education: {
            highestLevel: '',
            institution: '',
            fieldOfStudy: '',
            graduationYear: ''
        }
        
    });



return (
    <div className="signup-container">
        <form className="signup-form" >
            <h2 className="text-3xl font-bold mb-4">Job Application Form</h2>

            <label htmlFor="fullName" className="text -3xl mb-4">Full Name:</label>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Enter Full Name"
                    value={data.fullName}
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
            
            <label htmlFor="jobRole" className="text -3xl mb-4">Job Role:</label>
                <input
                    type="text"
                    name="jobRole"
                    placeholder="Enter Job Role"
                    value={data.jobRole}
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
            
            <label htmlFor="skills" className="text -3xl mb-4">Skills:</label>
                <input
                    type="text"
                    name="skills"
                    placeholder="Enter Skills"
                    value={data.skills}
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />

            <label htmlFor="gender" className="text -3xl mb-4">Gender:</label>
                <select
                    name="gender"
                    value={data.gender}
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                >
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="nationality" className="text -3xl mb-4">Nationality:</label>
                <select
                    name="nationality"
                    value={data.nationality}
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                >
                    <option value="">Srilankan</option>
                    <option value="american">American</option>
                    <option value="british">British</option>
                    <option value="canadian">Canadian</option>
                </select>

               
                <label htmlFor="institution" className="text -3xl mb-4">Name of Institution:</label>
                <input
                    type="text"
                    name="institution"
                    placeholder="Enter Name of Institution"
                    value={data.education.institution}
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />

                <label htmlFor="fieldOfStudy" className="block mb-2">Major/Field of Study:</label>
                <input
                    type="text"
                    name="fieldOfStudy"
                    placeholder="Enter Major/Field of Study"
                    value={data.education.fieldOfStudy}
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />

               
            
            <button className="submitbutton" type="submit">Submit</button>
        </form>
    </div>
)
}

export default UserApplication;