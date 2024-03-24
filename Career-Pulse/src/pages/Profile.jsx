import "./Profile.css"
import ProfilePic from '../images/download.jpg'
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';

function Profile() {
  const {user} = useContext(UserContext);
  return (
    <>
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
    </>
  )
}

export default Profile