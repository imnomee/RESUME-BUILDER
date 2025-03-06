import React from 'react';

const ResumeSection = ({ title, items }) => {
    return (
        <div className="mb-2">
            <h2 className="text-lg font-serif font-semibold mb-1">{title}</h2>
            <ul className="list-disc pl-4 text-sm flex flex-wrap gap-2">
                {items.map((item, index) => (
                    <li key={index} className="mr-4 leading-tight">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResumeSection;
