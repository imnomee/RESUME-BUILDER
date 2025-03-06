import React from 'react';

const ResumeSection = ({ title, items }) => {
    return (
        <div className="mb-8">
            <h2 className="text-xl font-serif font-semibold mb-3">{title}</h2>
            <ul className="list-disc pl-5 text-base flex flex-wrap gap-3">
                {items.map((item, index) => (
                    <li key={index} className="mr-4">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResumeSection;
