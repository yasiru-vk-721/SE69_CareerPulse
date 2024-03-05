import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from '../../../pages/Signup';
import CompanySignup from '../../../pages/CompanySignup';


const SignupForm = () => {
    const [currentForm, setCurrentForm] = useState('user','company');
    const navigate = useNavigate();
  
    const switchForm = (formType) => {
      setCurrentForm(formType);
      // Update the URL path based on the form type
      if (formType === 'user') {
        navigate('/signup');
      } else if (formType === 'company') {
        navigate('/companysignup');
      }
    };
  
    return (
      <div>
        {currentForm === 'user' ? (
          <Signup switchForm={() => switchForm('company')} />
        ) : (
          <CompanySignup switchForm={() => switchForm('user')} />
        )}
      </div>
    );
  };

export default SignupForm
