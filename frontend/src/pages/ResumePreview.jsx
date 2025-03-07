import React, { useRef } from 'react';
import Template1 from '../templates/Template01';
import PDFDownload from './PDFDownload';

const ResumePreview = ({ userData, selectedTemplate }) => {
    const resumeRef = useRef(null);
    return (
        <div className="p-6 shadow-md rounded-md mb-6">
            <h2 className="text-2xl font-bold mb-4 underline text-center">
                Resume Preview
            </h2>

            <div
                ref={resumeRef}
                className="bg-white p-6 shadow-md rounded-md mb-6 w-[210mm] h-[297mm] transform origin-top-left scale-50 lg:scale-100">
                {selectedTemplate === 'template1' && (
                    <Template1 userData={userData} />
                )}
            </div>

            <PDFDownload resumeRef={resumeRef} />
        </div>
    );
};

export default ResumePreview;
