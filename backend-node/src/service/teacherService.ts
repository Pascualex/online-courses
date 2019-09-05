import * as teacherRepository from '../repository/teacherRepository';
import { Teacher } from '../model/Teacher';
import * as teacherConditionalFilters from '../utils/teacherConditionalFilters';

export async function getTeachers(q: string): Promise<Teacher[]> {
  let teachers: Teacher[] = await teacherRepository.getTeachers();
  teachers = teacherConditionalFilters.bySearch(teachers, q);
  return teachers;
} 

export async function getTeacher(id: number): Promise<Teacher> {
  return teacherRepository.getTeacher(id);
}

export async function addTeacher(teacher: Teacher): Promise<void> {
  return teacherRepository.addTeacher(teacher);
}

export async function removeTeacher(id: number): Promise<void> {
  return teacherRepository.removeTeacher(id);
}