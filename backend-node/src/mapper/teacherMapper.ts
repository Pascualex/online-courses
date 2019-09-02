import { database } from '../utils/Database';
import { Teacher, TeacherRow } from '../model/Teacher';

export async function getTeachers(): Promise<TeacherRow[]> {
  return database.query(`
    SELECT t.id, t.name, COUNT(c.id) AS course_count
    FROM teachers as t LEFT JOIN courses AS c ON t.id=c.teacher_id
    GROUP BY t.id
    ORDER BY t.name, t.id
  `);
}

export async function getTeachersById(id: number): Promise<TeacherRow[]> {
  return database.query(`
    SELECT t.id, t.name, COUNT(c.id) AS course_count
    FROM teachers as t LEFT JOIN courses AS c ON t.id=c.teacher_id
    WHERE t.id=${id}
    GROUP BY t.id
    ORDER BY t.name, t.id
  `);
}

export async function addTeacher(teacher: Teacher): Promise<void> {
  return await database.query(`
    INSERT INTO teachers (name)
    VALUES ("${teacher.name}")
  `);
}

export async function removeTeachersById(id: number): Promise<void> {
  return database.query(`
    DELETE FROM teachers
    WHERE id=${id}
  `);
}