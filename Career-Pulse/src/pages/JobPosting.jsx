import React, { useState, useContext } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { CompanyContext } from '../../context/companyContext';
import postingImage from "../images/application_img.jpg"
function JobPosting() {
    const navigate = useNavigate();
    const { company } = useContext(CompanyContext);
    
    const [data, setData] = useState({
        jobRole: "",
        jobType: "",
        requirements: ""
    });

    const postJob = async (e) => {
        e.preventDefault();
        const { jobRole, jobType, requirements } = data;
        const { companyEmail, companyName } = company;
        try {
            const { data } = await axios.post('/posting', {
                companyName, companyEmail, jobRole, jobType, requirements
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({
                    jobRole: "",
                    jobType: "",
                    requirements: ""
                })
                toast.success("Post Successful")
                navigate('/vacancy')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-gray-200 flex justify-center items-center bg-gradient-to-r from-black to-gray-700" >
                <img src={postingImage} alt="Company Logo" className="object-cover h-min ml-10" />
            </div>
            <div className="w-3/4 flex justify-center items-center bg-gradient-to-l from-black to-gray-700 ">
                <form className="signup-form w-full max-w-md " onSubmit={postJob}>
                    <h2 className='text-3xl text-white text-center mb-6'>Job Application</h2>

                    <div className="mb-4">
                        <label htmlFor="jobRole" className="block text-sm font-medium text-white ">Job Role:</label>
                        <input
                            className='input-field w-full bg-gradient-to-l from-black to-gray-700 rounded-md'
                            type="text"
                            name="jobRole"
                            placeholder='Enter job role'
                            value={data.jobRole}
                            onChange={(e) => setData({ ...data, jobRole: e.target.value })}
                        />
                    </div>

                    <div className="mb-4 text-black bg-gradient-to-l from-black to-gray-700">
                        <label htmlFor="jobType" className="block text-sm font-medium text-white">Job Type:</label>
                        <select
                            className='input-field w-full text-white bg-gradient-to-l from-black to-gray-700 rounded-md '
                            name="jobType"
                            value={data.jobType}
                            onChange={(e) => setData({ ...data, jobType: e.target.value })}
                        >
                            <option value="">Select Job Type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Remote">Remote</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="requirements" className="block text-sm font-medium text-white">Requirements:</label>
                        <textarea
                            className='input-field w-full bg-gradient-to-l from-black to-gray-700 text-white rounded-md'
                            name="requirements"
                            placeholder='Enter requirements'
                            value={data.requirements}
                            onChange={(e) => setData({ ...data, requirements: e.target.value })}
                        />
                    </div>

                    <div className="text-center">
                        <button className="submit-button w-full bg-black text-white" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default JobPosting;
