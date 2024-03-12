import useState  from 'react';

const JobPostForm = ({ onSubmit, onClose }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ jobTitle, jobDescription });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label>
            Job Title:
            <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          </label>
          <label>
            Job Description:
            <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
          </label>
          <button type="submit">Post Job</button>
        </form>
      </div>
    </div>
  );
};

export default JobPostForm;