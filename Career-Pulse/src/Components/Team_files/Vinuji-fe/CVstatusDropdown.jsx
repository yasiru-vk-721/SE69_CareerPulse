import React, { useState } from 'react';
import './CVStatusPage.css'

function CVstatusDropdown({ cv, onStatusChange, onDownloadCV }) {
    const handleStatusChange = (e) => {
        const selectedStatus = e.target.value;
        onStatusChange(cv.id, selectedStatus);
      };
  return (
    <tr>
      <td>{cv.id}</td>
      <td>{cv.name}</td>
      <td>
        <select onChange={handleStatusChange}>
          <option value="Received">Received</option>
          <option value="Viewed">Viewed</option>
          <option value="Rejected">Rejected</option>
        </select>
      </td>
      <td>
      <button onClick={() => onDownloadCV(cv.cvUrl, cv.name)}>
          <ion-icon name="download-outline"></ion-icon>
          

          Download

        </button>
        
      </td>
    </tr>
  )
}

export default CVstatusDropdown