import React, { useState } from 'react';
import './CVStatusPage.css'


function CVstatusDropdown({ cv, onStatusChange, onDownloadCV }) {
    const handleStatusChange = (e) => {
        const selectedStatus = e.target.value;
        onStatusChange(cv.id, selectedStatus);
      };

      const handleSendNotification = () => {
        // Set state to display mail notification
        setShowMailNotification(true);
    };      

}

export default CVstatusDropdown