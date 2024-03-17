import { useState } from "react";
import "./Modal.css";


function Modal({ openModal, closeModal }) {

    const [jobData, setJobData] = useState({
        jobTitle: '',
        vacancies: '',
        description: '',
        requirements: '',
        salary: '',
        workingHours: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/users/jobs', jobData); // Adjust the URL as per your backend route
            console.log(response.data);
            closeModal(); // Close modal on successful form submission
        } catch (error) {
            console.error('Error saving job data:', error);
            // Handle error, maybe show an error message to the user
        }
    };

    return (
        <div className={`modal ${openModal ? "active" : ""}`}>
            <div className="overlay" onClick={closeModal}></div>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={closeModal} className="close-button">Close</button>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="jobTitle">Job Title:</label><br />
                    <input type="text" id="jobTitle" name="jobTitle" value={jobData.jobTitle} onChange={handleInputChange} /><br />

                    <label htmlFor="vacancies">Vacancies:</label><br />
                    <input type="text" id="vacancies" name="vacancies" value={jobData.vacancies} onChange={handleInputChange} /><br />

                    <label htmlFor="description">Description:</label><br />
                    <textarea id="description" name="description" value={jobData.description} onChange={handleInputChange}></textarea><br />

                    <label htmlFor="requirements">Requirements:</label><br />
                    <textarea id="requirements" name="requirements" value={jobData.requirements} onChange={handleInputChange}></textarea><br />

                    <label htmlFor="salary">Salary:</label><br />
                    <input type="text" id="salary" name="salary" value={jobData.salary} onChange={handleInputChange} /><br />

                    <label htmlFor="workingHours">Working Hours:</label><br />
                    <input type="text" id="workingHours" name="workingHours" value={jobData.workingHours} onChange={handleInputChange} /><br />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Modal;
