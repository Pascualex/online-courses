import * as courseMapper from '../mapper/courseMapper';
import { Course, CourseRow, rowToCourse } from '../model/Course';

export async function getCourses(): Promise<Course[]> {
  const rows: CourseRow[] = await courseMapper.getCourses();
  return rows.map((row) => rowToCourse(row));
} 

export async function getCourse(id: number): Promise<Course> {
  const rows: CourseRow[] = await courseMapper.getCoursesById(id);
  if (rows.length > 0) {
    return rowToCourse(rows[0]);
  } else {
    return null;
  }
}

export async function addCourse(course: Course): Promise<void> {
  return courseMapper.addCourse(course);
}

export async function setCourseActive(id: number, active: boolean): Promise<void> {
  return courseMapper.setCoursesActiveById(id, active);
}

export async function removeCourse(id: number): Promise<void> {
  return courseMapper.removeCoursesById(id);
}