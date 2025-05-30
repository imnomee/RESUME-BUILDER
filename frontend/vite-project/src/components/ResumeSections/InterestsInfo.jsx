import React from 'react';

const InterestsInfo = ({ interests, accentColor, bgColor }) => {
    console.log(interests);
    return (
        <div>
            {interests.map((interest, index) => {
                <div className="" key={index}>
                    {interest[index]}
                </div>;
            })}
        </div>
    );
};

export default InterestsInfo;
