import './JobList.css'; 

const JobList = ({ jobs }) => {
  return (
    <div className="job-list-container">
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h3 className='text-white'><b>{job.title}</b></h3>
          <p className='text-white'>Company Name:{job.companyName}</p>
          <p className='text-white'>Job Type: {job.type}</p>
          <p className='text-white'>Location: {job.location}</p>
          <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
            <button className="apply-button">Apply Job</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default JobList;
