import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CourseLevel } from 'src/app/models/CourseLevel';
import { FormControl, Validators } from '@angular/forms';
import { Teacher } from 'src/app/models/Teacher';
import { Observable, combineLatest } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-filters-course',
  templateUrl: './filters-course.component.html',
  styleUrls: ['./filters-course.component.scss']
})
export class FiltersCourseComponent implements OnInit {

  @Input()
  public teachersRequest: Observable<Teacher[]>;

  @Input()
  public initialSearchFilter: string;

  @Input()
  public initialTeacherIdFilter: number;

  @Input()
  public initialLevelFilter: CourseLevel;

  @Output()
  public setFiltersReadyEvent: EventEmitter<boolean> = new EventEmitter();

  @Output()
  public setSearchFilterEvent: EventEmitter<string> = new EventEmitter();

  @Output()
  public setTeacherIdFilterEvent: EventEmitter<number> = new EventEmitter();

  @Output()
  public setLevelFilterEvent: EventEmitter<CourseLevel> = new EventEmitter();

  public searchFormControl = new FormControl();
  public teacherFormControl = new FormControl('', [ Validators.maxLength(0) ]);
  public levelFormControl = new FormControl();

  public filteredTeachers: Teacher[];
  public CourseLevel = CourseLevel;

  private teachers: Teacher[] = [];
  private formControlListenersSet: boolean = false;

  constructor() { }

  public ngOnInit(): void {
    this.teachersRequest.subscribe(
      (teachers: Teacher[]) => {
        this.teachers = teachers;
        this.filteredTeachers = teachers;

        this.setInitialFilters();
        this.setFormControlListeners();
        this.setFiltersReady(true);
      },
      () => {
        this.teachers = [];
        this.filteredTeachers = [];

        this.setInitialFilters();
        this.setFormControlListeners();
        this.setFiltersReady(true);
      }
    );
  }

  public displayTeacher(teacher: Teacher): string {
    return teacher ? teacher.name : '';
  }

  private setSearchFilter(searchFilter: string): void {
    this.setSearchFilterEvent.emit(searchFilter);
  }

  private setLevelFilter(levelFilter: CourseLevel): void {
    this.setLevelFilterEvent.emit(levelFilter);
  }

  private setTeacherIdFilter(teacherIdFilter: number): void {
    this.setTeacherIdFilterEvent.emit(teacherIdFilter);
  }

  private setInitialFilters(): void {
    if (this.initialSearchFilter) {
      this.searchFormControl.setValue(this.initialSearchFilter.replace('-', ' '));
    }

    if (this.initialTeacherIdFilter) {
      const teacher = this.teachers.filter((teacher: Teacher) => {
        return teacher.id === this.initialTeacherIdFilter;
      })[0];

      if (teacher) {
        this.teacherFormControl.setValue(teacher);
      } else {
        this.setTeacherIdFilter(undefined);
      }
    }

    if (this.initialLevelFilter) { this.levelFormControl.setValue(this.initialLevelFilter); }
  }

  private setFormControlListeners(): void {
    if (this.formControlListenersSet) { return; }
    this.formControlListenersSet = true;

    this.searchFormControl.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((input: string) => {
      this.manageSearchFormControlChange(input);
    });

    this.teacherFormControl.valueChanges.subscribe(input => {
      this.manageTeacherFormControlChange(input);
    });

    this.levelFormControl.valueChanges.subscribe(input => {
      this.setLevelFilter(input);
    });
  }

  private setFiltersReady(filtersReady: boolean): void {
    this.setFiltersReadyEvent.emit(filtersReady);
  }

  private manageSearchFormControlChange(input: string): void {
    let formattedInput = input.trim();
    if (formattedInput.length > 0) {
      formattedInput = formattedInput.replace(/\s+/g, '-');
      this.setSearchFilter(formattedInput);
    } else {
      this.setSearchFilter(undefined);
    }
  }

  private manageTeacherFormControlChange(input: any): void {
    if (input.id) {
      this.filteredTeachers = [];
      this.setTeacherIdFilter(input.id);
    } else {
      this.filteredTeachers = this.filterTeachers(input);
      this.setTeacherIdFilter(undefined);
    }
  }

  private filterTeachers(value: string): Teacher[] {
    const filteredValue: string = value.toLowerCase();
    return this.teachers.filter((teacher: Teacher) => {
      return (teacher.name.toLowerCase().indexOf(filteredValue) === 0);
    });
  }
}
