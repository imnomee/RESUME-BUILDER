import React, { useEffect, useState } from 'react';
import { API_PATHS } from '../../utils/apiPaths';
import axiosInstance from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { LuCirclePlus } from 'react-icons/lu';
import ResumeSummaryCard from '../../components/Cards/ResumeSummaryCard';
import moment from 'moment';
import CreateResumeForm from '../Home/CreateResumeForm';
import Modal from '../../components/Modal';

const Dashboard = () => {
    const navigate = useNavigate();
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [allResumes, setAllResumes] = useState(null);

    const fetchAllResumes = async () => {
        try {
            const response = await axiosInstance.get(API_PATHS.RESUME.GET_ALL);
            console.log(response.data);
            setAllResumes(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchAllResumes();
    }, []);

    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-7 pt-1 pb-6 px-4 md:px-0">
                <div
                    onClick={() => setOpenCreateModal(true)}
                    className="h-[300px] flex flex-col gap-5 items-center justify-center bg-white rounded-lg border border-purple-100 hover:border-purple-300 hover:bg-purple-50/5 cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center bg-purple-200/60 rounded-2xl">
                        <LuCirclePlus className="text-xl text-purple-500" />
                    </div>
                    <h3 className="font-medium text-gray-800">
                        Add New Resume
                    </h3>
                </div>
                {allResumes?.map((resume) => {
                    return (
                        <ResumeSummaryCard
                            key={resume._id}
                            imgUrl={resume.thumbnailLink || null}
                            title={resume.title}
                            lastUpdated={
                                resume?.updatedAt
                                    ? moment(resume.updatedAt).format(
                                          'Do MMM YYYY'
                                      )
                                    : ''
                            }
                            onSelect={() => navigate(`/resume/${resume?._id}`)}
                        />
                    );
                })}
            </div>
            <Modal
                isOpen={openCreateModal}
                onClose={() => {
                    setOpenCreateModal(false);
                }}
                hideHeader>
                <div className="">
                    <CreateResumeForm />
                </div>
            </Modal>
        </DashboardLayout>
    );
};

export default Dashboard;
