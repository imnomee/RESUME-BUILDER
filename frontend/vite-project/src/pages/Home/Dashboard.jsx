import React, { useEffect, useState } from 'react';
import { API_PATHS } from '../../utils/apiPaths';
import axiosInstance from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layouts/DashboardLayout';

const Dashboard = () => {
    const navigate = useNavigate();
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [allResumes, setAllResumes] = useState(null);

    const fetchAllResumes = async () => {
        try {
            const response = await axiosInstance.get(API_PATHS.RESUME.GET_ALL);
            setAllResumes(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchAllResumes();
    }, []);

    return <DashboardLayout>Dashboard</DashboardLayout>;
};

export default Dashboard;
