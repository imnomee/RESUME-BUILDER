import React from 'react';

const ResumeSection = ({ title, items }) => {
    return (
        <div className="mb-12">
            <h2 className="text-purple-500 text-2xl font-serif font-semibold mb-3">
                {title}
            </h2>
            <ul className="list-disc pl-5 text-lg flex flex-wrap gap-3">
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
