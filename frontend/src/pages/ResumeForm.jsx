import React, { useState } from 'react';

const ResumeForm = ({ userData, setUserData }) => {
    const [currentEducation, setCurrentEducation] = useState({
        degree: '',
        institution: '',
        startDate: '',
        endDate: '',
    });

    const [currentExperience, setCurrentExperience] = useState({
        position: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        skills: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (
            name === 'skills' ||
            name === 'tools' ||
            name === 'languages' ||
            name === 'certifications' ||
            name === 'achievements' ||
            name === 'experiences'
        ) {
            // Handle array inputs (comma-separated)
            setUserData({
                ...userData,
                [name]: value
                    .split(',')
                    .map((item) => item.trim())
                    .filter((item) => item !== ''),
            });
        } else {
            // Handle other inputs (text, etc.)
            setUserData({ ...userData, [name]: value });
        }
    };

    const handleEducationChange = (e) => {
        const { name, value } = e.target;
        setCurrentEducation({ ...currentEducation, [name]: value });
    };
    const handleExperienceChange = (e) => {
        const { name, value } = e.target;
        setCurrentExperience({ ...currentExperience, [name]: value });
    };

    const addExperience = () => {
        if (
            currentExperience.position &&
            currentExperience.company &&
            currentExperience.location &&
            currentExperience.startDate &&
            currentExperience.endDate &&
            currentExperience.skills
        ) {
            const newExperienceEntry = {
                position: currentExperience.position,
                company: currentExperience.company,
                location: currentExperience.location,
                startDate: currentExperience.endDate,
                endDate: currentExperience.endDate,
                skills: currentExperience.skills,
            };
            setUserData({
                ...userData,
                experiences: userData.experiences
                    ? [...userData.experiences, newExperienceEntry]
                    : [newExperienceEntry],
            });
            // Clear the currentEducation state
            setCurrentExperience({
                position: '',
                company: '',
                location: '',
                startDate: '',
                endDate: '',
                skills: [],
            });
        } else {
            alert('Please fill all the fields');
        }
    };
    const addEducation = () => {
        if (
            currentEducation.degree &&
            currentEducation.institution &&
            currentEducation.startDate &&
            currentEducation.endDate
        ) {
            const newEducationEntry = {
                degree: currentEducation.degree,
                institution: currentEducation.institution,
                startDate: currentEducation.startDate,
                endDate: currentEducation.endDate,
            };
            setUserData({
                ...userData,
                education: userData.education
                    ? [...userData.education, newEducationEntry]
                    : [newEducationEntry],
            });
            // Clear the currentEducation state
            setCurrentEducation({
                degree: '',
                institution: '',
                startDate: '',
                endDate: '',
            });
        } else {
            alert('Please fill all the fields');
        }
    };

    return (
        <div className="p-6 shadow-md rounded-md mb-6">
            <h2 className="text-2xl font-bold mb-4 underline text-center">
                Enter Your Details
            </h2>
            <div className="bg-white p-6 shadow-md rounded-md mb-6">
                {/* Basic Information */}
                <h3 className="font-semibold mb-2">Basic Information</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={userData.name || ''}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Title (e.g., Software Engineer, MERN Developer)"
                    value={userData.title || ''}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email || ''}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={userData.phone || ''}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <input
                    type="url"
                    name="website"
                    placeholder="Website (Optional)"
                    value={userData.website || ''}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                />

                {/* Summary */}
                <h3 className="font-semibold mb-2">Summary</h3>
                <textarea
                    name="objective"
                    placeholder="Objective (Summary of your goals and skills)"
                    value={userData.objective || ''}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                />

                {/* Skills & Experience */}
                <h3 className="font-semibold mb-2">Skills & Experience</h3>
                <textarea
                    name="skills"
                    placeholder="Skills (comma separated, e.g., JavaScript, React, Node.js)"
                    value={userData.skills ? userData.skills.join(', ') : ''}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <textarea
                    name="tools"
                    placeholder="Tools (comma separated, e.g., Git, Docker, VS Code)"
                    value={userData.tools ? userData.tools.join(', ') : ''}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <textarea
                    name="languages"
                    placeholder="Speaking Languages (comma separated, e.g., English, Spanish, French)"
                    value={
                        userData.languages ? userData.languages.join(', ') : ''
                    }
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <textarea
                    name="achievements"
                    placeholder="Achievements (comma separated, e.g., Award Winner, Project Lead)"
                    value={
                        userData.achievements
                            ? userData.achievements.join(', ')
                            : ''
                    }
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                />

                {/* Work & Education */}
                <h3 className="font-semibold mb-2">Work & Education</h3>
                <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    value={currentExperience.position}
                    onChange={handleExperienceChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={currentExperience.company}
                    onChange={handleExperienceChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={currentExperience.location}
                    onChange={handleExperienceChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <input
                    type="text"
                    name="startDate"
                    placeholder="Start Date"
                    value={currentExperience.startDate}
                    onChange={handleExperienceChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <input
                    type="text"
                    name="endDate"
                    placeholder="End Date"
                    value={currentExperience.endDate}
                    onChange={handleExperienceChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <textarea
                    name="skills"
                    placeholder="Skills"
                    value={currentExperience.skills
                        ? currentExperience.skills.join(', ')
                        : userData.experiences && userData.experiences.length > 0
                            ? userData.experiences.skills.join(', ')
                            : ''
                    }
                    onChange={handleExperienceChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <button
                    onClick={addExperience}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Experience
                </button>
                {userData.experiences && userData.experiences.length > 0 && (
                    <div>
                        <h4 className="mt-4">Current Experience:</h4>
                        <ul>
                            {userData.experiences.map((exp, index) => (
                                <li key={index}>
                                    {Object.entries(exp).map(([key, value]) => (
                                        <div key={key}>
                                            {key}: {value}
                                        </div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Education */}
                <h3 className="font-semibold mb-2">Education</h3>
                <input
                    type="text"
                    name="degree"
                    placeholder="Degree"
                    value={currentEducation.degree}
                    onChange={handleEducationChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <input
                    type="text"
                    name="institution"
                    placeholder="Institution"
                    value={currentEducation.institution}
                    onChange={handleEducationChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <input
                    type="number"
                    name="startDate"
                    placeholder="Start Year"
                    value={currentEducation.startDate}
                    onChange={handleEducationChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <input
                    type="number"
                    name="endDate"
                    placeholder="End Year (or Present)"
                    value={currentEducation.endDate}
                    onChange={handleEducationChange}
                    className="w-full p-2 border rounded mb-3"
                />
                <button
                    onClick={addEducation}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Education
                </button>
                {userData.education && userData.education.length > 0 && (
                    <div>
                        <h4 className="mt-4">Current Education:</h4>
                        <ul>
                            {userData.education.map((edu, index) => (
                                <li key={index}>
                                    {Object.entries(edu).map(([key, value]) => (
                                        <div key={key}>
                                            {key}: {value}
                                        </div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResumeForm;
