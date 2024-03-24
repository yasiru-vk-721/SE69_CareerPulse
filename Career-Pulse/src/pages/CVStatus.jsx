import { useState } from 'react';
import '../Components/Team_files/Vinuji-fe/CVStatusPage.css'
import './CVStatus.css'
import { Link } from 'react-router-dom';


const initialCVs = [
  { id: 1, name: 'John Doe', cvUrl: 'john_doe_cv.pdf' },
  { id: 2, name: 'Jane Kate', cvUrl: 'jane_Kate_cv.pdf' },
  // Add more CV data as needed
];

const CVTable = () => {
  const [cvs, setCvs] = useState(initialCVs);
  const [showMailNotification, setShowMailNotification] = useState(false); // State to control mail notification display

  const handleStatusChange = (id, newStatus) => {
    const updatedCVs = cvs.map(cv =>
      cv.id === id ? { ...cv, status: newStatus } : cv
    );
    setCvs(updatedCVs);
  };

  const handleDownloadCV = (cvUrl, fileName) => {
    const downloadLink = document.createElement('a');
    downloadLink.href = cvUrl;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  const handleSendNotification = () => {
    // Set state to display mail notification
    setShowMailNotification(true);
  };

  return (
    <div className="cv-status-page">
      <h1>CV Submission Overview</h1> 
    <div className="hero">
      <table className='mb-64'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>CV Progress Status</th>
            <th>Download The CV</th>
            <th>Send Notification</th>
          </tr>
        </thead>
        <tbody>
          {cvs.map(cv => (
            <tr key={cv.id}>
              <td>{cv.id}</td>
              <td>{cv.name}</td>
              <td>
                <select onChange={(e) => handleStatusChange(cv.id, e.target.value)}>
                  <option value="Received">Received</option>
                  <option value="Viewed">Viewed</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleDownloadCV(cv.cvUrl, cv.name)}>
                  <ion-icon name="download-outline"></ion-icon>
                  Download
                </button>
              </td>
              <td>
              <button onClick={handleSendNotification}>
        <Link to="/Notification">Send Notification</Link>
      </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showMailNotification && (
        <div>
          {/* Display your mail notification component here */}
          
          
        </div>
      )}
     
    </div>
  </div>  
  );
};

export default CVTable;