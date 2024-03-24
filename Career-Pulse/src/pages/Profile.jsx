import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import ProfilePic from '../images/login.jpg';

function Profile() {
  const { user } = useContext(UserContext);
  const [loadedUser, setLoadedUser] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        if (user) {
          setLoadedUser(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [user]);

  return (
    <>
      {loadedUser ? (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-2xl bg-gradient-to-l from-black to-gray-700 ">
            <div className="md:flex ">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={ProfilePic}
                  alt="Profile"
                />
              </div>
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-2">
                  Welcome {user.firstName}!
                </h1>
                <div className="mb-4">
                  <p className="text-white font-bold">First Name:</p>
                  <p className="text-gray-300">{user.firstName}</p>
                </div>
                <div className="mb-4">
                  <p className="text-white font-bold">Last Name:</p>
                  <p className="text-gray-300">{user.lastName}</p>
                </div>
                <div className="mb-4">
                  <p className="text-white font-bold">Email Address:</p>
                  <p className="text-gray-300">{user.email}</p>
                </div>
                <div className="mb-4">
                  <p className="text-white font-bold">Job Status:</p>
                  <p className="text-gray-300">{user.jobStatus}</p>
                </div>
                <div>
                  <Link to = "/cvstatus">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Your Status 
                  </button>
                  </Link>
                  {/* <Link to="/update">
                    <button className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                      Update
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center bg-white">
          <div className="text-center text-black">
            <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn text-black">
              Welcome to Our Website
            </h1>
            <p className="text-lg mb-8 animate__animated animate__fadeIn">
              Discover amazing features and services. Login first
            </p>
            <Link to="/login">
              <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 animate__animated animate__fadeInUp">
                Explore Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
