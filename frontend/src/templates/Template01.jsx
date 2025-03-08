import React from 'react';
import { LuMessageCircleMore } from 'react-icons/lu';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import ResumeSection from '../components/ResumeSection.jsx';

const Template1 = ({ userData }) => {
    return (
        <div className="w-full overflow-x-auto">
            <div
                className="flex container w-[794px] mx-auto max-w-full"
                id="resume">
                <section className="left w-2/5">
                    <div className="mb-2">
                        <h1 className="font-serif text-5xl font-semibold mb-3 max-w-1/2 tracking-wide">
                            {userData.name}
                        </h1>
                        <p className="text-lg underline underline-offset-6 ">
                            {userData.title}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="flex items-center gap-2">
                            <LuMessageCircleMore className="text-lg" />
                            <p className="text-sm">{userData.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="text-lg" />
                            <p className="text-sm">{userData.phone}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaGithub className="text-lg" />

                            <a
                                href="https://www.github.com/imnomee"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm">
                                {userData.github}
                            </a>
                        </div>
                    </div>
                    <div className="mb-2 w-[90%]">
                        <h2
                            className=" text-lg font-serif font-semibold mb-1
                    ">
                            Objective
                        </h2>
                        <p className="text-sm">{userData.objective}</p>
                    </div>
                    <ResumeSection title="Skills" items={userData.skills} />
                    <ResumeSection title="Tools" items={userData.tools} />
                    <ResumeSection
                        title="Languages"
                        items={userData.languages}
                    />
                    <ResumeSection
                        title="Certifications"
                        items={userData.certifications}
                    />
                    <ResumeSection
                        title="Achievements"
                        items={userData.achievements}
                    />
                </section>
                <section className="right px-8 border-l w-3/5">
                    <div className="experiences mb-4 max-w-full">
                        <h2
                            className=" text-lg font-serif font-semibold mb-1
                    ">
                            Work Experiences
                        </h2>
                        <ul className="text-sm">
                            {userData.experiences.map((exp, index) => (
                                <article className="mb-4" key={index}>
                                    <div className="flex gap-2">
                                        <h3 className="text-base font-semibold">
                                            {exp.position}
                                        </h3>
                                        <h4 className="text-base pl-2 border-l  ">
                                            {exp.company}
                                        </h4>
                                    </div>
                                    <div className="flex flex-row-reverse gap-2 pb-2 justify-end">
                                        <p className="text-xs">
                                            {exp.location}
                                        </p>
                                        <div className="rounded-full w-3 h-3 "></div>
                                        <p className="font-semibold">
                                            {exp.startDate} - {exp.endDate}
                                        </p>
                                    </div>
                                    <div>
                                        <ul className="list-disc pl-4">
                                            {exp.skills.map((skill, index) => (
                                                <li
                                                    className="pl-1 mb-2"
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

                    <div className="mb-4 max-w-[85%]">
                        <h2
                            className=" text-lg font-serif font-semibold mb-1
                    ">
                            Education
                        </h2>
                        {userData.education.map((edu, index) => (
                            <article
                                className="flex flex-col text-base mb-4"
                                key={index}>
                                <h3 className="font-semibold">
                                    {edu.institution}
                                </h3>
                                <div className="flex flex-row items-center gap-4">
                                    <p className="text-sm">
                                        <span>{edu.startDate}</span> -{' '}
                                        <span>{edu.endDate}</span>
                                    </p>
                                    <h4 className="font-light text-base">
                                        {edu.degree}
                                    </h4>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Template1;
