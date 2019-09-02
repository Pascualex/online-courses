import * as teacherMapper from '../mapper/teacherMapper';
import { Teacher, TeacherRow, rowToTeacher } from '../model/Teacher';

export async function getTeachers(): Promise<Teacher[]> {
  const rows: TeacherRow[] = await teacherMapper.getTeachers();
  return rows.map((teacher) => rowToTeacher(teacher));
} 

export async function getTeacher(id: number): Promise<Teacher> {
  const rows: TeacherRow[] = await teacherMapper.getTeachersById(id);
  if (rows.length > 0) {
    return rowToTeacher(rows[0]);
  } else {
    return null;
  }
}

export async function addTeacher(teacher: Teacher): Promise<void> {
  return teacherMapper.addTeacher(teacher);
}

export async function removeTeacher(id: number): Promise<void> {
  return teacherMapper.removeTeachersById(id);
}