import { CourseLevel, parseCourseLevel } from './CourseLevel';
import { Teacher, bodyToTeacher } from './Teacher';

export class Course {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly level: CourseLevel,
    public readonly hours: number,
    public readonly active: boolean,
    public readonly teacher: Teacher,
  ) { }
}

export interface CourseRow {
  id: number,
  title: string,
  level: string,
  hours: number,
  active: number,
  teacher_id: number,
  teacher_name: string
}

export function bodyToCourse(body: any): Course {
  if (typeof body.title !== 'string' || body.title.length < 3) return null;
  const level: CourseLevel = parseCourseLevel(body.level);
  if (level === CourseLevel.Unknown) return null;
  if (typeof body.hours !== 'number' || body.hours <= 0) return null;
  if (typeof body.active !== 'boolean') return null;
  const teacher: Teacher = bodyToTeacher(body.teacher);
  if (!teacher) return null;
  if (typeof body.id === 'number' && body.id > 0) {
    return new Course(body.id, body.title, level, body.hours, body.active, teacher);
  } else {
    return new Course(undefined, body.title, level, body.hours, body.active, teacher);
  }
}

export function rowToCourse(row: CourseRow): Course {
  const level: CourseLevel = parseCourseLevel(row.level);
  const active: boolean = row.active !== 0;
  const teacher: Teacher = new Teacher(row.teacher_id, row.teacher_name, undefined);
  return new Course(row.id, row.title, level, row.hours, active, teacher);
}