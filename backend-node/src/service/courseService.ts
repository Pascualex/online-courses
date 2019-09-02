import * as courseRepository from '../repository/courseRepository';
import { Course } from '../model/Course';
import { CourseLevel } from '../model/CourseLevel';
import * as courseConditionalFilters from '../utils/courseConditionalFilters';

export async function getCourses(active: boolean, q: string, level: CourseLevel, teacherId: number): Promise<Course[]> {
  let courses: Course[] = await courseRepository.getCourses();
  courses = courseConditionalFilters.byActive(courses, active);
  courses = courseConditionalFilters.bySearch(courses, q);
  courses = courseConditionalFilters.byLevel(courses, level);
  courses = courseConditionalFilters.byTeacherId(courses, teacherId);
  return courses;
} 

export async function getCourse(id: number): Promise<Course> {
  return courseRepository.getCourse(id);
}

export async function addCourse(course: Course): Promise<void> {
  return courseRepository.addCourse(course);
}

export async function setCourseActive(id: number, active: boolean): Promise<void> {
  return courseRepository.setCourseActive(id, active);
}

export async function removeCourse(id: number): Promise<void> {
  return courseRepository.removeCourse(id);
}