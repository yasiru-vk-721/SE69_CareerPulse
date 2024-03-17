import  { useState } from 'react';
import CVStatusDropdown from '../Components/Team_files/Vinuji-fe/CVstatusDropdown';
import '../Components/Team_files/Vinuji-fe/CVStatusPage.css'
import './CVStatus.css'
// import Header from '../Components/HeaderContent/Header';
// import Footer from '../Components/FooterContent/Footer';


const initialCVs = [
  { id: 1, name: 'John Doe', cvUrl: 'john_doe_cv.pdf' },
  { id: 2, name: 'Jane Kate', cvUrl: 'jane_Kate_cv.pdf' },
  // Add more CV data as needed
];

const CVTable = () => {
  const [cvs, setCvs] = useState(initialCVs);

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

  return (
    <div className="hero">
        
    <table className='mb-64'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>CV Progress Status</th>
          <th>Download The CV</th>
        </tr>
      </thead>
      <tbody>
        {cvs.map(cv => (
          <CVStatusDropdown key={cv.id} cv={cv} onStatusChange={handleStatusChange} onDownloadCV={handleDownloadCV} />
        ))}
      </tbody>
    </table>
    
    </div>
  );
};

export default CVTable; 