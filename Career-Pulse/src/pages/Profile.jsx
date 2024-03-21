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
              {/* {!!user && (<h1>{user.firstName}</h1>)} */}
              {!!user && (<h1 className="text-red-500">{user.firstName}</h1>)}
              {/* <input className="infoTextBox" placeholder="Vismal"></input> */}
            </div>
            <div className="infoTextCont">
              Last Name
              {/* <input className="infoTextBox" placeholder="De Silva"></input> */}
              {!!user && (<h1 className="text-red-500">{user.lastName}</h1>)}
            </div>
            {/* <div className="infoTextCont">
              Phone Number
              <input className="infoTextBox" placeholder="07XXXXXXXX"></input>
            </div> */}
            <div className="infoTextCont">
              Email Address
              {/* <input
                className="infoTextBox"
                placeholder="minidu.20XXXXXX@iit.ac.lk"
              ></input> */}
              {!!user && (<h1 className="text-red-500">{user.email}</h1>)}
            </div>
            <div className="infoTextCont">
              Job Status
              {!!user && (<h1 className="text-red-500">{user.jobStatus}</h1>)}
              
            </div>
            {/* <div className="infoTextCont">
              Country
              <select className="infoTextBox" placeholder="Sri Lanka">
                <option value="notSelected">Srilanka</option>
                <option value="Email">China</option>
                <option value="Friends">Japan</option>
                <option value="SocialMedia">Russia</option>
                <option value="Advertisement">USA</option>
                <option value="Other">Other</option>
              </select>
            </div> */}
          </div>
          <div className="editButtonCont">
            <button className="editButton">Edit</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile