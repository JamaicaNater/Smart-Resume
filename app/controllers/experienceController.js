const Experience = require('../models/experience');

const ExperienceController = {
    getAllExperience: async (req, res) => {
        try {
            const experince = await Experience.find();
            res.json(experince);
        } catch(error) {
            console.error(error)
            res.status(500).json({ error: 'An error occurred while fetching projects.' });
        }
    },

    createExperience: async (req, res) => {
        try {
            const { companyName, logoLink, position, details, tags, from, to, priority } = req.body
            const experience = new Experience({ companyName, logoLink, position, details, tags, from, to, priority });
            experience.save()
        } catch(error) {
            console.error(error)
            res.status(500).json({ error: 'An error occurred while creating project.' });
        }
    }
};

module.exports = ExperienceController; 