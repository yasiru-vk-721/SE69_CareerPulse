import { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/Google_Icon1.png';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function CompanySignup() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        companyName: "",
        companyEmail: "",
        companyPassword: "",
        companyConfirmPassword: "",
        companyLocation: ""
    });

    const registerCompany = async (e) => {
        e.preventDefault();
        const { companyName, companyEmail, companyPassword, companyConfirmPassword, companyLocation } = data;
        try{
            const {data} = await axios.post('/company-register',{
                companyName, companyEmail, companyPassword, companyConfirmPassword, companyLocation
            })
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                toast.success("Login Successfull")
                navigate('/')
            }
        }catch(error){
            console.log(error)
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg" onSubmit={registerCompany}>
                <h2 className="text-2xl mb-4 font-bold text-center">Company Sign Up</h2>
                <div className="flex justify-center mb-4">
                    <Link to="/signup">
                        <button type="button" className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                            User
                        </button>
                    </Link>
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                        Company
                    </button>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">Company Name:</label>
                        <input
                            type="text"
                            name="companyName"
                            placeholder='Enter company name'
                            value={data.companyName}
                            onChange={(e) => setData({ ...data, companyName: e.target.value })}
                            className="w-full border rounded-md py-2 px-3 mt-1 mb-3"
                        />

                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter email'
                            value={data.companyEmail}
                            onChange={(e) => setData({ ...data, companyEmail: e.target.value })}
                            className="w-full border rounded-md py-2 px-3 mt-1 mb-3"
                        />

                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='Enter password'
                            value={data.companyPassword}
                            onChange={(e) => setData({ ...data, companyPassword: e.target.value })}
                            className="w-full border rounded-md py-2 px-3 mt-1 mb-3"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="confirmpassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmpassword"
                            placeholder='Enter confirm password'
                            value={data.companyConfirmPassword}
                            onChange={(e) => setData({ ...data, companyConfirmPassword: e.target.value })}
                            className="w-full border rounded-md py-2 px-3 mt-1 mb-3"
                        />

                        <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
                        <input
                            type="text"
                            name="location"
                            placeholder='Enter location'
                            value={data.companyLocation}
                            onChange={(e) => setData({ ...data, companyLocation: e.target.value })}
                            className="w-full border rounded-md py-2 px-3 mt-1 mb-3"
                        />
                    </div>
                </div>

                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full mt-4" type="submit">
                    Sign Up
                </button>

                <div className="mt-6 text-center">
                    <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        <img className="h-6 w-6 inline-block mr-2" src={image} alt="Google Icon" />
                        Sign Up with Google
                    </button>
                </div>

                <p className="text-center mt-4">Already have an account?<Link to="/companyLogin  " className="text-blue-500 hover:text-blue-700">Login</Link></p>
            </form>
        </div>
    );
}

export default CompanySignup;
