import  { useState, useContext } from 'react';
import './Signup_Login.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import { CompanyContext } from '../../context/companyContext';


function JobPosting() {
    const navigate = useNavigate();
    const {company} = useContext(CompanyContext);
    

    const [data, setData] = useState({
        
        jobRole: "",
        jobType: "",
        requirements: "",
        
        
    });

    const postJob = async (e) => {
        e.preventDefault();
        const { jobRole, jobType, requirements } = data;
        // const {  } = company;
        const { companyEmail,companyName } = company;
        try{
            const {data} = await axios.post('/posting',{
                companyName, companyEmail, jobRole, jobType, requirements
            })
            if(data.error){
                toast.error(data.error)
            }else{
                setData({jobRole: "",
                jobType: "",
                requirements: ""})
                toast.success("Post Successfull")
                navigate('/vacancy')
            }
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={postJob}>
                <h2>Job Application</h2>
                

                <label htmlFor="jobRole">Job Role:</label>
                <input
                    type="text"
                    name="jobRole"
                    placeholder='Enter job role'
                    value={data.jobRole}
                    onChange={(e) => setData({ ...data, jobRole: e.target.value })}
                />



                <label htmlFor="jobType">Job Type:</label>
                <input
                    type="text"
                    name="jobType"
                    placeholder='Enter job Type'
                    value={data.jobType}
                    onChange={(e) => setData({ ...data, jobType: e.target.value })}
                />


                <label htmlFor="requirements">Requirements:</label>
                <input
                    type="text"
                    name="requirements"
                    placeholder='Enter requirements'
                    value={data.requirements}
                    onChange={(e) => setData({ ...data, requirements: e.target.value })}
                />


                
                <button className="submitbutton" type="submit">Submit</button>

                
            </form>
        </div>
    );
}

export default JobPosting;
