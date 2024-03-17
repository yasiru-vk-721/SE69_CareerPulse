// import Header from "../Components/HeaderContent/Header"
// import Body from "../Components/BodyContent/Body"
// import Footer from "../Components/FooterContent/Footer"
import "./Profile.css"
import ProfilePic from '../images/download.jpg'
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';

function Profile() {
  const {user} = useContext(UserContext);
  return (
    <>
      {/* <Header/>
      <Body> */}
      <div>
      {/* <Navbar /> */}
      <div className="userProfileCont ">
        <div className="userProfile profileCont">
          <div className="userProfileImg">
            <img src={ProfilePic} className="profilePic" alt="profilePic" />
            {!!user && (<h1>Welcome {user.firstName}</h1>)}
            <p className="text-2xl">Role</p>
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
              <input className="infoTextBox" placeholder="Vismal"></input>
            </div>
            <div className="infoTextCont">
              Last Name
              <input className="infoTextBox" placeholder="De Silva"></input>
            </div>
            <div className="infoTextCont">
              Phone Number
              <input className="infoTextBox" placeholder="07XXXXXXXX"></input>
            </div>
            <div className="infoTextCont">
              Email Address
              <input
                className="infoTextBox"
                placeholder="minidu.20XXXXXX@iit.ac.lk"
              ></input>
            </div>
            <div className="infoTextCont">
              City
              <input className="infodropDownMenu" placeholder="Kottawa"></input>
            </div>
            <div className="infoTextCont">
              Country
              <select className="infoTextBox" placeholder="Sri Lanka">
                <option value="notSelected">Srilanka</option>
                <option value="Email">China</option>
                <option value="Friends">Japan</option>
                <option value="SocialMedia">Russia</option>
                <option value="Advertisement">USA</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="updateButtonCont">
            <button className="updateButton">Update</button>
          </div>
        </div>
      </div>
    </div>

      {/* </Body>
      <Footer/> */}
    </>
  )
}

export default Profile