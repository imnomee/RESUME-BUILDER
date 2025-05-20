import fs from 'fs';
import path from 'path';
import Resume from '../models/Resume.Model.js';
import upload from '../middleware/upload.Middleware.js';

export const uploadresumeImages = async (req, res) => {
    try {
        upload.fields([{ name: 'thumbnail' }, { name: 'profileImage' }])(
            req,
            res,
            async (err) => {
                if (err) {
                    return res.status(400).json({ error: err.message });
                }

                const { resumeId } = req.params;
                const resume = await Resume.findById(resumeId);

                if (!resume) {
                    return res.status(404).json({ error: 'Resume not found' });
                }

                const uploadsFolder = path.join(__dirname, '../uploads');
                const baseUrl = `${req.protocol}://${req.get('host')}`;

                const newThumbnail = req.files.thumbnail?.[0];
                const newProfileImage = req.files.profileImage?.[0];

                if (newThumbnail) {
                    const thumbnailPath = path.join(
                        uploadsFolder,
                        newThumbnail.filename
                    );
                    fs.unlink(thumbnailPath, (err) => {
                        if (err) {
                            console.error('Error deleting old thumbnail:', err);
                        }
                    });
                }
                if (profileImg) {
                    resume.profileInfo.profileImg = profileImg;
                }

                await resume.save();

                res.status(200).json({
                    message: 'Images uploaded successfully',
                    resume,
                });
            }
        );
    } catch (error) {
        console.error('Error uploading images:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
