import { Router } from 'express';
import * as teacherController from '../controller/teacherController';

export const teacherRoutes = Router();

teacherRoutes.get('/', teacherController.getTeachers);
teacherRoutes.get('/:id', teacherController.getTeacher);
teacherRoutes.post('/', teacherController.addTeacher);
teacherRoutes.delete('/:id', teacherController.removeTeacher);