import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

const EditResume = () => {
    const { resumeId } = useParams();
    const navigate = useNavigate();
    const resumeRef = useRef(null);
    const resumeDownloadRef = useRef(null);
    const [baseWidth, setBaseWidth] = useState(800);
    const [openThemeSelector, setOpenThemeSelector] = useState(false);
    const [openPreviewModal, setOpenPreviewModaal] = useState(false);
    const [currentPage, setCurrentPage] = useState('profile-info');
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
    const renderForm = () => {};

    const updateSection = (section, key, value) => {};
    const updateArrayItem = (section, index, key, value) => {};
    const addArrayItem = (section, newItem) => {};
    const removeArrayItem = (section, index) => {};
    const uploadResumeImages = async () => {};
    const updateResumeDetails = async (thumbnailLink, profilePreviewUrl) => {};
    const handleDeleteResume = async () => {};
    const reactToPrintFn = useReactToPrint({
        contentRef: resumeDownloadRef,
        documentTitle: 'Resume',
        onAfterPrint: () => {},
    });

    const fetchResumeDetailsById = async () => {};

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
                </div>
            </div>
        </DashboardLayout>
    );
};

export default EditResume;
