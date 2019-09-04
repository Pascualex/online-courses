import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/models/Teacher';
import { UrlGenerator } from 'src/app/utils/UrlGenerator';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private readonly urlGenerator: UrlGenerator = new UrlGenerator();

  constructor(private http: HttpClient) { }

  getTeachers(params: string): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.urlGenerator.teachersWithParams(params));
  }

  addTeacher(teacher: Teacher): Observable<any> {
    return this.http.post(this.urlGenerator.teachers(), teacher);
  }

  removeTeacher(teacher: Teacher): Observable<any> {
    return this.http.delete(this.urlGenerator.teacher(teacher));
  }
}
