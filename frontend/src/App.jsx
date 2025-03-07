import React, { useState } from 'react';
import { ResumeData } from './assets/assets';
import ResumeForm from './pages/ResumeForm';
import ResumeTemplates from './pages/ResumeTemplates';
import ResumePreview from './pages/ResumePreview';

const App = () => {
    const [userData, setUserData] = useState(ResumeData);
    const [selectedTemplate, setSelectedTemplate] = useState('template1');

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-6">
                Resume Builder
            </h1>
            <div className="flex gap-4 flex-col xl:flex-row">
                <div className="w-full xl:w-1/3">
                    <ResumeForm userData={userData} setUserData={setUserData} />

                    <ResumeTemplates
                        setSelectedTemplate={setSelectedTemplate}
                    />
                </div>

                <div className="w-full xl:w-2/3">
                    <ResumePreview
                        userData={userData}
                        selectedTemplate={selectedTemplate}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
