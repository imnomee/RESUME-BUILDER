import React, { useRef } from 'react';
import {
    Achievements,
    Certifications,
    Education,
    Experiences,
    Languages,
    Skills,
    Tools,
    ResumeData,
} from '../../assets/assets';

import { LuMessageCircleMore } from 'react-icons/lu';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import ResumeSection from '../../components/ResumeSection';
import html2pdf from 'html2pdf.js';

const Resume = () => {
    const resumeRef = useRef(null);
    const options = {
        margin: [10, 10, 10, 10], // Top, Right, Bottom, Left
        html2canvas: { scale: 2 }, // Increase quality
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    };

    const handleDownloadPDF = () => {
        html2pdf()
            .from(resumeRef.current)
            .set(options)
            .save(`${ResumeData.name}-Resume.pdf`)
            .then(() => console.log('✅ PDF Downloaded!'))
            .catch((err) => console.error('❌ Error generating PDF:', err));
    };

    return (
        <div>
            <button
                className="bg-purple-500 text-white px-6 py-2 rounded-md mb-4 hover:bg-purple-700 transition"
                onClick={handleDownloadPDF}>
                Download PDF
            </button>
            <div
                className="flex container w-[794px] mx-auto"
                id="resume"
                ref={resumeRef}>
                <section className="left w-2/5">
                    <div className="mb-2">
                        <h1 className="font-serif text-5xl font-semibold mb-3 max-w-1/2 tracking-wide">
                            {ResumeData.name}
                        </h1>
                        <p className="text-lg underline underline-offset-6 ">
                            {ResumeData.title}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="flex items-center gap-2">
                            <LuMessageCircleMore className="text-lg" />
                            <p className="text-sm">{ResumeData.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="text-lg" />
                            <p className="text-sm">{ResumeData.phone}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaGithub className="text-lg" />

                            <a
                                href="https://www.github.com/imnomee"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm">
                                {ResumeData.github}
                            </a>
                        </div>
                    </div>
                    <div className="mb-2 w-[90%]">
                        <h2
                            className=" text-lg font-serif font-semibold mb-1
                    ">
                            Objective
                        </h2>
                        <p className="text-sm">{ResumeData.objective}</p>
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
                <section className="right px-8 border-l w-3/5">
                    <div className="experiences mb-4 max-w-[90%]">
                        <h2
                            className=" text-lg font-serif font-semibold mb-1
                    ">
                            Work Experiences
                        </h2>
                        <ul className="text-sm">
                            {Experiences.map((exp, index) => (
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
                    {/* <div className="page-break"></div> */}
                    <div className="mb-4 max-w-[85%]">
                        <h2
                            className=" text-lg font-serif font-semibold mb-1
                    ">
                            Education
                        </h2>
                        {Education.map((edu, index) => (
                            <article
                                className="flex flex-col text-base mb-4"
                                key={index}>
                                <h3 className="font-semibold">
                                    {edu.institution}
                                </h3>
                                <div className="flex flex-row-reverse items-center justify-between">
                                    <h4 className="font-light">{edu.degree}</h4>
                                    <p className="text-sm">
                                        <span>{edu.startDate}</span> -{' '}
                                        <span>{edu.endDate}</span>
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Resume;
