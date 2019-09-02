import { Request, Response } from 'express';
import * as courseService from '../service/courseService';
import { Course, bodyToCourse } from '../model/Course';
import { CourseLevel, parseCourseLevel } from '../model/CourseLevel';
import { ErrorResponse } from '../utils/ErrorResponse';
import { parseBoolean } from '../utils/parsers';

export async function getCourses(req: Request, res: Response): Promise<void> {
  try {
    const active: boolean = parseBoolean(req.query.active);
    const q: string = req.query.q;
    const level: CourseLevel = parseCourseLevel(req.query.level);
    const teacherId: number = parseInt(req.query.teacher);
    const courses: Course[] = await courseService.getCourses(active, q, level, teacherId);
    res.json(courses);
  } catch (e) {
    res.status(400);
    res.json(new ErrorResponse('Database error.', e));
  }
}

export async function getCourse(req: Request, res: Response): Promise<void> {
  const courseId: number = (typeof req.params.id === 'string' ? parseInt(req.params.id) : null);
  if (courseId) {
    try {
      const course: Course = await courseService.getCourse(courseId);
      if (course) {
        res.json(course);
      } else {
        res.status(404);
        res.json(new ErrorResponse('No course was found with id=' + courseId + '.'));
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

export async function addCourse(req: Request, res: Response): Promise<void> {
  const course: Course = bodyToCourse(req.body);
  if (course) {
    try {
      await courseService.addCourse(course);
      res.status(204);
      res.end();
    } catch (e) {
      res.status(400);
      res.json(new ErrorResponse('Database error.', e));
    }
  } else {
    res.json(new ErrorResponse('A valid course must be provided in the request body.'))
  }
}

export async function setCourseActive(req: Request, res: Response): Promise<void> {
  const courseId: number = req.params.id ? parseInt(req.params.id) : null;
  if (courseId && typeof req.body.active === 'boolean') {
    try {
      await courseService.setCourseActive(courseId, req.body.active);
      const course: Course = await courseService.getCourse(courseId);
      res.status(200);
      res.json(course);
    } catch (e) {
      res.status(400);
      res.json(new ErrorResponse('Database error.', e));
    }
  } else {
    res.status(400);
    if (!courseId) {
      res.json(new ErrorResponse('A numeric id must be provided as a query parameter.'));
    } else {
      res.json(new ErrorResponse('An active state must be provided in the request body.'));
    }
  }
}

export async function removeCourse(req: Request, res: Response): Promise<void> {
  const courseId: number = req.params.id ? parseInt(req.params.id) : null;
  if (courseId) {
    try {
      await courseService.removeCourse(courseId);
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