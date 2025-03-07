import React from 'react';

const ResumeTemplates = ({ setSelectedTemplate }) => {
    return (
        <div className=" p-6 shadow-md rounded-md mb-6">
            <h2 className="text-xl font-semibold mb-4">
                Choose Resume Template
            </h2>

            <div className="flex gap-4 bg-white p-6 shadow-md rounded-md mb-6">
                <button
                    className="p-2 border rounded"
                    onClick={() => setSelectedTemplate('template1')}>
                    Template 1
                </button>

                <button
                    className="p-2 border rounded"
                    onClick={() => setSelectedTemplate('template2')}>
                    Template 2
                </button>
            </div>
        </div>
    );
};

export default ResumeTemplates;
