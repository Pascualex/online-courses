import { Course } from '../models/Course';
import { Teacher } from '../models/Teacher';

export class UrlGenerator {
  private readonly baseUrl: string = 'http://localhost:3000';
  // readonly baseUrl: string = 'assets/fake-api';

  base(): string {
    return this.baseUrl;
  }

  courses(): string {
    return this.baseUrl + '/courses';
  }

  coursesWithParams(params: string): string {
    return this.courses() + params;
  }

  course(course: Course): string {
    return this.courses() + '/' +  course.id;
  }

  courseActiveProperty(course: Course): string {
    return this.course(course) + '/active';
  }

  teachers(): string {
    return this.baseUrl + '/teachers';
  }

  teachersWithParams(params: string): string {
    return this.teachers() + params;
  }

  teacher(teacher: Teacher): string {
    return this.teachers() + '/' + teacher.id;
  }
}
