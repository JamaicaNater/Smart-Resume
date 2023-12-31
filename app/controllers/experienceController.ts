import type { Request, Response } from 'express';
import Experience from '../models/experience';
import { ErrorHandler, mongoQueryFromQueryParams } from './helpers';

const ExperienceController = {
    getAllExperience: async (req: Request, res: Response) => {
        try {
            const params = await mongoQueryFromQueryParams(req.query);
            const experince = await Experience.find(params);
            return res.json(experince);
        } catch(error) {
            console.error(error)
            return res.status(500).json({ error: 'An error occurred while fetching projects.' });
        }
    },
    updateExperience: async (req: Request, res: Response) => {
        const { id } = req.params;
        const newData = req.body;

        try {
          const updatedExperience = await Experience.findOneAndUpdate({ _id: id, userId: req.session.user?.id }, newData, { new: true });
      
          if (updatedExperience) {
            return res.json(updatedExperience);
          } else {
            return res.status(404).json({ message: 'Experience record not found' });
          }
        } catch (error) {
          console.error(error)
          return ErrorHandler.post(res, error, "Experience");
        }
    },
    deleteExperience: async (req: Request, res: Response) => {
      const { id } = req.params;

      try {
        const deletedExperience = await Experience.findOneAndDelete({ _id: id, userId: req.session.user?.id });
    
        if (deletedExperience) {
          return res.json(deletedExperience);
        } else {
          return res.status(404).json({ message: 'Experience record not found' });
        }
      } catch (error) {
        console.error(error)
        return ErrorHandler.post(res, error, "Experience");
      }
    },
    createExperience: async (req: Request, res: Response) => {
        try {
            const { name, logoLink, position, details, tags, startDate, endDate, priority } = req.body
            const experience = new Experience({ name, logoLink, position, details, tags, startDate, endDate, priority, userId: req.session.user?.id });
            const resJson = await experience.save();
            return res.json(resJson);
        } catch(error) {
            console.error(error)
            return ErrorHandler.post(res, error, "Experience");
        }
    }
};

export default ExperienceController;