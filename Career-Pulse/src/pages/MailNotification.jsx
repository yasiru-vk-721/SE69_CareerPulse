import { useState } from 'react';
import axios from "axios";
import './MailNotification.css';
import {toast} from 'react-hot-toast';


function MailNotification() {
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    const sendMail = () => {
      axios
      .get("http://localhost:8000/send-mail", {
        params: {
          email,
          subject,
          message,
        },

      })

      .then(() => {
        toast.error('Failed to send email.');
        
      })

      .catch(() => {
        
        toast.success('Email sent successfully!');
        
      })
      
    };

  //   const closeForm = () => {
  //     setShowForm(false);
  // };

  return (
    <div className="email-form">
      <h1>Email Editor</h1> {/* Heading titled "Email Editor" */}
        <input type="text" placeholder="Receippent Email"
        onChange={(e) => setEmail(e.target.value)} 
        
        />
        <br />
        <input type="text" placeholder="Subject"
        onChange={(e) => setSubject(e.target.value)}
        />
        <br />
        <textarea placeholder="Message" onChange={(e) => setMessage(e.target.value)}>
        </textarea>
        <br />
        <button onClick ={sendMail}>Send Mail</button>


         
    </div>
  );
}

export default MailNotification;



  