import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course-service/course.service';
import { Course } from 'src/app/models/Course';
import { CourseLevel } from 'src/app/models/CourseLevel';
import { Observable } from 'rxjs';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { DialogNewCourseComponent } from 'src/app/components/dialog-new-course/dialog-new-course.component';
import { MatDialog } from '@angular/material';
import { Teacher } from 'src/app/models/Teacher';
import { TeacherService } from 'src/app/services/teacher-service/teacher.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-courses-container',
  templateUrl: './courses.container.html',
  styleUrls: ['./courses.container.scss']
})
export class CoursesContainer implements OnInit {

  public courses: Course[] = [];
  public teachers: Teacher[] = [];
  public admin: boolean = false;
  public queries: number = 0;
  public emptyResult: boolean = false;
  public connectionSucceed: boolean = false;
  public connectionFailed: boolean = false;

  public teachersRequest: Observable<Teacher[]>;
  public searchFilter: string;
  public levelFilter: CourseLevel;
  public teacherIdFilter: number;

  private filtersReady: boolean = false;
  private creatingCourse: boolean = false;
  private routeSnapshot: ActivatedRouteSnapshot;
  private currentUrl: string;

  constructor(private courseService: CourseService, private teacherService: TeacherService,
              private dialog: MatDialog, private router: Router, private route: ActivatedRoute,
              private location: Location) { }

  public ngOnInit(): void {
    this.getTeachers();
    this.checkQueryParams();
  }

  public setAdmin(admin: boolean): void {
    this.admin = admin;
    this.getCourses();
  }

  public createCourse(): void {
    const dialogRef = this.dialog.open(DialogNewCourseComponent, {
      maxWidth: '100%',
      width: '500px',
      data: { teachers: this.teachers }
    });

    this.creatingCourse = true;
    this.updateQueryParams();
    dialogRef.afterClosed().subscribe((created: boolean) => {
      this.creatingCourse = false;
      this.updateQueryParams();
      if (created) { this.getCourses(); }
    });
  }

  public setCourseActive(course: Course, active: boolean): void {
    this.courseService.setCourseActive(course, active).subscribe(
      (updatedCourse: Course) => {
        course.active = updatedCourse.active;
      },
      () => {
        this.router.navigateByUrl('/cursos');
      }
    );
  }

  public removeCourse(course: Course): void {
    this.courseService.removeCourse(course).subscribe(
      () => {
        const index = this.courses.indexOf(course, 0);
        if (index > -1) { this.courses.splice(index, 1); }
        if (this.courses.length === 0) { this.emptyResult = true; }
      },
      () => {
        this.router.navigateByUrl('/cursos');
      }
    );
  }

  public setFiltersReady(filtersReady: boolean): void {
    this.filtersReady = filtersReady;
    this.updateQueryParams();
    this.getCourses();
  }

  public setSearchFilter(searchFilter: string): void {
    if (searchFilter === this.searchFilter) { return; }
    this.searchFilter = searchFilter;
    if (!this.filtersReady) { return; }
    this.updateQueryParams();
    this.getCourses();
  }

  public setLevelFilter(levelFilter: CourseLevel): void {
    if (levelFilter === this.levelFilter) { return; }
    this.levelFilter = levelFilter;
    if (!this.filtersReady) { return; }
    this.updateQueryParams();
    this.getCourses();
  }

  public setTeacherIdFilter(teacherIdFilter: number): void {
    if (teacherIdFilter === this.teacherIdFilter) { return; }
    this.teacherIdFilter = teacherIdFilter;
    if (!this.filtersReady) { return; }
    this.updateQueryParams();
    this.getCourses();
  }

  public getLevelText(course: Course): string {
    switch (course.level) {
      case (CourseLevel.Basic): return 'Básico';
      case (CourseLevel.Intermediate): return 'Intermedio';
      case (CourseLevel.Advanced): return 'Avanzado';
      default: return 'Desconocido';
    }
  }

  public getImageUrl(course: Course): string {
    switch (course.level) {
      case (CourseLevel.Basic): return '/assets/images/course-basic.jpg';
      case (CourseLevel.Intermediate): return '/assets/images/course-intermediate.jpg';
      case (CourseLevel.Advanced): return '/assets/images/course-advanced.jpg';
      default: return '/assets/images/course-card-unknown.jpg';
    }
  }

  private getCourses(): void {
    let params: string = '';
    if (!this.admin) { params = this.addParameter(params, 'active', true); }
    params = this.addParameter(params, 'q', this.searchFilter);
    params = this.addParameter(params, 'level', this.levelFilter);
    params = this.addParameter(params, 'teacher', this.teacherIdFilter);

    this.queries++;
    this.courseService.getCourses(params).subscribe(
      (courses: Course[]) => {
        this.courses = courses;
        this.emptyResult = (courses.length === 0);
        this.connectionSucceed = true;
        this.connectionFailed = false;
      },
      () => {
        this.courses = [];
        this.emptyResult = false;
        this.connectionSucceed = false;
        this.connectionFailed = true;
      }
    ).add(() => this.queries--);
  }

  private getTeachers(): void {
    this.teachersRequest = this.teacherService.getTeachers('');
    this.teachersRequest.subscribe(
      (teachers: Teacher[]) => {
        this.teachers = teachers;
        if (this.creatingCourse) { this.createCourse(); }
      },
      () => {
        this.teachers = [];
      }
    );
  }


  private checkQueryParams(): void {
    this.routeSnapshot = this.route.snapshot;
    const queryParams = this.routeSnapshot.queryParams;
    if (queryParams.q) { this.searchFilter = queryParams.q; }
    if (queryParams.teacher) {this.teacherIdFilter = parseInt(queryParams.teacher, 10); }
    if (queryParams.level) { this.levelFilter = queryParams.level; }
    if (queryParams.new && queryParams.new === 'true') {
      this.creatingCourse = true;
      this.admin = true;
    }
  }

  private updateQueryParams(): void {
    let params: string = '';
    params = this.addParameter(params, 'q', this.searchFilter);
    params = this.addParameter(params, 'teacher', this.teacherIdFilter);
    params = this.addParameter(params, 'level', this.levelFilter);
    if (this.creatingCourse) { params = this.addParameter(params, 'new', true); }
    if (this.currentUrl !== '/' + this.routeSnapshot.url + params) {
      this.currentUrl = this.routeSnapshot.url + params;
      this.location.go(this.routeSnapshot.url + params);
    }
  }

  private addParameter(params: string, paramName: string, paramValue: any): string {
    if (!paramValue) { return params; }
    if (params.length === 0) { return params + '?' + paramName + '=' + paramValue; }
    return params + '&' + paramName + '=' + paramValue;
  }
}
