import React from 'react';

const ResumeSummaryCard = ({ resume }) => {
    return (
        <div>
            <h3>Name: {resume?.profileInfo?.fullName}</h3>
            <p>Email: {resume?.contactInfo?.email}</p>
            <p>Phone: {resume?.contactInfo?.phone}</p>
        </div>
    );
};

export default ResumeSummaryCard;
