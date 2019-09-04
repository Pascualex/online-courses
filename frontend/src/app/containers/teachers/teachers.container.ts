import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/Teacher';
import { TeacherService } from 'src/app/services/teacher-service/teacher.service';
import { Observable, combineLatest, timer } from 'rxjs';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogNewTeacherComponent } from 'src/app/components/dialog-new-teacher/dialog-new-teacher.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teachers-container',
  templateUrl: './teachers.container.html',
  styleUrls: ['./teachers.container.scss']
})
export class TeacherContainer implements OnInit {

  public teachers: Teacher[] = [];
  public admin: boolean = false;
  public queries: number = 0;
  public emptyResult: boolean = false;
  public connectionSucceed: boolean = false;
  public connectionFailed: boolean = false;

  public searchFilter: string;

  private filtersReady: boolean = false;
  private creatingTeacher: boolean = false;
  private routeSnapshot: ActivatedRouteSnapshot;
  private currentUrl: string;

  constructor(private teacherService: TeacherService, private dialog: MatDialog,
              private router: Router, private route: ActivatedRoute,
              private location: Location) { }

  public ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.checkQueryParams();
  }

  public setAdmin(admin: boolean): void {
    this.admin = admin;
  }

  public createTeacher(): void {
    const dialogRef = this.dialog.open(DialogNewTeacherComponent, {
      maxWidth: '100%',
      width: '500px'
    });

    this.creatingTeacher = true;
    this.updateQueryParams();
    dialogRef.afterClosed().subscribe((created: boolean) => {
      this.creatingTeacher = false;
      this.updateQueryParams();
      if (created) { this.getTeachers(); }
    });
  }

  public removeTeacher(teacher: Teacher): void {
    this.teacherService.removeTeacher(teacher).subscribe(
      () => {
        const index = this.teachers.indexOf(teacher, 0);
        if (index > -1) { this.teachers.splice(index, 1); }
        if (this.teachers.length === 0) { this.emptyResult = true; }
      },
      () => {
        this.router.navigateByUrl('/teachers');
      }
    );
  }

  public setFiltersReady(filtersReady: boolean): void {
    if (this.filtersReady) { return; }
    this.filtersReady = filtersReady;
    this.updateQueryParams();
    this.getTeachers();
  }

  public setSearchFilter(searchFilter: string): void {
    if (searchFilter === this.searchFilter) { return; }
    this.searchFilter = searchFilter;
    if (!this.filtersReady) { return; }
    this.updateQueryParams();
    this.getTeachers();
  }

  public goToCourses(teacher: Teacher): void {
    this.router.navigateByUrl('/courses?teacher=' + teacher.id);
  }

  private getTeachers(): void {
    let params = '';
    if (this.searchFilter) { params += this.addParameter(params, 'q', this.searchFilter); }

    this.queries++;
    this.teacherService.getTeachers(params).subscribe(
      (teachers: Teacher[]) => {
        this.teachers = teachers;
        this.emptyResult = (teachers.length === 0);
        this.connectionSucceed = true;
        this.connectionFailed = false;
      },
      () => {
        this.teachers = [];
        this.emptyResult = false;
        this.connectionSucceed = false;
        this.connectionFailed = true;
      }
    ).add(() => this.queries--);

    if (this.creatingTeacher) { this.createTeacher(); }
  }

  private checkQueryParams(): void {
    this.routeSnapshot = this.route.snapshot;
    const queryParams = this.routeSnapshot.queryParams;
    if (queryParams.q) { this.searchFilter = queryParams.q; }
    if (queryParams.new && queryParams.new === 'true') {
      this.creatingTeacher = true;
      this.admin = true;
    }
  }

  private updateQueryParams(): void {
    let params: string = '';
    params = this.addParameter(params, 'q', this.searchFilter);
    if (this.creatingTeacher) { params = this.addParameter(params, 'new', true); }
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
