import type { Request, Response } from 'express';
import Education from '../models/education';
import { ErrorHandler, mongoQueryFromQueryParams } from './helpers';

const EducationController = {
    getAllEducation: async (req: Request, res: Response) => {
        try {
            const params = await mongoQueryFromQueryParams(req.query);
            const education = await Education.find(params);
            return res.json(education);
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'An error occurred while fetching education.' });
        }
    },
    createEducation: async (req: Request, res: Response) => {
        try {
            const { name, degreeType, major, minor, gpa, details, enrollmentDate, graduationDate, city, state, country } = req.body;
            const education = new Education({ name, degreeType, major, minor, gpa, details, enrollmentDate, graduationDate, city, state, country, userId: req.session.user?.id });
            const resJson = await education.save();
            return res.json(resJson);
        } catch(error) {
            console.error(error);
            return ErrorHandler.post(res, error, "Education");
        }
    }
};

export default EducationController;