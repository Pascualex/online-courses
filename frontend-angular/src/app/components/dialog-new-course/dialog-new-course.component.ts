import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CourseService } from 'src/app/services/course-service/course.service';
import { Course } from 'src/app/models/Course';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Teacher } from 'src/app/models/Teacher';
import { CourseLevel } from 'src/app/models/CourseLevel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-new-course',
  templateUrl: './dialog-new-course.component.html',
  styleUrls: ['./dialog-new-course.component.scss']
})
export class DialogNewCourseComponent implements OnInit {

  public teachers: Teacher[];
  public filteredTeachers: Teacher[];

  public formControl: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('[^\\s]+(\\s[^\\s]+)*')
    ]),
    hours: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*[1-9][0-9]*'),
    ]),
    level: new FormControl(undefined, [
      Validators.required
    ]),
    teacher: new FormControl('', [
      Validators.required,
      Validators.maxLength(0)
    ]),
    active: new FormControl(true, [
      Validators.required
    ])
  });

  public CourseLevel = CourseLevel;

  constructor(private dialogRef: MatDialogRef<DialogNewCourseComponent>,
              private courseService: CourseService, private router: Router,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  public ngOnInit(): void {
    if (this.data && this.data.teachers) {
      this.teachers = this.data.teachers;
      this.filteredTeachers = this.teachers;
    }

    this.formControl.get('teacher').valueChanges.subscribe(input => {
      if (input.name) {
        this.filteredTeachers = [];
      } else {
        this.filteredTeachers = this.filterTeachers(input);
      }
    });
  }

  public onNoClick(): void {
    this.dialogRef.close(false);
  }

  public numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) { return false; }
    return true;
  }

  public createCourse(): void {
    if (this.formControl.invalid) { return; }

    const title: string = this.formControl.get('title').value;
    const hours: number = parseInt(this.formControl.get('hours').value, 10);
    const level: CourseLevel =  this.formControl.get('level').value;
    const teacher: Teacher = this.formControl.get('teacher').value;
    const active: boolean = this.formControl.get('active').value;
    const course: Course = new Course(title, level, hours, active, teacher);

    this.courseService.addCourse(course).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  public goToTeachers(): void {
    this.router.navigateByUrl('/profesores?new=true');
    this.dialogRef.close(false);
  }

  public displayTeacher(teacher: Teacher): string {
    return teacher ? teacher.name : '';
  }

  private filterTeachers(value: string): Teacher[] {
    const filteredValue: string = value.toLowerCase();
    return this.teachers.filter((teacher: Teacher) => {
      return (teacher.name.toLowerCase().indexOf(filteredValue) === 0);
    });
  }
}
