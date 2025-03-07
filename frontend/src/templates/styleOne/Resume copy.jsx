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
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 }, // Increase quality
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
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
                className="flex container w-[794px] mx-auto gap-8 border rounded-2xl"
                id="resume"
                ref={resumeRef}>
                <section className="left py-16 px-8 w-1/3">
                    <div className="mb-12">
                        <h1 className="font-serif text-6xl font-semibold mb-4 max-w-1/2 tracking-wide">
                            {ResumeData.name}
                        </h1>
                        <p className="text-2xl underline underline-offset-6 ">
                            {ResumeData.title}
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 mb-12">
                        <div className="flex items-center gap-4">
                            <LuMessageCircleMore className="text-2xl " />
                            <p className="text-lg">{ResumeData.email}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-2xl  " />
                            <p className="text-lg">{ResumeData.phone}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaGithub className="text-2xl  " />

                            <a
                                href="https://www.github.com/imnomee"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg">
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
                <section className="right py-16 px-8 border-l w-2/3">
                    <div className="mb-8 max-w-[85%]">
                        <h2
                            className=" text-2xl font-serif font-semibold mb-3
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
                            className=" text-2xl font-serif font-semibold mb-3
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
                                        <h4 className="text-xl pl-4  border-l-2  ">
                                            {exp.company}
                                        </h4>
                                    </div>
                                    <div className="flex gap-4 pb-4 items-center ">
                                        <p>{exp.location}</p>
                                        <div className="rounded-full w-3 h-3 "></div>
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
                            className=" text-2xl font-serif font-semibold mb-3
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
                                <p className="">
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
