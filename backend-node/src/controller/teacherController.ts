import { Request, Response } from 'express';
import * as teacherService from '../service/teacherService';
import { Teacher, bodyToTeacher } from '../model/Teacher';
import { ErrorResponse } from '../utils/ErrorResponse';

export async function getTeachers(req: Request, res: Response): Promise<void> {
  try {
    const q: string = req.query.q;
    const teachers: Teacher[] = await teacherService.getTeachers(q);
    res.json(teachers);
  } catch (e) {
    res.status(400);
    res.json(new ErrorResponse('Database error.', e));
  }
}

export async function getTeacher(req: Request, res: Response): Promise<void> {
  const teacherId: number = (typeof req.params.id === 'number' ? parseInt(req.params.id) : null);
  if (teacherId) {
    try {
      const teacher: Teacher = await teacherService.getTeacher(teacherId);
      if (teacher) {
        res.json(teacher);
      } else {
        res.status(404);
        res.json(new ErrorResponse('No teacher was found with id=' + teacherId + '.'));
      }
    } catch (e) {
      res.status(400);
      res.json(new ErrorResponse('Database error.', e));
    }
  } else {
    res.status(400);
    res.json(new ErrorResponse('A numeric id must be provided as a query parameter.'));
  }
}

export async function addTeacher(req: Request, res: Response): Promise<void> {
  const teacher: Teacher = bodyToTeacher(req.body);
  if (teacher) {
    try {
      await teacherService.addTeacher(teacher);
      res.status(204);
      res.end();
    } catch (e) {
      res.status(400);
      res.json(new ErrorResponse('Database error.', e));
    }
  } else {
    res.json(new ErrorResponse('A valid teacher must be provided in the request body.'))
  }
}

export async function removeTeacher(req: Request, res: Response): Promise<void> {
  const teacherId: number = req.params.id ? parseInt(req.params.id) : null;
  if (teacherId) {
    try {
      await teacherService.removeTeacher(teacherId);
      res.status(204);
      res.end();
    } catch (e) {
      res.status(400);
      res.json(new ErrorResponse('Database error.', e));
    }
  } else {
    res.status(400);
    res.json(new ErrorResponse('A numeric id must be provided as a query parameter.'));
  }
}