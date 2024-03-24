import "./Profile.css"
import ProfilePic from '../images/download.jpg'
import { UserContext } from '../../context/userContext';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const {user} = useContext(UserContext);
  const [loadedUser, setLoadedUser] = useState(false);
  useEffect(() => {
    const getUser = async () => {
    try{
      if(user){
        setLoadedUser(true);
      }
      }catch(error){
        console.log(error);
      }
    }
    getUser();
  });
  return (
    <>
    {loadedUser ? (
      <div>
      {/* <Navbar /> */}
      <div className="userProfileCont ">
        <div className="userProfile profileCont">
          <div className="userProfileImg">
            <img src={ProfilePic} className="profilePic" alt="profilePic" />
            {!!user && (<h1>Welcome {user.firstName}  !</h1>)}
            
          </div>
          <div className="userProfileBio">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              dolor blanditiis esse animi quia repudiandae.
            </p>
          </div>
          <div className="CVDownload">
            <button>Download CV</button>
          </div>
        </div>
        <div className="userInformation profileCont">
          <div className="userInformationCont">
            <div className="infoTextCont">
              First Name
              {!!user && (<h1 className="text-red-500">{user.firstName}</h1>)}
             
            </div>
            <div className="infoTextCont">
              Last Name
              
              {!!user && (<h1 className="text-red-500">{user.lastName}</h1>)}
            </div>
          
            <div className="infoTextCont">
              Email Address
              {!!user && (<h1 className="text-red-500">{user.email}</h1>)}
            </div>
            <div className="infoTextCont">
              Job Status
              {!!user && (<h1 className="text-red-500">{user.jobStatus}</h1>)}
              
            </div>
           
          </div>
          <div className="updateButtonCont">
            <button className="updateButton">Update</button>
          </div>
        </div>
      </div>
    </div>
    ) : (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="text-center text-black">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn text-black">Welcome to Our Website</h1>
        <p className="text-lg mb-8 animate__animated animate__fadeIn">Discover amazing features and services. Login first</p>
        <Link to="/login">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 animate__animated animate__fadeInUp">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
    )}
    </>
  )
}

export default Profile