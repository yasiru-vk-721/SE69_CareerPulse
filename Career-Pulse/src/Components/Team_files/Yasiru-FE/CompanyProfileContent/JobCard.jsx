import "./JobCard.css"
import { VacancyContext } from '../../../../../context/vacancyContext';



import PropTypes from 'prop-types';
import { useContext } from "react";

const JobCard = ({ job }) => {
    const {vacancy } = useContext(VacancyContext);
    return (
        <div className="bg-gray-100 shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-2xl lg:text-xl font-bold mb-2">{job.firstName}</h2> {/* Decreased font size for better readability on mobile */}
            
            {/* <p className="text-0.5xl lg:text-xl  mb-2">{job.skills}</p>
            <p className="text-0.5xl lg:text-xl  mb-2">{job.jobRole}</p> */}
            <div className="flex flex-col sm:flex-row justify-between items-center"> {/* Adjusted layout for better alignment on mobile */}
                <button className="button1">View Details</button> {/* Added margin bottom for better spacing on mobile */}
                <button className="button1">Edit</button> {/* Added horizontal margin for better spacing on mobile */}
                <button className="button1">Delete</button>
            </div>
        </div>
    );
};

JobCard.propTypes = {
    job: PropTypes.object.isRequired,
};



export default JobCard;
