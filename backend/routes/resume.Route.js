import express from 'express';
import {
    createResume,
    getUserResumes,
    getResumeById,
    updateResume,
    deleteResume,
} from '../controllers/resume.Controller.js';

import { protect } from '../middleware/auth.Middleware.js';
import { uploadresumeImages } from '../controllers/uploadImages.js';
const router = express.Router();

router.post('/', protect, createResume);
router.get('/', protect, getUserResumes);
router.get('/:resumeId', protect, getResumeById);
router.put('/:resumeId', protect, updateResume);
router.put('/:id/upload-images', protect, uploadresumeImages);
router.delete('/:resumeId', protect, deleteResume);

export default router;
