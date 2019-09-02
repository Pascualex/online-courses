import { Router } from 'express';
import * as courseController from '../controller/courseController';

export const courseRoutes = Router();

courseRoutes.get('/', courseController.getCourses);
courseRoutes.get('/:id', courseController.getCourse);
courseRoutes.post('/', courseController.addCourse);
courseRoutes.put('/:id/active', courseController.setCourseActive);
courseRoutes.delete('/:id', courseController.removeCourse);