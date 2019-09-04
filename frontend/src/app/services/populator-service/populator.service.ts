import { Injectable } from '@angular/core';
import { CourseService } from '../course-service/course.service';
import { TeacherService } from '../teacher-service/teacher.service';

@Injectable({
  providedIn: 'root'
})
export class PopulatorService {

  constructor(private courseService: CourseService, private teacherService: TeacherService) { }

  public populate(coursesPerTeacher: number, teachers: number): void {

  }

  private generateTeacher() {

  }
}
