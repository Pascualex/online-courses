import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/Course';
import { UrlGenerator } from 'src/app/utils/UrlGenerator';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly urlGenerator: UrlGenerator = new UrlGenerator();

  constructor(private http: HttpClient) { }

  getCourses(params: string): Observable<Course[]> {
    return this.http.get<Course[]>(this.urlGenerator.coursesWithParams(params));
  }

  getUpdatedCourse(course: Course): Observable<Course> {
    return this.http.get<Course>(this.urlGenerator.course(course));
  }

  setCourseActive(course: Course, active: boolean): Observable<Course> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<Course>(this.urlGenerator.courseActiveProperty(course), { active }, { headers });
  }

  addCourse(course: Course): Observable<any> {
    return this.http.post(this.urlGenerator.courses(), course);
  }

  removeCourse(course: Course): Observable<any> {
    return this.http.delete(this.urlGenerator.course(course));
  }
}
