import express from 'express';

const router = express.Router();

import EducationController from '../controllers/educationController';

EducationController

router.get('/', EducationController.getAllEducation);
router.put('/:id', EducationController.updateEducation);
router.post('/', EducationController.createEducation);
router.delete('/:id', EducationController.deleteEducation);

export default router;