import { database } from '../utils/Database';
import { Course, CourseRow } from '../model/Course';

export async function getCourses(): Promise<CourseRow[]> {
  return database.query(`
    SELECT c.id, c.title, c.level, c.hours, c.active, t.id as teacher_id, t.name as teacher_name
    FROM courses AS c LEFT JOIN teachers AS t ON t.id=c.teacher_id
    ORDER BY c.title, t.name, c.active, c.level, c.hours, c.id, t.id
  `);
}

export async function getCoursesById(id: number): Promise<CourseRow[]> {
  return database.query(`
    SELECT c.id, c.title, c.level, c.hours, c.active, t.id as teacher_id, t.name as teacher_name 
    FROM courses AS c LEFT JOIN teachers AS t ON t.id=c.teacher_id
    WHERE c.id=${id}
    ORDER BY c.title, t.name, c.active, c.level, c.hours, c.id, t.id
  `);
}

export async function addCourse(course: Course): Promise<void> {
  return database.query(`
    INSERT INTO courses (title, level, hours, active, teacher_id)
    VALUES ("${course.title}", "${course.level}", ${course.hours}, ${course.active}, ${course.teacher.id})
  `);
}

export async function setCoursesActiveById(id: number, active: boolean): Promise<void> {
  return database.query(`
    UPDATE courses
    SET active=${active}
    WHERE id=${id}
  `);
}

export async function removeCoursesById(id: number): Promise<void> {
  return database.query(`
    DELETE FROM courses
    WHERE id=${id}
  `);
}