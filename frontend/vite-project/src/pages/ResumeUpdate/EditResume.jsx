import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useReactToPrint } from 'react-to-print';
import {
    LuArrowLeft,
    LuCircleAlert,
    LuDownload,
    LuPalette,
    LuSave,
    LuTrash2,
} from 'react-icons/lu';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import TitleInput from '../../components/inputs/TitleInput';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import StepProgress from '../../components/StepProgress';
import ProfileInfoForm from './ProfileInfoForm';
import ContactInfoForm from './ContactInfoForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationDetailsForm from './EducationDetailsForm';
import SkillsInfoForm from './SkillsInfoForm';
import ProjectInfoForm from './ProjectInfoForm';
import CertificationInfoForm from './CertificationInfoForm';
import AdditionalInfoForm from './AdditionalInfoForm';

const EditResume = () => {
    const { resumeId } = useParams();
    const resumeRef = useRef(null);
    const resumeDownloadRef = useRef(null);
    const [baseWidth, setBaseWidth] = useState(800);
    const [openThemeSelector, setOpenThemeSelector] = useState(false);
    const [openPreviewModal, setOpenPreviewModaal] = useState(false);
    const [currentPage, setCurrentPage] = useState('additionalInfo');
    const [progress, setProgress] = useState(0);
    const [resumeData, setResumeData] = useState({
        title: '',
        thumbnailLink: '',
        profileInfo: {
            profileImg: null,
            profilePreviewUrl: '',
            fullName: '',
            designation: '',
            summary: '',
        },
        template: {
            theme: '',
            colorPalette: '',
        },
        contactInfo: {
            email: '',
            phone: '',
            location: '',
            linkedIn: '',
            github: '',
            website: '',
        },
        workExperience: [
            {
                company: '',
                role: '',
                startDate: '',
                endDate: '',
                description: '',
            },
        ],
        education: [
            {
                degree: '',
                institution: '',
                startDate: '',
                endDate: '',
            },
        ],
        skills: [
            {
                name: '',
                progress: 0,
            },
        ],
        projects: [
            {
                title: '',
                description: '',
                github: '',
                liveDemo: '',
            },
        ],
        certifications: [
            {
                title: '',
                issuer: '',
                year: '',
            },
        ],
        languages: [
            {
                name: '',
                pgoress: 0,
            },
        ],
        interests: [''],
    });
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validateAndNext = (e) => {};
    const goToNextStep = () => {};
    const goToPrevStep = () => {};
    const renderForm = () => {
        switch (currentPage) {
            case 'profile-info':
                return (
                    <ProfileInfoForm
                        profileData={resumeData?.profileInfo}
                        updateSection={(key, value) =>
                            updateSection('profileInfo', key, value)
                        }
                        onNext={validateAndNext}
                    />
                );
            case 'contact-info':
                return (
                    <ContactInfoForm
                        contactInfo={resumeData?.contactInfo}
                        updateSection={(key, value) =>
                            updateSection('contactInfo', key, value)
                        }
                    />
                );
            case 'work-experience':
                return (
                    <WorkExperienceForm
                        workExperience={resumeData?.workExperience}
                        updateArrayItem={(index, key, value) => {
                            updateArrayItem(
                                'workExperience',
                                index,
                                key,
                                value
                            );
                            addArrayItem((newItem) =>
                                addArrayItem('workExperience', newItem)
                            );
                        }}
                        removeArrayItem={(index) =>
                            removeArrayItem('workExperience', index)
                        }
                    />
                );
            case 'educational-info':
                return (
                    <EducationDetailsForm
                        educationInfo={resumeData?.education}
                        updateArrayItem={(index, key, value) =>
                            updateArrayItem('education', index, key, value)
                        }
                        addArrayItem={(newItem) =>
                            addArrayItem('education', newItem)
                        }
                        removeArrayItem={(index) =>
                            removeArrayItem('education', index)
                        }
                    />
                );
            case 'skills-info':
                return (
                    <SkillsInfoForm
                        skillsInfo={resumeData?.skills}
                        updateArrayItem={(index, key, value) =>
                            updateArrayItem('skills', index, key, value)
                        }
                        addArrayItem={(newItem) =>
                            addArrayItem('skills', newItem)
                        }
                        removeArrayItem={(index) =>
                            removeArrayItem('skills', index)
                        }
                    />
                );
            case 'projects':
                return (
                    <ProjectInfoForm
                        projectInfo={resumeData?.projects}
                        updateArrayItem={(index, key, value) =>
                            updateArrayItem('projects', index, key, value)
                        }
                        addArrayItem={(newItem) =>
                            addArrayItem('projects', newItem)
                        }
                        removeArrayItem={(index) =>
                            removeArrayItem('projects', index)
                        }
                    />
                );
            case 'certification':
                return (
                    <CertificationInfoForm
                        certificationInfo={resumeData?.certifications}
                        updateArrayItem={(index, key, value) =>
                            updateArrayItem('certifications', index, key, value)
                        }
                        addArrayItem={(newItem) =>
                            addArrayItem('certifications', newItem)
                        }
                        removeArrayItem={(index) =>
                            removeArrayItem('certifications', index)
                        }
                    />
                );
            case 'additionalInfo':
                return (
                    <AdditionalInfoForm
                        languages={resumeData?.languages}
                        interests={resumeData?.interests}
                        updateArrayItem={(section, index, key, value) =>
                            updateArrayItem(section, index, key, value)
                        }
                        addArrayItem={(section, newItem) =>
                            addArrayItem(section, newItem)
                        }
                        removeArrayItem={(section, index) =>
                            removeArrayItem(section, index)
                        }
                    />
                );
            default:
                return null;
        }
    };
    const updateSection = (section, key, value) => {
        setResumeData((prevState) => ({
            ...prevState,
            [section]: { ...prevState[section], [key]: value },
        }));
    };
    const updateArrayItem = (section, index, key, value) => {
        setResumeData((prevState) => {
            const updatedArray = [...prevState[section]];
            if (key === null) {
                updatedArray[index] = value;
            } else {
                updatedArray[index] = { ...updatedArray[index], [key]: value };
            }
            return {
                ...prevState,
                [section]: updatedArray,
            };
        });
    };
    const addArrayItem = (section, newItem) => {
        setResumeData((prevState) => ({
            ...prevState,
            [section]: [...prevState[section], newItem],
        }));
    };
    const removeArrayItem = (section, index) => {
        setResumeData((prevState) => {
            const updatedArray = [...prevState[section]];
            updatedArray.splice(index, 1);
            return {
                ...prevState,
                [section]: updatedArray,
            };
        });
    };
    const uploadResumeImages = async () => {};
    const updateResumeDetails = async (thumbnailLink, profilePreviewUrl) => {};
    const handleDeleteResume = async () => {};
    const reactToPrintFn = useReactToPrint({
        contentRef: resumeDownloadRef,
        documentTitle: 'Resume',
        onAfterPrint: () => {},
    });

    const fetchResumeDetailsById = async () => {
        try {
            const response = await axiosInstance.get(
                API_PATHS.RESUME.GET_BY_ID(resumeId)
            );
            if (response.data && response.data.profileInfo) {
                const resumeInfo = response.data;
                setResumeData((prevState) => ({
                    ...prevState,
                    title: resumeInfo?.title || 'Untitled',
                    template: resumeInfo?.template || prevState?.template,
                    profileInfo:
                        resumeInfo?.profileInfo || prevState?.profileInfo,
                    contactInfo:
                        resumeInfo?.contactInfo || prevState?.contactInfo,
                    workExperience:
                        resumeInfo?.workExperience || prevState?.workExperience,
                    education: resumeInfo?.education || prevState?.education,
                    skills: resumeInfo?.skills || prevState?.skills,
                    projects: resumeInfo?.projects || prevState?.projects,
                    certifications:
                        resumeInfo?.certifications || prevState?.certifications,
                    languages: resumeInfo?.languages || prevState?.languages,
                    interests: resumeInfo?.interests || prevState?.interests,
                }));
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong');
        }
    };

    const updateBaseWidth = () => {};

    useEffect(() => {
        updateBaseWidth();
        window.addEventListener('resize', updateBaseWidth);
        if (resumeId) {
            fetchResumeDetailsById();
        }
        return () => {
            window.removeEventListener('resize', updateBaseWidth);
        };
    }, []);
    return (
        <DashboardLayout>
            <div className="container mx-auto">
                <div className="flex items-center justify-between gap-5 bg-white rounded-lg border border-purple-100 py-3 px-4 mb-4">
                    <TitleInput
                        title={resumeData.title}
                        setTitle={(value) =>
                            setResumeData({ ...resumeData, title: value })
                        }
                    />
                    <div className="flex items-center gap-4">
                        <button
                            className="btn-small-light"
                            onClick={() => setOpenThemeSelector(true)}>
                            <LuPalette className="text-[16px]" />
                            <span className="hidden md:block">
                                Change Theme
                            </span>
                        </button>
                        <button
                            className="btn-small-light"
                            onClick={handleDeleteResume}>
                            <LuTrash2 className="text-[16px]" />
                            <span className="hidden md:block">
                                Delete Resume
                            </span>
                        </button>
                        <button
                            className="btn-small-light"
                            onClick={() => setOpenPreviewModaal(true)}>
                            <LuDownload className="text-[16px]" />
                            <span className="hidden md:block">
                                Preview & Download Resume
                            </span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-white rounded-lg border border-purple-100 overflow-hidden">
                        <StepProgress progress={0} />
                        {renderForm()}
                        <div className="mx-5">
                            {errorMsg && (
                                <div className="flex items-center gap-2 text-[13px] font-medium text-amber-600 bg-amber-100 py-0.5 my-1 rounded">
                                    <LuCircleAlert className="text-md" />
                                    {errorMsg}
                                </div>
                            )}
                            <div className="flex items-end justify-end gap-3 mt-3 mb-5">
                                <button
                                    className="btn-small-light"
                                    onClick={goToPrevStep}
                                    disabled={isLoading}>
                                    <LuArrowLeft className="text-[16px]" />
                                    Back
                                </button>
                                <button
                                    className="btn-small-light"
                                    onClick={uploadResumeImages}
                                    disabled={isLoading}>
                                    <LuSave className="text-[16px]" />
                                    {isLoading ? 'Updating...' : 'Save & Exit'}
                                </button>
                                <button
                                    className="btn-small-light"
                                    onClick={validateAndNext}
                                    disabled={isLoading}>
                                    {currentPage === 'additionalInfo' && (
                                        <LuDownload className="text-[16px]" />
                                    )}
                                    {currentPage === 'additionalInfo'
                                        ? 'Preview & Download'
                                        : 'Next'}
                                    {currentPage !== 'additionalInfo' && (
                                        <LuArrowLeft className="text-[16px] rotate-180" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div ref={resumeRef} className="h-[100vh]">
                        {/* Resume Template */}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default EditResume;
