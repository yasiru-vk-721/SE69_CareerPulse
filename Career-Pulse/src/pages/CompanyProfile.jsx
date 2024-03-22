import React from "react";

import "./Company.css";

import ProfilePic from "../images/download.jpg"

const CompanyProfile = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="companyProfileCont">
        <div className="companyProfile profileCont">
          <div className="companyProfileImg">
            <img src={ProfilePic} className="profilePic" alt="profilePic" />
            <h1>Company Name</h1>
            
          </div>
          <div className="companyProfileBio">
            <p>
              Company Details 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              dolor blanditiis esse animi quia repudiandae.
            </p>
          </div>
        </div>
        <div className="companyInformation profileCont">
          <div className="companyInformationCont"> 

            <div className="infoTextCont">
              Company Name
              <input className="infoTextBox" placeholder="Name"></input>
            </div>

            <div className="infoTextCont">
              Company Email Address
              <input
                className="infoTextBox"
                placeholder="minidu.20XXXXXX@iit.ac.lk"
              ></input>
            </div>

            <div className="infoTextCont">
              Contact Number
              <input className="infoTextBox" placeholder="07XXXXXXXX"></input>
            </div>

           

            <div className="infoTextCont">
              Location
              <input className="infodropDownMenu" placeholder="Srilanka"></input>
            </div>
            
          </div>
          <div className="editButtonCont">
            <button className="editButton">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;

