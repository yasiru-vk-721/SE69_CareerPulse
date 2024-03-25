import { useState } from 'react';
import { Link } from 'react-router-dom';
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
                toast.success("Successfully Registered! Please login to continue.")
                navigate('/companyLogin')
            }
        }catch(error){
            console.log(error)
        }
    };

    return (
        <div className="min-h-screen c flex justify-center items-center">
            <form className="bg-gradient-to-t from-gray-700 to-black shadow-md rounded px-8 pt-6 pb-8 w-full max-w-screen-md" onSubmit={registerCompany}>
                <h2 className="text-2xl mb-4 font-bold text-center text-white">Company Sign Up</h2>
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
                        <label htmlFor="companyName" className="block text-sm font-bold mb-2 text-white">Company Name:</label>
                        <input
                            type="text"
                            name="companyName"
                            placeholder='Enter company name'
                            value={data.companyName}
                            onChange={(e) => setData({ ...data, companyName: e.target.value })}
                            className="w-full border rounded-md py-2 px-3 mt-1 mb-3"
                        />

                        <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter email'
                            value={data.companyEmail}
                            onChange={(e) => setData({ ...data, companyEmail: e.target.value })}
                            className="w-full border rounded-md py-2 px-3 mt-1 mb-3"
                        />

                        <label htmlFor="password" className="block text-white text-sm font-bold mb-2">Password:</label>
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
                        <label htmlFor="confirmpassword" className="block text-white text-sm font-bold mb-2">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmpassword"
                            placeholder='Enter confirm password'
                            value={data.companyConfirmPassword}
                            onChange={(e) => setData({ ...data, companyConfirmPassword: e.target.value })}
                            className="w-full border rounded-md py-2 px-3 mt-1 mb-3"
                        />

                        <label htmlFor="location" className="block text-white text-sm font-bold mb-2">Location:</label>
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

                <button className="bg-zinc-600 hover:bg-black text-white font-bold py-2 px-4 rounded w-full mt-4" type="submit">
                    Sign Up
                </button>

                <p className="text-center mt-4">Already have an account?<Link to="/companyLogin  " className="text-white hover:text-blue-700">Login</Link></p>
            </form>
        </div>
    );
}

export default CompanySignup;
