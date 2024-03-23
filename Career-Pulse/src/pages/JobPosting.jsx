import React, { useState, useContext } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { CompanyContext } from '../../context/companyContext';

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
        <div className="signup-container w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <form className="signup-form p-8" onSubmit={postJob}>
                <h2 className='text-3xl text-blue-950 text-center mb-6'>Job Application</h2>

                <div className="mb-4">
                    <label htmlFor="jobRole" className="block text-sm font-medium text-gray-700">Job Role:</label>
                    <input
                        className='input-field'
                        type="text"
                        name="jobRole"
                        placeholder='Enter job role'
                        value={data.jobRole}
                        onChange={(e) => setData({ ...data, jobRole: e.target.value })}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="jobType" className="block text-sm font-medium text-gray-700">Job Type:</label>
                    <select
                        className='input-field'
                        name="jobType"
                        value={data.jobType}
                        onChange={(e) => setData({ ...data, jobType: e.target.value })}
                    >
                        <option value="">Select Job Type</option>
                        <option value="Type 1">Type 1</option>
                        <option value="Type 2">Type 2</option>
                        <option value="Type 3">Type 3</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">Requirements:</label>
                    <textarea
                        className='input-field'
                        name="requirements"
                        placeholder='Enter requirements'
                        value={data.requirements}
                        onChange={(e) => setData({ ...data, requirements: e.target.value })}
                    />
                </div>

                <div className="text-center">
                    <button className="submit-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default JobPosting;
