

import { useState } from 'react';
import JobCard from './JobCard';
import Modal from './Modal';
import { UserContext } from '../../../../../context/userContext';
import { CompanyContext } from '../../../../../context/companyContext';


import { useContext } from 'react';
import { VacancyContext } from '../../../../../context/vacancyContext';



export default function CompanyProfile() {
    const {vacancy } = useContext(VacancyContext);
    const {user } = useContext(UserContext);
    

    // Check if company data is loaded before accessing companyName
    // const companyName = company ? company.companyName : '';
    
    const [userdata, setUserData] = useState([])
    

    const location = "Colombo";
    const email = "adcd@gmail.com";



    const [openModal, setOpenModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Add loading state
    const [searchQuery, setSearchQuery] = useState('');

    const handleUploadJobClick = () => {
        setOpenModal(true);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // const filteredJobs = jobs.filter(job =>
    //     job.name.toLowerCase().includes(searchQuery.toLowerCase())
    // );
    
    const UserDataseting = () =>{
        const userName = user;
        setUserData([userName]); // Set userData as an array containing userName
        userdata.map(name =>{
           console.log(name); 
        });
    };


    return (
        <>
            <div className='ml-20 '>
                <div className="container mx-auto">
                    <div className="flex flex-col items-start justify-center right-2 mt-20  py-12 px-4">
                    <h1 style={{ marginTop: "-5rem", display: "flex", alignItems: "center", justifyContent: "center" }} className="text-2xl lg:text-4xl mb-4 mt-4 text-center text-blue-900">
                    <span className="text-lg mb-1">Location - {UserDataseting}</span>
                    </h1>
                        
                        <button
                            style={{ marginRight: "6rem", marginTop: "5rem" }}
                            className="absolute top-12 right-2 m-4 px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={() => UserDataseting()} // Use handleUploadJobClick function
                        >
                            Upload Job
                        </button>

                        {openModal && <Modal closeModal={() => setOpenModal(false)} />}
                        {/* Render Modal component when openModal is true */}
                        
                        
                        
                        <div className="mb-8">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Search Jobs..."
                                className="px-25 py-2 border rounded-md"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {/* {filteredJobs.map(job => (
                                <JobCard key={job.id} job={job} />
                            ))} */}
                            {/* {userdata.map(job => (
                                <JobCard key={job.id} job={job} />
                            ))} */}
                            {userdata.map((job, index) => (
                                <JobCard key={index}  job={job} id={index}/>
                            //  <div key={index}>{name.firstName}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
