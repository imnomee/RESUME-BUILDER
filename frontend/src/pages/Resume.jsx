import React from 'react';
import {
    Achievements,
    Certifications,
    Education,
    Experiences,
    Languages,
    Skills,
    Tools,
} from '../assets/assets';

import { LuMessageCircleMore } from 'react-icons/lu';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

const Resume = () => {
    return (
        <div className="flex container max-w-[80vw] py-20 mx-auto">
            <div className="left bg-gray-100 p-16 min-w-1/3">
                <div className="mb-8">
                    <h1 className="font-serif text-6xl font-semibold mb-4 max-w-1/2 tracking-wide">
                        Noman Rafiq
                    </h1>
                    <p className="text-2xl">UI UX Designer</p>
                </div>
                <div className="flex flex-col gap-3 mb-8">
                    <div className="flex items-center gap-2">
                        <LuMessageCircleMore className="text-2xl" />
                        <p className="text-lg">heyimnomee@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-2xl" />
                        <p className="text-lg">+92 335 2765432</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaGithub className="text-2xl" />

                        <p className="text-lg">
                            https://www.github.com/imnomee
                        </p>
                    </div>
                </div>
                <div className="mb-8">
                    <h2
                        className="text-purple-600 text-2xl font-serif font-semibold mb-3
                    ">
                        Skills
                    </h2>
                    <ul className="list-disc flex flex-wrap gap-4 pl-5">
                        {Skills.map((skill) => (
                            <li className="mr-4">{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-8">
                    <h2
                        className="text-purple-600 text-2xl font-serif font-semibold mb-3
                    ">
                        Tools
                    </h2>
                    <ul className="list-disc flex flex-wrap gap-4 pl-5">
                        {Tools.map((tool) => (
                            <li className="mr-4">{tool}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-8">
                    <h2
                        className="text-purple-600 text-2xl font-serif font-semibold mb-3
                    ">
                        Languages
                    </h2>
                    <ul className="list-disc flex flex-wrap gap-4 pl-5">
                        {Languages.map((lan) => (
                            <li className="mr-4">{lan}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-8">
                    <h2
                        className="text-purple-600 text-2xl font-serif font-semibold mb-3
                    ">
                        Certifications
                    </h2>
                    <ul className="list-disc pl-5">
                        {Certifications.map((cert) => (
                            <li className="mb-4">{cert}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-8">
                    <h2
                        className="text-purple-600 text-2xl font-serif font-semibold mb-3
                    ">
                        Achievements
                    </h2>
                    <ul className="list-disc pl-5">
                        {Achievements.map((ach) => (
                            <li className="mb-4">{ach}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="right p-16">
                <div>
                    <h2
                        className="text-purple-600 text-2xl font-serif font-semibold mb-3
                    ">
                        Objective
                    </h2>
                    <p>
                        Self-taught UI/UX Designer with over 5 years of
                        specialized experience in mobile app and e-commerce
                        designs. Leveraging a background in marketing, I
                        seamlessly integrate consumer insights into intuitive
                        and functional designs.
                    </p>
                </div>
                <div className="experiences">
                    <h2 className="text-purple-600 text-2xl font-serif font-semibold mb-3
                    ">Work Experiences</h2>
                    <ul>
                        {Experiences.map((exp) => (
                            <div>
                                <div>
                                    <h3>{exp.position}</h3>
                                    <h4>{exp.company}</h4>
                                </div>
                                <div>
                                    <p>{exp.location}</p>
                                    <p>
                                        {exp.startDate} - {exp.endDate}
                                    </p>
                                </div>
                                <div>
                                    <ul>
                                        {exp.skills.map((skill) => (
                                            <li>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
                <div>
                    {Education.map((edu) => (
                        <div>
                            <h3>{edu.institution}</h3>
                            <h4>{edu.degree}</h4>
                            <p>
                                <span>{edu.startDate}</span> -{' '}
                                <span>{edu.endDate}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resume;
