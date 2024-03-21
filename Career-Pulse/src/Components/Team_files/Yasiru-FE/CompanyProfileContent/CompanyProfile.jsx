

import { useState } from 'react';
import JobCard from './JobCard';
import Modal from './Modal';
import { UserContext } from '../../../../../context/userContext';
import { CompanyContext } from '../../../../../context/companyContext';
import { useContext } from 'react';



export default function CompanyProfile() {
    const {company } = useContext(CompanyContext);
    

    // Check if company data is loaded before accessing companyName
    // const companyName = company ? company.companyName : '';
    
    const location = "Colombo";
    const email = "adcd@gmail.com";

    const jobs = [
        { id: 1, name: 'Software Engineer Intern', description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor earum ducimus, voluptatem autem quam dolorem, alias officia, quos odio voluptatum nulla eligendi necessitatibus consequuntur illo quisquam rem nisi soluta fugit?" },
        { id: 2, name: 'DevOps Engineer', description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor earum ducimus, voluptatem autem quam dolorem, alias officia, quos odio voluptatum nulla eligendi necessitatibus consequuntur illo quisquam rem nisi soluta fugit?" },
        { id: 3, name: 'Financial Executive', description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor earum ducimus, voluptatem autem quam dolorem, alias officia, quos odio voluptatum nulla eligendi necessitatibus consequuntur illo quisquam rem nisi soluta fugit?" },
    ];

    const [openModal, setOpenModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Add loading state
    const [searchQuery, setSearchQuery] = useState('');

    const handleUploadJobClick = () => {
        setOpenModal(true);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredJobs = jobs.filter(job =>
        job.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className='ml-20 '>
                <div className="container mx-auto">
                    <div className="flex flex-col items-start justify-center right-2 mt-20  py-12 px-4">
                    <h1 style={{ marginTop: "-5rem", display: "flex", alignItems: "center", justifyContent: "center" }} className="text-2xl lg:text-4xl mb-4 mt-4 text-center text-blue-900">
                     Welcome! {!!company && (<p style={{ marginLeft: "1rem", marginBottom: "0.6rem" }}>{company.companyName}</p>)}
                    </h1>
                        
                        <button
                            style={{ marginRight: "6rem", marginTop: "5rem" }}
                            className="absolute top-12 right-2 m-4 px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={handleUploadJobClick} // Use handleUploadJobClick function
                        >
                            Upload Job
                        </button>

                        {openModal && <Modal closeModal={() => setOpenModal(false)} />}
                        {/* Render Modal component when openModal is true */}
                        
                        <p className="text-lg mb-2">Location - {location}</p>
                        
                        <p className="text-lg mb-8">Email Address - {email}</p>
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
                            {filteredJobs.map(job => (
                                <JobCard key={job.id} job={job} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
