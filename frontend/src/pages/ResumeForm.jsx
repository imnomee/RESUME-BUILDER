import React from 'react';

const ResumeForm = ({ userData, setUserData }) => {
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    return (
        <div className="p-6 shadow-md rounded-md mb-6">
            <h2 className="text-2xl font-bold mb-4 underline text-center">
                Enter Your Details
            </h2>
            <div className="bg-white p-6 shadow-md rounded-md mb-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={userData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                />

                <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={userData.jobTitle}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                />

                <textarea
                    name="experience"
                    placeholder="Experience"
                    value={userData.experience}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                />

                <textarea
                    name="education"
                    placeholder="Education"
                    value={userData.education}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                />

                <textarea
                    name="skills"
                    placeholder="Skills (comma separated)"
                    value={userData.skills}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                />
            </div>
        </div>
    );
};

export default ResumeForm;
