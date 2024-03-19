import './JobList.css'; 

const JobList = ({ jobs }) => {
  return (
    <div className="job-list-container">
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h3><b>{job.title}</b></h3>
          <p>Company Name:{job.companyName}</p>
          <p>Job Type: {job.type}</p>
          <p>Location: {job.location}</p>
          <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
            <button className="apply-button">Apply Job</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default JobList;
