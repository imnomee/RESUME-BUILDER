import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        thumbnailLink: {
            type: String,
            default: '',
        },
        template: {
            theme: String,
            colorPalette: [String],
        },
        profileInfo: {
            profilePreviewUrl: String,
            fullName: String,
            designation: String,
            summary: String,
        },
        contactInfo: {
            email: String,
            phone: String,
            location: String,
            linkedIn: String,
            github: String,
            website: String,
        },
        workExperience: [
            {
                companyName: String,
                role: String,
                startDate: Date,
                endDate: Date,
                description: String,
            },
        ],
        education: [
            {
                degree: String,
                institutionName: String,
                startDate: Date,
                endDate: Date,
            },
        ],
        skills: [
            {
                skillName: String,
                progressLevel: Number,
            },
        ],
        projects: [
            {
                projectName: String,
                description: String,
                projectLink: String,
                liveDemo: String,
            },
        ],
        certifications: [{ title: String, issuer: String, year: String }],
        languages: [
            {
                name: String,
                progressLevel: Number,
            },
        ],
        interests: [String],
    },
    {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    }
);

export default mongoose.model('Resume', resumeSchema);
