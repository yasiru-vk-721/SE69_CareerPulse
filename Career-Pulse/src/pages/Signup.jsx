import  { useState } from 'react';
import './Signup_Login.css'
import { Link } from 'react-router-dom';
import image from '../images/Google_Icon1.png'
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
                toast.success("Login Successfull")
                navigate('/login')
            }
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={registerUser}>
                <h2>Sign Up</h2>
                <div className="switch-buttons">
                    <button type="button" className="active">
                        User
                    </button>
                    <Link to="/company-register">
                        <button type="button">Company</button>
                    </Link>
                </div>

                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder='Enter first name'
                    value={data.firstName}
                    onChange={(e) => setData({ ...data, firstName: e.target.value })}
                />


                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder='Enter last name'
                    value={data.lastName}
                    onChange={(e) => setData({ ...data, lastName: e.target.value })}
                />


                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder='Enter email'
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />


                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder='Enter password'
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />


                <label htmlFor="confirmpassword">Confirm Password:</label>
                <input
                    type="password"
                    name="confirmpassword"
                    placeholder='Enter confirm password'
                    value={data.confirmpassword}
                    onChange={(e) => setData({ ...data, confirmpassword: e.target.value })}
                />


                <label htmlFor="jobStatus">Job Status:</label>
                <input
                    type="text"
                    name="jobStatus"
                    placeholder='Enter job status'
                    value={data.jobStatus}
                    onChange={(e) => setData({ ...data, jobStatus: e.target.value })}
                />
                <button className="submitbutton" type="submit">Sign Up</button>

                <div className="google-signin-container">
                    <button type="button" className="google-signin-button">
                        <img className="google-signin-icon" src={image} alt="Google Icon" />
                        Sign Up with Google
                    </button>
                </div>

                <p>Already have an account?<Link to="/">Login</Link></p>
            </form>
        </div>
    );
}

export default Signup;
