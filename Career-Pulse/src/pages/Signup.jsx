import  { useState } from 'react';
import './Signup_Login.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

function Signup() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpassword: "",
        jobStatus: ""
    });

    const registerUser = async (e) => {
        e.preventDefault();
        const {firstName, lastName, email, password, confirmpassword, jobStatus} = data;
        try{
            const {data} = await axios.post('/register',{
                firstName, lastName, email, password, confirmpassword, jobStatus
            })
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                await axios.post('/testMail', {userEmail: email});
                toast.success("Successfully Registered! Please login to continue.")
                navigate('/login')
            }
        }catch(error){
            console.log(error)
        }
    }

    // const test = async () => {
    //     try {
    //         const email = await axios.post('/testMail', {});
    //         console.log(email);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <div className="signup-container bg-gradient-to-l from-gray-500 to-black">
            <form className="signup-form" onSubmit={registerUser}>
                <h2 className='text-white'>Sign Up</h2>
                <div className="switch-buttons">
                    <button type="button" className="active">
                        User
                    </button>
                    <Link to="/company-register">
                        <button type="button">Company</button>
                    </Link>
                </div>

                <label htmlFor="firstName" className='text-white'>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder='Enter first name'
                    value={data.firstName}
                    onChange={(e) => setData({ ...data, firstName: e.target.value })}
                />


                <label htmlFor="lastName" className='text-white'>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder='Enter last name'
                    value={data.lastName}
                    onChange={(e) => setData({ ...data, lastName: e.target.value })}
                />


                <label htmlFor="email" className='text-white'>Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder='Enter email'
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />


                <label htmlFor="password" className='text-white'>Password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder='Enter password'
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />


                <label htmlFor="confirmpassword" className='text-white'>Confirm Password:</label>
                <input
                    type="password"
                    name="confirmpassword"
                    placeholder='Enter confirm password'
                    value={data.confirmpassword}
                    onChange={(e) => setData({ ...data, confirmpassword: e.target.value })}
                />


                <label htmlFor="jobStatus" className='text-white'>Job Status:</label>
                <input
                    type="text"
                    name="jobStatus"
                    placeholder='Enter job status'
                    value={data.jobStatus}
                    onChange={(e) => setData({ ...data, jobStatus: e.target.value })}
                />
                <button className="submitbutton mt-2" type="submit">Sign Up</button>
                <p className='text-white'>Already have an account?<Link to="/login" className='text-blue-800'>Login</Link></p>
            </form>
        </div>
    );
}

export default Signup;
