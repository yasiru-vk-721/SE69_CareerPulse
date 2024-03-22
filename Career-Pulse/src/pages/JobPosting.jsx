import  { useState } from 'react';
import './Signup_Login.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';


function JobPosting() {
    const navigate = useNavigate();
    

    const [data, setData] = useState({
        companyName: "",
        companyEmail: "",
        jobRole: "",
        skills: "",
        
        
    });

    const postJob = async (e) => {
        e.preventDefault();
        const {companyName, companyEmail, jobRole, skills} = data;
        try{
            const {data} = await axios.post('/posting',{
                companyName, companyEmail, jobRole, skills
            })
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
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
                

                <label htmlFor="companyName">Company Name:</label>
                <input
                    type="text"
                    name="companyName"
                    placeholder='Enter company name'
                    value={data.companyName}
                    onChange={(e) => setData({ ...data, companyName: e.target.value })}
                />
                <label htmlFor="companyEmail">Company Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder='Enter company email'
                    value={data.companyEmail}
                    onChange={(e) => setData({ ...data, companyEmail: e.target.value })}
                />


                <label htmlFor="jobRole">Job Role:</label>
                <input
                    type="text"
                    name="jobRole"
                    placeholder='Enter job role'
                    value={data.jobRole}
                    onChange={(e) => setData({ ...data, jobRole: e.target.value })}
                />


                <label htmlFor="skills">Skills:</label>
                <input
                    type="text"
                    name="skills"
                    placeholder='Enter skills'
                    value={data.skills}
                    onChange={(e) => setData({ ...data, skills: e.target.value })}
                />


                
                <button className="submitbutton" type="submit">Submit</button>

                
            </form>
        </div>
    );
}

export default JobPosting;
