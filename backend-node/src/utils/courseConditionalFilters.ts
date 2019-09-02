import { Course } from '../model/Course';
import { CourseLevel } from '../model/CourseLevel';

export function bySearch(courses: Course[], search: string): Course[] {
  if (!search) return courses;
  const words: string[] = search.toLowerCase().split('-');
  return courses.filter((course) => {
    const formattedTitle: string = course.title.toLowerCase();
    for (const word of words) { if (!containsWord(formattedTitle, word)) return false; }
    return true;
  });
}

export function byLevel(courses: Course[], level: CourseLevel): Course[] {
  if (!level || level === CourseLevel.Unknown) return courses;
  return courses.filter((course) => course.level === level);
}

export function byActive(courses: Course[], active: boolean): Course[] {
  if (active === null || active === undefined) return courses;
  return courses.filter((course) => course.active == active);
}

export function byTeacherId(courses: Course[], teacherId: number): Course[] {
  if (!teacherId || teacherId <= 0) return courses;
  return courses.filter((course) => course.teacher.id === teacherId);
}

export function containsWord(s: string, word: string): boolean {
  return new RegExp('\\b' + word + '\\b').test(s);
}
