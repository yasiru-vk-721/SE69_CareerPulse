import React from "react";

import "./vismal.css";
// import ProfilePic from "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp";
import ProfilePic from "./download.jpg"

const Vismal = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="userProfileCont">
        <div className="userProfile profileCont">
          <div className="userProfileImg">
            <img src={ProfilePic} className="profilePic" alt="profilePic" />
            <h1>Name</h1>
            <p>Role</p>
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
  );
};

export default Vismal;

