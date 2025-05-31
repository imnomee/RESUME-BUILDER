import express from 'express';
import {
    createResume,
    getUserResumes,
    getResumeById,
    updateResume,
    deleteResume,
} from '../controllers/resume.Controller.js';

import { protect } from '../middleware/auth.Middleware.js';
import { uploadResumeImages } from '../controllers/uploadimages.js';

const router = express.Router();

router.post('/', protect, createResume);
router.get('/', protect, getUserResumes);
router.get('/:resumeId', protect, getResumeById);
router.put('/:resumeId', protect, updateResume);
router.delete('/:resumeId', protect, deleteResume);
router.put('/:resumeId/upload-images', protect, uploadResumeImages);

export default router;
