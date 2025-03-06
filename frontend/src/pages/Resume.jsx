import React from 'react';
import {
    Achievements,
    Certifications,
    Education,
    Experiences,
    Languages,
    Skills,
    Tools,
    ResumeData,
} from '../assets/assets';

import { LuMessageCircleMore } from 'react-icons/lu';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import ResumeSection from '../components/ResumeSection';

const Resume = () => {
    return (
        <div>
            <button className="bg-purple-500 text-white px-6 py-2 rounded-md mb-4 hover:bg-purple-700 transition">
                Download PDF
            </button>
            <div
                className="flex container max-w-[75vw] py-20 mx-12"
                id="resume">
                <section className="left bg-gray-100 p-16 border-l rounded-l-2xl border-y border-gray-300 max-w-[33%]">
                    <div className="mb-12">
                        <h1 className="font-serif text-6xl font-semibold mb-4 max-w-1/2 tracking-wide">
                            {ResumeData.name}
                        </h1>
                        <p className="text-2xl underline underline-offset-6 text-gray-600">
                            {ResumeData.title}
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 mb-12">
                        <div className="flex items-center gap-4">
                            <LuMessageCircleMore className="text-2xl text-gray-600" />
                            <p className="text-lg">{ResumeData.email}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-2xl  text-gray-600" />
                            <p className="text-lg">{ResumeData.phone}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaGithub className="text-2xl  text-gray-600" />

                            <a
                                href="https://www.github.com/imnomee"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg text-blue-700">
                                {ResumeData.github}
                            </a>
                        </div>
                    </div>
                    <ResumeSection title="Skills" items={Skills} />
                    <ResumeSection title="Tools" items={Tools} />
                    <ResumeSection title="Languages" items={Languages} />
                    <ResumeSection
                        title="Certifications"
                        items={Certifications}
                    />
                    <ResumeSection title="Achievements" items={Achievements} />
                </section>
                <section className="right p-16 border-r rounded-r-2xl border-y border-gray-300 max-w-[60%]">
                    <div className="mb-8 max-w-[85%]">
                        <h2
                            className="text-purple-500 text-2xl font-serif font-semibold mb-3
                    ">
                            Objective
                        </h2>
                        <p className="text-lg -tracking-normal">
                            Self-taught UI/UX Designer with over 5 years of
                            specialized experience in mobile app and e-commerce
                            designs. Leveraging a background in marketing, I
                            seamlessly integrate consumer insights into
                            intuitive and functional designs.
                        </p>
                    </div>
                    <div className="experiences mb-8 max-w-[85%]">
                        <h2
                            className="text-purple-500 text-2xl font-serif font-semibold mb-3
                    ">
                            Work Experiences
                        </h2>
                        <ul className="text-lg">
                            {Experiences.map((exp, index) => (
                                <article className="mb-10" key={index}>
                                    <div className="flex gap-4 pb-3">
                                        <h3 className="text-xl font-semibold">
                                            {exp.position}
                                        </h3>
                                        <h4 className="text-xl pl-4  border-l-2 border-gray-400 text-gray-600">
                                            {exp.company}
                                        </h4>
                                    </div>
                                    <div className="flex gap-4 pb-4 items-center text-gray-600">
                                        <p>{exp.location}</p>
                                        <div className="rounded-full w-3 h-3 bg-gray-400"></div>
                                        <p>
                                            {exp.startDate} - {exp.endDate}
                                        </p>
                                    </div>
                                    <div>
                                        <ul className="list-disc pl-5">
                                            {exp.skills.map((skill, index) => (
                                                <li
                                                    className="pl-2 mb-2"
                                                    key={index}>
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-8 max-w-[85%]">
                        <h2
                            className="text-purple-500 text-2xl font-serif font-semibold mb-3
                    ">
                            Education
                        </h2>
                        {Education.map((edu, index) => (
                            <article
                                className="flex flex-col gap-2 text-xl"
                                key={index}>
                                <h3 className="font-semibold">
                                    {edu.institution}
                                </h3>
                                <h4 className="font-light">{edu.degree}</h4>
                                <p className="text-gray-600">
                                    <span>{edu.startDate}</span> -{' '}
                                    <span>{edu.endDate}</span>
                                </p>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Resume;
